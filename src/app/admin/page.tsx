'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Lock, Loader2, AlertCircle } from 'lucide-react'
import Image from 'next/image'

export default function AdminLogin() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    if (!password) return
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })

      if (!res.ok) {
        setError('Incorrect password. Please try again.')
        return
      }

      router.push('/admin/dashboard')
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0a1628] flex items-center justify-center px-5">
      {/* Background orb */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.18, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[140px] pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 bg-white rounded-2xl p-8 md:p-10 w-full max-w-md shadow-2xl"
      >
        {/* Logo */}
        <div className="flex items-center gap-3 mb-8">
          <Image
            src="/images/logo.jpeg"
            alt="Tofeb Academy"
            width={36}
            height={36}
            className="w-9 h-9 object-contain"
          />
          <span className="font-jakarta font-bold text-xl text-[#0a1628] tracking-tight">
            Tofeb <span className="text-blue-500">Academy</span>
          </span>
        </div>

        <div className="mb-8">
          <h1 className="font-jakarta text-2xl font-bold text-[#0a1628] mb-2">
            Admin Login
          </h1>
          <p className="text-gray-400 text-sm">
            Enter your admin password to access the dashboard.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                placeholder="Enter admin password"
                className="w-full px-4 py-3 pl-11 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white transition duration-200"
              />
              <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {error && (
            <div className="flex items-center gap-2 text-red-500 text-sm bg-red-50 border border-red-100 rounded-xl px-4 py-3">
              <AlertCircle size={16} className="shrink-0" />
              {error}
            </div>
          )}

          <button
            onClick={handleLogin}
            disabled={loading || !password}
            className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? <><Loader2 size={16} className="animate-spin" />Logging in...</> : 'Login to Dashboard →'}
          </button>
        </div>
      </motion.div>
    </div>
  )
}