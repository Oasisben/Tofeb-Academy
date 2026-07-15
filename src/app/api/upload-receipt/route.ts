import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const receipt = formData.get('receipt') as File
    const registrationId = formData.get('registrationId') as string

    if (!receipt || !registrationId) {
      return NextResponse.json({ error: 'Missing data' }, { status: 400 })
    }

    // Upload to Supabase Storage
    const fileExt = receipt.name.split('.').pop()
    const fileName = `${registrationId}-${Date.now()}.${fileExt}`
    const buffer = await receipt.arrayBuffer()

    const { error: uploadError } = await supabase.storage
      .from('receipts')
      .upload(fileName, buffer, {
        contentType: receipt.type,
        upsert: false,
      })

    if (uploadError) {
      console.error('Upload error:', uploadError)
      return NextResponse.json({ error: 'Upload failed' }, { status: 500 })
    }

    // Get public URL
    const { data: urlData } = supabase.storage
      .from('receipts')
      .getPublicUrl(fileName)

    // Update registration with receipt URL
    const { error: updateError } = await supabase
      .from('registrations')
      .update({ receipt_url: urlData.publicUrl })
      .eq('id', registrationId)

    if (updateError) {
      console.error('Update error:', updateError)
      return NextResponse.json({ error: 'Update failed' }, { status: 500 })
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error('Unexpected error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}