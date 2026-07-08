'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registrationSchema, RegistrationInput } from '@/lib/validations'
import { useState } from 'react'

export default function RegistrationForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegistrationInput>({
    resolver: zodResolver(registrationSchema),
  })

  const onSubmit = async (data: RegistrationInput) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-16">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="font-jakarta text-2xl font-bold text-navy">Application Received!</h3>
        <p className="text-gray-500 mt-2">Our team will contact you within 24 hours to confirm your spot.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Full Name */}
      <div>
        <label className="block text-sm font-semibold text-navy mb-1">Full Name</label>
        <input
          {...register('full_name')}
          placeholder="e.g. Amaka Obi"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:border-brand focus:bg-white transition"
        />
        {errors.full_name && <p className="text-red-500 text-xs mt-1">{errors.full_name.message}</p>}
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-semibold text-navy mb-1">Phone Number</label>
        <input
          {...register('phone')}
          placeholder="e.g. 08123456789"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:border-brand focus:bg-white transition"
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-semibold text-navy mb-1">Email Address</label>
        <input
          {...register('email')}
          type="email"
          placeholder="you@email.com"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:border-brand focus:bg-white transition"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
      </div>

      {/* State */}
      <div>
        <label className="block text-sm font-semibold text-navy mb-1">State / Country</label>
        <input
          {...register('state')}
          placeholder="e.g. Lagos, Abuja, Ghana..."
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:border-brand focus:bg-white transition"
        />
        {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state.message}</p>}
      </div>

      {/* Sector */}
      <div>
        <label className="block text-sm font-semibold text-navy mb-1">Preferred Sector</label>
        <select
          {...register('preferred_sector')}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:border-brand focus:bg-white transition"
        >
          <option value="">Select a sector</option>
          <option value="food">Food Sector</option>
          <option value="fashion">Fashion Sector</option>
          <option value="real-estate">Real Estate Sector</option>
          <option value="financial-literacy">Financial Literacy</option>
        </select>
        {errors.preferred_sector && <p className="text-red-500 text-xs mt-1">{errors.preferred_sector.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-4 rounded-xl bg-brand text-white font-semibold text-sm hover:bg-brand-light transition disabled:opacity-60"
      >
        {status === 'loading' ? 'Submitting...' : 'Submit Application →'}
      </button>

      {status === 'error' && (
        <p className="text-center text-red-500 text-sm">Something went wrong. Please try again.</p>
      )}
    </form>
  )
}