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
    from: 'Tofeb Academy <onboarding@resend.dev>',
    to: email,
    subject: 'Your Application Has Been Received — Tofeb Academy',
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
                      <h2 style="margin:0 0 8px;color:#0a1628;font-size:22px;font-weight:700;">
                        Application Received! 🎉
                      </h2>
                      <p style="margin:0 0 24px;color:#64748b;font-size:15px;line-height:1.6;">
                        Hi <strong style="color:#0a1628;">${full_name}</strong>, thank you for applying to Tofeb Academy.
                        We have received your application and our team will be in touch within
                        <strong style="color:#0a1628;">24 hours</strong> to confirm your enrollment and share next steps.
                      </p>

                      <!-- Application summary -->
                      <div style="background:#f4f8fd;border-radius:12px;padding:24px;margin-bottom:28px;">
                        <h3 style="margin:0 0 16px;color:#0a1628;font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:1px;">
                          Your Application Summary
                        </h3>
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="padding:8px 0;border-bottom:1px solid #e2e8f0;">
                              <span style="color:#94a3b8;font-size:13px;">Full Name</span>
                            </td>
                            <td style="padding:8px 0;border-bottom:1px solid #e2e8f0;text-align:right;">
                              <span style="color:#0a1628;font-size:13px;font-weight:600;">${full_name}</span>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding:8px 0;border-bottom:1px solid #e2e8f0;">
                              <span style="color:#94a3b8;font-size:13px;">Email</span>
                            </td>
                            <td style="padding:8px 0;border-bottom:1px solid #e2e8f0;text-align:right;">
                              <span style="color:#0a1628;font-size:13px;font-weight:600;">${email}</span>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding:8px 0;">
                              <span style="color:#94a3b8;font-size:13px;">Preferred Sector</span>
                            </td>
                            <td style="padding:8px 0;text-align:right;">
                              <span style="color:#1e5fa8;font-size:13px;font-weight:700;">${sectorLabel}</span>
                            </td>
                          </tr>
                        </table>
                      </div>

                      <!-- What happens next -->
                      <h3 style="margin:0 0 16px;color:#0a1628;font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:1px;">
                        What Happens Next
                      </h3>
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
                        ${[
                          ['Our team reviews your application', 'Within a few hours'],
                          ['We contact you to confirm your spot', 'Within 24 hours'],
                          ['You receive program details and access', 'After confirmation'],
                        ].map(([step, time]) => `
                          <tr>
                            <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;vertical-align:top;">
                              <span style="color:#64748b;font-size:13px;line-height:1.5;">✓ ${step}</span>
                            </td>
                            <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;text-align:right;vertical-align:top;">
                              <span style="color:#94a3b8;font-size:12px;">${time}</span>
                            </td>
                          </tr>
                        `).join('')}
                      </table>

                      <!-- CTA -->
                      <div style="text-align:center;">
                        <a href="https://tofebacademy.com/programs"
                          style="display:inline-block;background:#1e5fa8;color:#ffffff;text-decoration:none;font-size:14px;font-weight:700;padding:14px 32px;border-radius:10px;">
                          View Our Programs →
                        </a>
                      </div>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background:#f4f8fd;border-radius:0 0 16px 16px;padding:28px 40px;text-align:center;border-top:1px solid #e2e8f0;">
                      <p style="margin:0 0 8px;color:#94a3b8;font-size:12px;">
                        Questions? Chat with us on WhatsApp or reply to this email.
                      </p>
                      <p style="margin:0;color:#cbd5e1;font-size:11px;">
                        © ${new Date().getFullYear()} Tofeb Academy. All rights reserved.
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