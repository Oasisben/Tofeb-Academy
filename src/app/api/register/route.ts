import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { registrationSchema } from '@/lib/validations'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const parsed = registrationSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.flatten().fieldErrors },
        { status: 400 }
      )
    }

    const { data, error } = await supabase
      .from('registrations')
      .insert([{
        full_name: parsed.data.full_name,
        phone: parsed.data.phone,
        email: parsed.data.email,
        state: parsed.data.state,
        preferred_sector: parsed.data.preferred_sector,
        payment_status: 'pending',
      }])
      .select()
      .single()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json({ error: 'Database error' }, { status: 500 })
    }

    return NextResponse.json({ success: true, data }, { status: 201 })
  } catch (err) {
    console.error('Unexpected error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}