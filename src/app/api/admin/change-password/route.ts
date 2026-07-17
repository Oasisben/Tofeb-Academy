import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  try {
    const session = req.cookies.get('admin_session')
    if (!session || session.value !== 'authenticated') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { currentPassword, newPassword } = await req.json()

    if (!currentPassword || !newPassword) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    if (newPassword.length < 8) {
      return NextResponse.json(
        { error: 'New password must be at least 8 characters' },
        { status: 400 }
      )
    }

    // Verify current password
    const { data, error } = await supabase
      .from('admin_users')
      .select('password')
      .eq('email', 'admin@tofebacademy.com')
      .single()

    if (error || !data) {
      return NextResponse.json({ error: 'Admin not found' }, { status: 404 })
    }

    if (data.password !== currentPassword) {
      return NextResponse.json(
        { error: 'Current password is incorrect' },
        { status: 401 }
      )
    }

    // Update password in Supabase
    const { error: updateError } = await supabase
      .from('admin_users')
      .update({ password: newPassword })
      .eq('email', 'admin@tofebacademy.com')

    if (updateError) {
      return NextResponse.json({ error: 'Update failed' }, { status: 500 })
    }

    // Update env variable hint — remind to update .env.local
    return NextResponse.json({ success: true }, { status: 200 })
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}