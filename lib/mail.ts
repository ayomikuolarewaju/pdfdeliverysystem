import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_PORT === '465', // true for port 465, false for 587/25
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

type SendDownloadEmailParams = {
  to: string;
  pdfTitle: string;
  downloadUrl: string;
  reference: string;
};

export async function sendDownloadEmail({
  to,
  pdfTitle,
  downloadUrl,
  reference,
}: SendDownloadEmailParams) {
  await transporter.sendMail({
    from: process.env.SMTP_FROM, // e.g. '"Fieldnotes" <no-reply@yourdomain.com>'
    to,
    subject: `Your download: ${pdfTitle}`,
    text:
      `Thanks for your purchase — here's your download link:\n\n${downloadUrl}\n\n` +
      `This link stays valid for 48 hours. Reference: ${reference}\n\n` +
      `If it expires, just reply to this email and we'll resend it.`,
    html: `
      <p>Thanks for your purchase — here's your download link:</p>
      <p><a href="${downloadUrl}">${pdfTitle}</a></p>
      <p style="color:#55524A;font-size:13px;">
        This link stays valid for 48 hours. Reference: ${reference}<br/>
        If it expires, just reply to this email and we'll resend it.
      </p>
    `,
  });
}
