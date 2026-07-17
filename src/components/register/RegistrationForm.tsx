'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registrationSchema, RegistrationInput } from '@/lib/validations'
import { motion, AnimatePresence } from 'framer-motion'
import {
  CheckCircle, Loader2, AlertCircle,
  Copy, Check, Upload, Clock
} from 'lucide-react'
import { BANK_DETAILS } from '@/lib/constants'

const sectors = [
  { value: 'food', label: 'Food Sector' },
  { value: 'fashion', label: 'Fashion Sector' },
  { value: 'real-estate', label: 'Real Estate Sector' },
]

const inputClass = "w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white transition duration-200"
const labelClass = "block text-sm font-semibold text-[#0a1628] mb-1.5"
const errorClass = "text-red-500 text-xs mt-1.5 flex items-center gap-1"

type Step = 'details' | 'payment' | 'upload' | 'pending'

export default function RegistrationForm() {
  const [step, setStep] = useState<Step>('details')
  const [registrationId, setRegistrationId] = useState<string>('')
  const [copied, setCopied] = useState(false)
  const [receipt, setReceipt] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [uploadError, setUploadError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationInput>({
    resolver: zodResolver(registrationSchema),
  })

  // Step 1 — Submit details
  const onSubmit = async (data: RegistrationInput) => {
    setSubmitting(true)
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (!res.ok) throw new Error()
      setRegistrationId(json.data.id)
      setStep('payment')
    } catch {
      // handle error
    } finally {
      setSubmitting(false)
    }
  }

  // Copy account number
  const copyAccount = () => {
    navigator.clipboard.writeText(BANK_DETAILS.accountNumber)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Step 3 — Upload receipt
  const handleUpload = async () => {
    if (!receipt) return
    setUploading(true)
    setUploadError('')
    try {
      const formData = new FormData()
      formData.append('receipt', receipt)
      formData.append('registrationId', registrationId)

      const res = await fetch('/api/upload-receipt', {
        method: 'POST',
        body: formData,
      })
      if (!res.ok) throw new Error()
      setStep('pending')
    } catch {
      setUploadError('Upload failed. Please try again.')
    } finally {
      setUploading(false)
    }
  }

  const steps = ['details', 'payment', 'upload', 'pending']
  const stepIndex = steps.indexOf(step)

  return (
    <div>
      {/* Progress bar */}
      {step !== 'pending' && (
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            {['Your Details', 'Payment', 'Upload Receipt'].map((label, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                  i < stepIndex
                    ? 'bg-green-500 text-white'
                    : i === stepIndex
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-400'
                }`}>
                  {i < stepIndex ? <Check size={14} /> : i + 1}
                </div>
                <span className={`text-xs font-medium hidden sm:block ${
                  i === stepIndex ? 'text-blue-600' : 'text-gray-400'
                }`}>
                  {label}
                </span>
              </div>
            ))}
          </div>
          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 rounded-full transition-all duration-500"
              style={{ width: `${(stepIndex / 2) * 100}%` }}
            />
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">

        {/* Step 1 — Details */}
        {step === 'details' && (
          <motion.form
            key="details"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
          >
            <div>
              <label className={labelClass}>Full Name</label>
              <input {...register('full_name')} placeholder="e.g. Amaka Obi" className={inputClass} />
              {errors.full_name && <p className={errorClass}><AlertCircle size={12} />{errors.full_name.message}</p>}
            </div>

            <div>
              <label className={labelClass}>Phone Number</label>
              <input {...register('phone')} placeholder="e.g. 08123456789" className={inputClass} />
              {errors.phone && <p className={errorClass}><AlertCircle size={12} />{errors.phone.message}</p>}
            </div>

            <div>
              <label className={labelClass}>Email Address</label>
              <input {...register('email')} type="email" placeholder="you@email.com" className={inputClass} />
              {errors.email && <p className={errorClass}><AlertCircle size={12} />{errors.email.message}</p>}
            </div>

            <div>
              <label className={labelClass}>State / Country</label>
              <input {...register('state')} placeholder="e.g. Lagos, Abuja..." className={inputClass} />
              {errors.state && <p className={errorClass}><AlertCircle size={12} />{errors.state.message}</p>}
            </div>

            <div>
              <label className={labelClass}>Preferred Sector</label>
              <select {...register('preferred_sector')} className={inputClass}>
                <option value="">Select a sector</option>
                {sectors.map((s) => (
                  <option key={s.value} value={s.value}>{s.label}</option>
                ))}
              </select>
              {errors.preferred_sector && <p className={errorClass}><AlertCircle size={12} />{errors.preferred_sector.message}</p>}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {submitting ? <><Loader2 size={16} className="animate-spin" />Saving...</> : 'Continue to Payment →'}
            </button>

            <p className="text-center text-xs text-gray-400">
              🔒 Your information is safe and will never be shared.
            </p>
          </motion.form>
        )}

        {/* Step 2 — Payment */}
        {step === 'payment' && (
          <motion.div
            key="payment"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div>
              <h3 className="font-jakarta font-bold text-[#0a1628] text-lg mb-1">
                Make your payment
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Transfer the program fee to the account below, then click
                "I've Made Payment" to proceed.
              </p>
            </div>

            {/* Amount */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 text-center">
              <p className="text-blue-600 text-sm font-medium mb-1">Amount to Pay</p>
              <p className="font-jakarta text-4xl font-bold text-[#0a1628]">
                {BANK_DETAILS.amount}
              </p>
            </div>

            {/* Bank details */}
            <div className="bg-[#f4f8fd] rounded-2xl p-6 space-y-4 border border-gray-100">
              <h4 className="font-semibold text-[#0a1628] text-sm uppercase tracking-widest">
                Bank Details
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-400 text-sm">Bank Name</span>
                  <span className="text-[#0a1628] font-semibold text-sm">{BANK_DETAILS.bankName}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-400 text-sm">Account Name</span>
                  <span className="text-[#0a1628] font-semibold text-sm">{BANK_DETAILS.accountName}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-400 text-sm">Account Number</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[#0a1628] font-bold text-base tracking-widest">
                      {BANK_DETAILS.accountNumber}
                    </span>
                    <button
                      onClick={copyAccount}
                      className="flex items-center gap-1 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-200"
                    >
                      {copied ? <><Check size={12} />Copied</> : <><Copy size={12} />Copy</>}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3">
              <p className="text-amber-700 text-xs leading-relaxed">
                ⚠️ Use your <strong>full name</strong> as the transfer narration so we can identify your payment quickly.
              </p>
            </div>

            <button
              onClick={() => setStep('upload')}
              className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2"
            >
              I've Made Payment →
            </button>
          </motion.div>
        )}

        {/* Step 3 — Upload Receipt */}
        {step === 'upload' && (
          <motion.div
            key="upload"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div>
              <h3 className="font-jakarta font-bold text-[#0a1628] text-lg mb-1">
                Upload your receipt
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Take a screenshot or photo of your payment receipt and upload it below.
              </p>
            </div>

            {/* Upload area */}
            <label className="block cursor-pointer">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0]
                  if (file) setReceipt(file)
                }}
              />
              <div className={`border-2 border-dashed rounded-2xl p-10 text-center transition-all duration-200 ${
                receipt
                  ? 'border-blue-400 bg-blue-50'
                  : 'border-gray-200 bg-gray-50 hover:border-blue-300 hover:bg-blue-50/50'
              }`}>
                {receipt ? (
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                      <Check size={22} className="text-white" />
                    </div>
                    <p className="font-semibold text-[#0a1628] text-sm">{receipt.name}</p>
                    <p className="text-gray-400 text-xs">
                      {(receipt.size / 1024 / 1024).toFixed(2)} MB — tap to change
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                      <Upload size={22} className="text-gray-400" />
                    </div>
                    <p className="font-semibold text-[#0a1628] text-sm">
                      Tap to upload receipt
                    </p>
                    <p className="text-gray-400 text-xs">PNG, JPG or JPEG — max 5MB</p>
                  </div>
                )}
              </div>
            </label>

            {uploadError && (
              <div className="flex items-center gap-2 text-red-500 text-sm bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                <AlertCircle size={16} className="shrink-0" />
                {uploadError}
              </div>
            )}

            <button
              onClick={handleUpload}
              disabled={!receipt || uploading}
              className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {uploading
                ? <><Loader2 size={16} className="animate-spin" />Uploading...</>
                : 'Submit Receipt →'
              }
            </button>

            <button
              onClick={() => setStep('payment')}
              className="w-full text-center text-sm text-gray-400 hover:text-gray-600 transition-colors"
            >
              ← Go back
            </button>
          </motion.div>
        )}

        {/* Step 4 — Pending */}
        {step === 'pending' && (
          <motion.div
            key="pending"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="text-center py-8"
          >
            <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock size={36} className="text-amber-500" />
            </div>
            <h3 className="font-jakarta text-2xl font-bold text-[#0a1628] mb-3">
              Payment Pending Verification
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto mb-6">
              Your receipt has been submitted successfully. Our team is reviewing your
              payment and will confirm your enrollment shortly.
            </p>
            <div className="bg-[#f4f8fd] rounded-2xl p-5 text-left space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center shrink-0">
                  <Clock size={16} className="text-amber-600" />
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-[#0a1628]">Verification in progress</span> — usually within 24 hours
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle size={16} className="text-blue-600" />
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-[#0a1628]">Check your email</span> — you'll receive a confirmation once approved
                </p>
              </div>
            </div>
            <a
              href="https://wa.me/2348033710031"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 text-sm"
            >
              Questions? Chat on WhatsApp
            </a>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  )
}