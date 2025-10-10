/*
  # Create contact form submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `full_name` (text) - Name of the person submitting the form
      - `company_name` (text) - Company name of the submitter
      - `email` (text) - Email address of the submitter
      - `message` (text) - The message content
      - `created_at` (timestamptz) - Timestamp of submission
      - `email_sent` (boolean) - Whether the email was successfully sent
      - `email_sent_at` (timestamptz) - When the email was sent
      
  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for service role to insert and read submissions
    
  3. Important Notes
    - This table stores all contact form submissions for record-keeping
    - Email notifications are sent via Edge Function
    - Only service role can access this data for security
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  company_name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  email_sent boolean DEFAULT false,
  email_sent_at timestamptz
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role can manage contact submissions"
  ON contact_submissions
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);