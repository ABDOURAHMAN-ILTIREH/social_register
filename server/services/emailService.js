const nodemailer = require('nodemailer');
require('dotenv').config();

// SMTP configuration (using Gmail as example)
const transporter = nodemailer.createTransport({
  service: 'gmail', // or your SMTP host (e.g., 'Outlook', 'Yahoo')
  auth: {
    user: process.env.EMAIL_USER, // Your email (e.g., 'you@gmail.com')
    pass: process.env.EMAIL_PASSWORD, // App password (not regular password)
  },
});

/**
 * Send password reset email
 * @param {string} to - Recipient email
 * @param {string} resetLink - Password reset link
 * @returns {Promise<boolean>} - True if email sent successfully
 */
async function sendResetPasswordEmail({ to, resetLink }) {
  const mailOptions = {
    from: `social register <${process.env.EMAIL_USER}>`,
    to,
    subject: 'Password Reset Request',
    html: `
      <p>You requested a password reset. Click the link below:</p>
      <a href="${resetLink}">Reset Password</a>
      <p>This link expires in 15 min.</p>
      <p>If you didn't request this, please ignore this email.</p>
    `,
    text: `Reset your password here: ${resetLink}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Reset email sent to ${to}`);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
}

module.exports = { sendResetPasswordEmail };