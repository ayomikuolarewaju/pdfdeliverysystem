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
    from: process.env.SMTP_FROM, // e.g. '"PdfDelivery" <no-reply@yourdomain.com>'
    to,
    subject: `Your download: ${pdfTitle}`,
    text:
      `Thanks for your purchase — here's your download link:\n\n${downloadUrl}\n\n` +
      `This is a one-time link — it stops working once you've downloaded the file. ` +
      `Reference: ${reference}\n\n` +
      `Lost this email before using the link? You can request it again at ${process.env.NEXT_PUBLIC_SITE_URL}/resend. ` +
      `Already used it and something went wrong? Just reply to this email.`,
    html: `
      <p>Thanks for your purchase — here's your download link:</p>
      <p><a href="${downloadUrl}">${pdfTitle}</a></p>
      <p style="color:#55524A;font-size:13px;">
        This is a one-time link — it stops working once you've downloaded the file.
        Reference: ${reference}<br/>
        Lost this email before using the link? You can
        <a href="${process.env.NEXT_PUBLIC_SITE_URL}/resend">request it again here</a>.<br/>
        Already used it and something went wrong? Just reply to this email.
      </p>
    `,
  });
}
