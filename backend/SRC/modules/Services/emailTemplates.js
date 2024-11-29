
export const verificationEmailTemplete=`
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f9f9f9;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 30px auto;
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            border: 1px solid #e0e0e0;
        }
        .header {
            background-color: #28a745;
            color: white;
            text-align: center;
            padding: 30px 10px;
        }
        .header h1 {
            margin: 0;
            font-size: 26px;
            font-weight: bold;
        }
        .content {
            padding: 30px;
            text-align: center;
        }
        .content p {
            font-size: 16px;
            color: #555555;
            line-height: 1.6;
        }
        .code {
            display: inline-block;
            margin: 20px 0;
            padding: 15px 25px;
            font-size: 24px;
            font-weight: bold;
            color: #ffffff;
            background-color: #28a745;
            border-radius: 8px;
            text-decoration: none;
            letter-spacing:5px;
        }
        .footer {
            background-color: #f1f1f1;
            text-align: center;
            padding: 15px 10px;
            font-size: 13px;
            color: #888888;
        }
        .footer a {
            color: #28a745;
            text-decoration: none;
        }
        .footer a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Email Header -->
        <div class="header">
            <h1>Verify Your Email</h1>
        </div>

        <!-- Email Content -->
        <div class="content">
            <p>Welcome! Thank you for signing up. To complete your registration, please verify your email by entering the code below:</p>
            <div class="code">{{code}}</div>
            <p>If you didn’t request this, you can safely ignore this email.</p>
        </div>

        <!-- Email Footer -->
        <div class="footer">
            <p>&copy; 2024 Your Company Name. All rights reserved.</p>
            <p><a href="https://yourdomain.com">Visit our website</a></p>
        </div>
    </div>
</body>
</html>
`
export const resetPasswordRequestTemplete=`
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f9f9f9;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 30px auto;
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            border: 1px solid #e0e0e0;
        }
        .header {
            background-color: #28a745;
            color: white;
            text-align: center;
            padding: 30px 10px;
        }
        .header h1 {
            margin: 0;
            font-size: 26px;
            font-weight: bold;
        }
        .content {
            padding: 30px;
            text-align: center;
        }
        .content p {
            font-size: 16px;
            color: #555555;
            line-height: 1.6;
        }
        .button {
            display: inline-block;
            margin: 20px 0;
            padding: 15px 25px;
            font-size: 18px;
            font-weight: bold;
            color: #ffffff;
            background-color: #28a745;
            border-radius: 8px;
            text-decoration: none;
        }
        .footer {
            background-color: #f1f1f1;
            text-align: center;
            padding: 15px 10px;
            font-size: 13px;
            color: #888888;
        }
        .footer a {
            color: #28a745;
            text-decoration: none;
        }
        .footer a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Email Header -->
        <div class="header">
            <h1>Reset Your Password</h1>
        </div>

        <!-- Email Content -->
        <div class="content">
            <p>We received a request to reset your password. If you made this request, click the button below to reset your password:</p>
            <a href="{{resetLink}}" class="button">Reset Password</a>
            <p>If you did not request this, you can safely ignore this email. Your password will remain unchanged.</p>
        </div>

        <!-- Email Footer -->
        <div class="footer">
            <p>&copy; 2024 Your Company Name. All rights reserved.</p>
            <p><a href="https://yourdomain.com">Visit our website</a> | <a href="mailto:support@yourdomain.com">Contact support</a></p>
        </div>
    </div>
</body>
</html>
`
export const resetPasswordSuccessTemplete=`
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f9f9f9;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 30px auto;
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            border: 1px solid #e0e0e0;
        }
        .header {
            background-color: #28a745;
            color: white;
            text-align: center;
            padding: 30px 10px;
        }
        .header h1 {
            margin: 0;
            font-size: 26px;
            font-weight: bold;
        }
        .content {
            padding: 30px;
            text-align: center;
        }
        .content p {
            font-size: 16px;
            color: #555555;
            line-height: 1.6;
        }
        .button {
            display: inline-block;
            margin: 20px 0;
            padding: 15px 25px;
            font-size: 18px;
            font-weight: bold;
            color: #ffffff;
            background-color: #28a745;
            border-radius: 8px;
            text-decoration: none;
        }
        .footer {
            background-color: #f1f1f1;
            text-align: center;
            padding: 15px 10px;
            font-size: 13px;
            color: #888888;
        }
        .footer a {
            color: #28a745;
            text-decoration: none;
        }
        .footer a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Email Header -->
        <div class="header">
            <h1>Password Updated Successfully</h1>
        </div>

        <!-- Email Content -->
        <div class="content">
            <p>Your password has been successfully updated. If you made this change, you can safely ignore this message.</p>
            <p>If you did not request this change or believe your account may be compromised, please <a href="mailto:support@yourdomain.com" style="color: #28a745; text-decoration: underline;">contact our support team</a> immediately.</p>
            <a href="https://yourdomain.com/login" class="button">Go to Login</a>
        </div>

        <!-- Email Footer -->
        <div class="footer">
            <p>&copy; 2024 Your Company Name. All rights reserved.</p>
            <p><a href="https://yourdomain.com">Visit our website</a> | <a href="mailto:support@yourdomain.com">Contact support</a></p>
        </div>
    </div>
</body>
</html>
`