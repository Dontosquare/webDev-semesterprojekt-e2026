import nodemailer from 'nodemailer';

const port = Number(process.env.SMTP_PORT || 587);
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port,
  secure: port === 465,
  requireTLS: port === 587,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});
export default transporter;