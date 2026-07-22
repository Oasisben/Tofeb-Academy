import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const SECTOR_LABELS: Record<string, string> = {
  'food': 'Food Sector',
  'fashion': 'Fashion Sector',
  'real-estate': 'Real Estate Sector',
}

export async function sendConfirmationEmail({
  full_name,
  email,
  preferred_sector,
}: {
  full_name: string
  email: string
  preferred_sector: string
}) {
  const sectorLabel = SECTOR_LABELS[preferred_sector] ?? preferred_sector

  await resend.emails.send({
    from: 'Tofeb Academy <noreply@tofebacademy.com.ng>',
    to: email,
    subject: '🎉 Your Enrollment is Confirmed — Tofeb Academy',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
        </head>
        <body style="margin:0;padding:0;background:#f4f8fd;font-family:'Inter',Arial,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f8fd;padding:40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

                  <!-- Header -->
                  <tr>
                    <td style="background:#0a1628;border-radius:16px 16px 0 0;padding:40px;text-align:center;">
                      <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:800;letter-spacing:-0.5px;">
                        Tofeb <span style="color:#60a5fa;">Academy</span>
                      </h1>
                      <p style="margin:8px 0 0;color:#94a3b8;font-size:13px;">
                        Building Tomorrow's Entrepreneurs
                      </p>
                    </td>
                  </tr>

                  <!-- Body -->
                  <tr>
                    <td style="background:#ffffff;padding:48px 40px;">
                      <div style="text-align:center;margin-bottom:32px;">
                        <div style="width:64px;height:64px;background:#dcfce7;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;margin-bottom:16px;">
                          <span style="font-size:28px;">✅</span>
                        </div>
                        <h2 style="margin:0 0 8px;color:#0a1628;font-size:24px;font-weight:700;">
                          You're In! Welcome to Tofeb Academy
                        </h2>
                        <p style="margin:0;color:#64748b;font-size:15px;line-height:1.6;">
                          Hi <strong style="color:#0a1628;">${full_name}</strong>, your payment has been confirmed
                          and your enrollment is now active.
                        </p>
                      </div>

                      <!-- Enrollment card -->
                      <div style="background:#f4f8fd;border-radius:12px;padding:24px;margin-bottom:28px;text-align:center;">
                        <p style="margin:0 0 4px;color:#94a3b8;font-size:12px;text-transform:uppercase;letter-spacing:1px;font-weight:600;">
                          Your Program
                        </p>
                        <p style="margin:0;color:#1e5fa8;font-size:20px;font-weight:800;font-family:sans-serif;">
                          ${sectorLabel}
                        </p>
                        <p style="margin:8px 0 0;color:#64748b;font-size:13px;">
                          4-Week Business Masterclass
                        </p>
                      </div>

                      <!-- What happens next -->
                      <h3 style="margin:0 0 16px;color:#0a1628;font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:1px;">
                        What Happens Next
                      </h3>
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
                        ${[
                          'Our team will reach out with your program schedule and onboarding details',
                          'You will be added to the student community and alumni group',
                          'Your 4-week journey begins — get ready to build',
                        ].map((step, i) => `
                          <tr>
                            <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;vertical-align:top;">
                              <span style="display:inline-flex;align-items:center;gap:8px;color:#64748b;font-size:13px;line-height:1.5;">
                                <span style="color:#1e5fa8;font-weight:700;">${i + 1}.</span> ${step}
                              </span>
                            </td>
                          </tr>
                        `).join('')}
                      </table>

                      <p style="margin:0 0 24px;color:#94a3b8;font-size:13px;text-align:center;line-height:1.6;">
                        Questions? Reply to this email or chat with us on WhatsApp.
                        We're excited to have you on board! 🚀
                      </p>

                      <div style="text-align:center;">
                        <a href="https://tofebacademy.com.ng/programs"
                          style="display:inline-block;background:#1e5fa8;color:#ffffff;text-decoration:none;font-size:14px;font-weight:700;padding:14px 32px;border-radius:10px;">
                          View Your Program →
                        </a>
                      </div>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background:#f4f8fd;border-radius:0 0 16px 16px;padding:28px 40px;text-align:center;border-top:1px solid #e2e8f0;">
                      <p style="margin:0 0 8px;color:#94a3b8;font-size:12px;">
                        © ${new Date().getFullYear()} Tofeb Academy. All rights reserved.
                      </p>
                      <p style="margin:0;color:#cbd5e1;font-size:11px;">
                        Building Tomorrow's Entrepreneurs
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `,
  })
}