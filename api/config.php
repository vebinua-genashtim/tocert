<?php
// Email configuration
define('MS365_TENANT_ID', '');
define('MS365_CLIENT_ID', '');
define('MS365_CLIENT_SECRET', '');
define('MS365_FROM_EMAIL', 'info@to-cert.com');
define('MS365_TO_EMAIL', 'info@to-cert.com');

// CORS headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}
?>
