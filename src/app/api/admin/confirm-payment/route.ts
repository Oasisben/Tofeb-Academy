import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { sendConfirmationEmail } from '@/lib/email'

export async function POST(req: NextRequest) {
  try {
    // Check session cookie
    const session = req.cookies.get('admin_session')
    if (!session || session.value !== 'authenticated') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { registrationId } = await req.json()

    // Get registration details
    const { data: registration, error: fetchError } = await supabase
      .from('registrations')
      .select('*')
      .eq('id', registrationId)
      .single()

    if (fetchError || !registration) {
      return NextResponse.json({ error: 'Registration not found' }, { status: 404 })
    }

    // Update payment status
    const { error: updateError } = await supabase
      .from('registrations')
      .update({ payment_status: 'paid' })
      .eq('id', registrationId)

    if (updateError) {
      return NextResponse.json({ error: 'Update failed' }, { status: 500 })
    }

    // Send confirmation email
    try {
      await sendConfirmationEmail({
        full_name: registration.full_name,
        email: registration.email,
        preferred_sector: registration.preferred_sector,
      })
    } catch (emailError) {
      console.error('Email error:', emailError)
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}