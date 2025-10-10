import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2.57.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactSubmission {
  fullName: string;
  companyName: string;
  email: string;
  message: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { fullName, companyName, email, message }: ContactSubmission = await req.json();

    if (!fullName || !companyName || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const submissionId = crypto.randomUUID();
    
    const { error: dbError } = await supabase
      .from("contact_submissions")
      .insert({
        id: submissionId,
        full_name: fullName,
        company_name: companyName,
        email: email,
        message: message,
      });

    if (dbError) {
      console.error("Database error:", dbError);
      return new Response(
        JSON.stringify({ error: "Failed to save submission" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const microsoftClientId = Deno.env.get("MICROSOFT_CLIENT_ID");
    const microsoftClientSecret = Deno.env.get("MICROSOFT_CLIENT_SECRET");
    const microsoftTenantId = Deno.env.get("MICROSOFT_TENANT_ID");
    const recipientEmail = Deno.env.get("RECIPIENT_EMAIL");

    let emailSent = false;
    let emailError = null;

    if (microsoftClientId && microsoftClientSecret && microsoftTenantId && recipientEmail) {
      try {
        const tokenResponse = await fetch(
          `https://login.microsoftonline.com/${microsoftTenantId}/oauth2/v2.0/token`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
              client_id: microsoftClientId,
              client_secret: microsoftClientSecret,
              scope: "https://graph.microsoft.com/.default",
              grant_type: "client_credentials",
            }),
          }
        );

        if (!tokenResponse.ok) {
          throw new Error(`Token request failed: ${await tokenResponse.text()}`);
        }

        const { access_token } = await tokenResponse.json();

        const emailContent = {
          message: {
            subject: `New Contact Form Submission from ${fullName}`,
            body: {
              contentType: "HTML",
              content: `
                <html>
                  <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                    <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
                      <div style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); padding: 30px; border-radius: 10px 10px 0 0;">
                        <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
                      </div>
                      <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                        <h2 style="color: #f59e0b; border-bottom: 2px solid #f59e0b; padding-bottom: 10px;">Contact Details</h2>
                        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                          <tr>
                            <td style="padding: 10px; background-color: #f9f9f9; font-weight: bold; width: 150px;">Full Name:</td>
                            <td style="padding: 10px;">${fullName}</td>
                          </tr>
                          <tr>
                            <td style="padding: 10px; background-color: #f9f9f9; font-weight: bold;">Company:</td>
                            <td style="padding: 10px;">${companyName}</td>
                          </tr>
                          <tr>
                            <td style="padding: 10px; background-color: #f9f9f9; font-weight: bold;">Email:</td>
                            <td style="padding: 10px;"><a href="mailto:${email}" style="color: #f59e0b;">${email}</a></td>
                          </tr>
                        </table>
                        <h2 style="color: #f59e0b; border-bottom: 2px solid #f59e0b; padding-bottom: 10px; margin-top: 30px;">Message</h2>
                        <div style="padding: 20px; background-color: #f9f9f9; border-left: 4px solid #f59e0b; margin: 20px 0; border-radius: 5px;">
                          <p style="margin: 0; white-space: pre-wrap;">${message}</p>
                        </div>
                        <div style="margin-top: 30px; padding: 15px; background-color: #fef3c7; border-radius: 5px;">
                          <p style="margin: 0; font-size: 14px; color: #92400e;">
                            <strong>Submission ID:</strong> ${submissionId}<br>
                            <strong>Received:</strong> ${new Date().toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </body>
                </html>
              `,
            },
            toRecipients: [
              {
                emailAddress: {
                  address: recipientEmail,
                },
              },
            ],
          },
          saveToSentItems: true,
        };

        const sendEmailResponse = await fetch(
          `https://graph.microsoft.com/v1.0/users/${recipientEmail}/sendMail`,
          {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${access_token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(emailContent),
          }
        );

        if (!sendEmailResponse.ok) {
          throw new Error(`Email send failed: ${await sendEmailResponse.text()}`);
        }

        emailSent = true;

        await supabase
          .from("contact_submissions")
          .update({
            email_sent: true,
            email_sent_at: new Date().toISOString(),
          })
          .eq("id", submissionId);
      } catch (error) {
        console.error("Email sending error:", error);
        emailError = error.message;
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        submissionId,
        emailSent,
        message: emailSent
          ? "Submission received and email sent successfully"
          : "Submission received but email could not be sent. Please configure Microsoft 365 credentials.",
        emailError,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});