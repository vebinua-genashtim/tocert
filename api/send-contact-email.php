<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data || !isset($data['name']) || !isset($data['email']) || !isset($data['message'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Name, email, and message are required']);
    exit;
}

$name = htmlspecialchars($data['name']);
$email = htmlspecialchars($data['email']);
$company = isset($data['company']) ? htmlspecialchars($data['company']) : '';
$message = htmlspecialchars($data['message']);

require_once 'config.php';

if (!MS365_TENANT_ID || !MS365_CLIENT_ID || !MS365_CLIENT_SECRET) {
    http_response_code(500);
    echo json_encode(['error' => 'Email service not configured']);
    exit;
}

function getMicrosoftAccessToken($tenantId, $clientId, $clientSecret) {
    $tokenEndpoint = "https://login.microsoftonline.com/$tenantId/oauth2/v2.0/token";

    $postData = [
        'client_id' => $clientId,
        'client_secret' => $clientSecret,
        'scope' => 'https://graph.microsoft.com/.default',
        'grant_type' => 'client_credentials'
    ];

    $ch = curl_init($tokenEndpoint);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($postData));
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/x-www-form-urlencoded'
    ]);

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($httpCode !== 200) {
        throw new Exception("Failed to get access token: $response");
    }

    $tokenData = json_decode($response, true);
    return $tokenData['access_token'];
}

try {
    $accessToken = getMicrosoftAccessToken(MS365_TENANT_ID, MS365_CLIENT_ID, MS365_CLIENT_SECRET);

    $htmlContent = '
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #d97706; }
    .value { margin-top: 5px; }
    .message-box { background: white; padding: 15px; border-left: 4px solid #f59e0b; margin-top: 10px; white-space: pre-wrap; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2 style="margin: 0;">New Contact Form Submission</h2>
      <p style="margin: 5px 0 0 0; opacity: 0.9;">TO-CERT Website</p>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Name:</div>
        <div class="value">' . $name . '</div>
      </div>
      <div class="field">
        <div class="label">Email:</div>
        <div class="value"><a href="mailto:' . $email . '">' . $email . '</a></div>
      </div>';

    if ($company) {
        $htmlContent .= '
      <div class="field">
        <div class="label">Company:</div>
        <div class="value">' . $company . '</div>
      </div>';
    }

    $htmlContent .= '
      <div class="field">
        <div class="label">Message:</div>
        <div class="message-box">' . nl2br($message) . '</div>
      </div>
    </div>
    <div class="footer">
      Submitted from TO-CERT website contact form
    </div>
  </div>
</body>
</html>';

    $emailPayload = [
        'message' => [
            'subject' => "New Contact Form Submission from $name",
            'body' => [
                'contentType' => 'HTML',
                'content' => $htmlContent
            ],
            'toRecipients' => [
                [
                    'emailAddress' => [
                        'address' => MS365_TO_EMAIL
                    ]
                ]
            ],
            'replyTo' => [
                [
                    'emailAddress' => [
                        'address' => $email,
                        'name' => $name
                    ]
                ]
            ]
        ],
        'saveToSentItems' => 'true'
    ];

    $graphEndpoint = "https://graph.microsoft.com/v1.0/users/" . MS365_FROM_EMAIL . "/sendMail";

    $ch = curl_init($graphEndpoint);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($emailPayload));
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Authorization: Bearer ' . $accessToken,
        'Content-Type: application/json'
    ]);

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($httpCode === 202 || $httpCode === 200) {
        http_response_code(200);
        echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
    } else {
        throw new Exception("Failed to send email: $response");
    }

} catch (Exception $e) {
    error_log("Error sending email: " . $e->getMessage());
    http_response_code(500);
    echo json_encode([
        'error' => 'Failed to send email',
        'details' => $e->getMessage()
    ]);
}
?>
