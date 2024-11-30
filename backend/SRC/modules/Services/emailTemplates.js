
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
            color: #ffffff !important;
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
export const resetPasswordSuccessTemplete=`<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            color: #333333;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }
        .header {
            background-color: #28a745;
            color: white;
            text-align: center;
            padding: 30px;
        }
        .header h1 {
            font-size: 24px;
            margin: 0;
        }
        .header .icon {
            font-size: 40px;
            margin: 10px 0;
        }
        .content {
            padding: 20px 30px;
            text-align: left;
        }
        .content h2 {
            font-size: 20px;
            color: #28a745;
        }
        .content p {
            font-size: 16px;
            line-height: 1.6;
            margin: 10px 0;
        }
        .footer {
            text-align: center;
            padding: 15px;
            font-size: 14px;
            background: #f9f9f9;
            color: #777777;
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
        <!-- Header Section -->
        <div class="header">
            <div class="icon">✅</div>
            <h1>Reset Password Successful</h1>
        </div>
        <!-- Content Section -->
        <div class="content">
            <h2>Hello [User's Name],</h2>
            <p>We wanted to let you know that your password has been successfully reset. You can now use your new password to log into your account.</p>
            <p>If you didn’t request this change, please contact our support team immediately for assistance.</p>
            <p>Thank you for being with us!</p>
        </div>
        <!-- Footer Section -->
        <div class="footer">
            <p>&copy; 2024 [Your Service Name]. All Rights Reserved.</p>
            <p>
                <a href="[YourWebsiteURL]">Visit our website</a> | 
                <a href="mailto:support@[YourDomain].com">Contact Support</a>
            </p>
        </div>
    </div>
</body>
</html>

`

export const welecomeEmailTemplete=`
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            color: #333333;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }
        .header {
            background-color: #28a745;
            color: white;
            text-align: center;
            padding: 30px;
        }
        .header h1 {
            font-size: 24px;
            margin: 0;
        }
        .content {
            padding: 20px 30px;
            text-align: left;
        }
        .content h2 {
            font-size: 20px;
            color: #28a745;
        }
        .content p {
            font-size: 16px;
            line-height: 1.6;
            margin: 10px 0;
        }
        .button {
            display: block;
            text-align: center;
            margin: 20px 0;
        }
        .button a {
            text-decoration: none;
            color: white;
            background-color: #28a745;
            padding: 10px 20px;
            border-radius: 6px;
            font-size: 16px;
            font-weight: bold;
        }
        .footer {
            text-align: center;
            padding: 15px;
            font-size: 14px;
            background: #f9f9f9;
            color: #777777;
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
        <!-- Header Section -->
        <div class="header">
            <h1>Welcome to YousefAuth!</h1>
        </div>
        <!-- Content Section -->
        <div class="content">
            <h2>Hi [User's Name],</h2>
            <p>We're excited to have you join us! At YousefAuth, we strive to provide the best experience possible and help you achieve your goals.</p>
            <p>Feel free to explore your account and make the most of the tools and features available. If you need assistance, we're just a click away.</p>
            <div class="button">
                <a href="[YourLoginURL]">Get Started</a>
            </div>
            <p>Thank you for choosing YousefAuth. We look forward to seeing you around!</p>
        </div>
        <!-- Footer Section -->
        <div class="footer">
            <p>&copy; 2024 YousefAuth. All Rights Reserved.</p>
            <p>
                <a href="[YourWebsiteURL]">Visit our website</a> | 
                <a href="mailto:support@[YourDomain].com">Contact Support</a>
            </p>
        </div>
    </div>
</body>
</html>

`