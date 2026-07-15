'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import {
  Users, Clock, CheckCircle, XCircle,
  Eye, Loader2, LogOut, RefreshCw, X
} from 'lucide-react'
import Image from 'next/image'

interface Registration {
  id: string
  full_name: string
  phone: string
  email: string
  state: string
  preferred_sector: string
  payment_status: 'pending' | 'paid' | 'failed'
  payment_reference: string | null
  receipt_url: string | null
  created_at: string
}

const SECTOR_LABELS: Record<string, string> = {
  'food': 'Food Sector',
  'fashion': 'Fashion Sector',
  'real-estate': 'Real Estate Sector',
}

const STATUS_COLORS = {
  pending: 'bg-amber-100 text-amber-700 border-amber-200',
  paid: 'bg-green-100 text-green-700 border-green-200',
  failed: 'bg-red-100 text-red-700 border-red-200',
}

export default function AdminDashboard() {
  const router = useRouter()
  const [registrations, setRegistrations] = useState<Registration[]>([])
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState<Registration | null>(null)
  const [confirming, setConfirming] = useState<string | null>(null)
  const [filter, setFilter] = useState<'all' | 'pending' | 'paid'>('all')

  const fetchRegistrations = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/admin/registrations')
      if (res.status === 401) {
        router.push('/admin')
        return
      }
      const json = await res.json()
      setRegistrations(json.data ?? [])
    } catch {
      console.error('Failed to fetch')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRegistrations()
  }, [])

  const confirmPayment = async (id: string) => {
    setConfirming(id)
    try {
      const res = await fetch('/api/admin/confirm-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ registrationId: id }),
      })
      if (res.ok) {
        setRegistrations((prev) =>
          prev.map((r) => r.id === id ? { ...r, payment_status: 'paid' } : r)
        )
        if (selected?.id === id) {
          setSelected((prev) => prev ? { ...prev, payment_status: 'paid' } : null)
        }
      }
    } catch {
      console.error('Failed to confirm')
    } finally {
      setConfirming(null)
    }
  }

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin')
  }

  const filtered = registrations.filter((r) => {
    if (filter === 'all') return true
    return r.payment_status === filter
  })

  const stats = {
    total: registrations.length,
    pending: registrations.filter((r) => r.payment_status === 'pending').length,
    paid: registrations.filter((r) => r.payment_status === 'paid').length,
  }

  return (
    <div className="min-h-screen bg-[#f4f8fd]">

      {/* Top bar */}
      <header className="bg-[#0a1628] px-5 py-4 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.jpeg"
              alt="Tofeb Academy"
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
            />
            <span className="font-jakarta font-bold text-white text-lg">
              Admin <span className="text-blue-400">Dashboard</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={fetchRegistrations}
              className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
            >
              <RefreshCw size={15} />
              <span className="hidden sm:block">Refresh</span>
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium px-4 py-2 rounded-xl transition-all"
            >
              <LogOut size={15} />
              <span className="hidden sm:block">Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-5 py-10">

        {/* Stats */}
        <div className="grid grid-cols-3 gap-5 mb-10">
          {[
            { label: 'Total Registrations', value: stats.total, icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
            { label: 'Pending Verification', value: stats.pending, icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
            { label: 'Confirmed Payments', value: stats.paid, icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-50' },
          ].map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
              >
                <div className={`w-10 h-10 ${stat.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon size={20} className={stat.color} />
                </div>
                <div className="font-jakarta text-3xl font-bold text-[#0a1628] mb-1">
                  {stat.value}
                </div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Filter tabs */}
        <div className="flex items-center gap-2 mb-6">
          {(['all', 'pending', 'paid'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 capitalize ${
                filter === f
                  ? 'bg-[#0a1628] text-white'
                  : 'bg-white text-gray-500 hover:text-[#0a1628] border border-gray-100'
              }`}
            >
              {f === 'all' ? `All (${stats.total})` : f === 'pending' ? `Pending (${stats.pending})` : `Paid (${stats.paid})`}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 size={28} className="animate-spin text-blue-600" />
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20">
              <Users size={40} className="text-gray-200 mx-auto mb-3" />
              <p className="text-gray-400 text-sm">No registrations found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100 bg-[#f4f8fd]">
                    {['Name', 'Email', 'Phone', 'Sector', 'State', 'Status', 'Date', 'Actions'].map((h) => (
                      <th key={h} className="text-left px-5 py-4 text-xs font-semibold text-gray-400 uppercase tracking-widest whitespace-nowrap">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((reg, i) => (
                    <motion.tr
                      key={reg.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.04 }}
                      className="border-b border-gray-50 hover:bg-[#f4f8fd] transition-colors"
                    >
                      <td className="px-5 py-4">
                        <p className="font-semibold text-[#0a1628] text-sm whitespace-nowrap">{reg.full_name}</p>
                      </td>
                      <td className="px-5 py-4">
                        <p className="text-gray-500 text-sm">{reg.email}</p>
                      </td>
                      <td className="px-5 py-4">
                        <p className="text-gray-500 text-sm whitespace-nowrap">{reg.phone}</p>
                      </td>
                      <td className="px-5 py-4">
                        <p className="text-gray-500 text-sm whitespace-nowrap">
                          {SECTOR_LABELS[reg.preferred_sector] ?? reg.preferred_sector}
                        </p>
                      </td>
                      <td className="px-5 py-4">
                        <p className="text-gray-500 text-sm whitespace-nowrap">{reg.state}</p>
                      </td>
                      <td className="px-5 py-4">
                        <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border capitalize ${STATUS_COLORS[reg.payment_status]}`}>
                          {reg.payment_status === 'pending' && <Clock size={11} />}
                          {reg.payment_status === 'paid' && <CheckCircle size={11} />}
                          {reg.payment_status === 'failed' && <XCircle size={11} />}
                          {reg.payment_status}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <p className="text-gray-400 text-xs whitespace-nowrap">
                          {new Date(reg.created_at).toLocaleDateString('en-NG', {
                            day: 'numeric', month: 'short', year: 'numeric'
                          })}
                        </p>
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setSelected(reg)}
                            className="flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-gray-600 text-xs font-semibold px-3 py-2 rounded-lg transition-all"
                          >
                            <Eye size={13} /> View
                          </button>
                          {reg.payment_status === 'pending' && (
                            <button
                              onClick={() => confirmPayment(reg.id)}
                              disabled={confirming === reg.id}
                              className="flex items-center gap-1.5 bg-green-500 hover:bg-green-400 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-all disabled:opacity-60"
                            >
                              {confirming === reg.id
                                ? <Loader2 size={13} className="animate-spin" />
                                : <CheckCircle size={13} />
                              }
                              Confirm
                            </button>
                          )}
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Detail modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center px-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            {/* Modal header */}
            <div className="flex items-center justify-between px-7 py-5 border-b border-gray-100 sticky top-0 bg-white rounded-t-2xl">
              <h3 className="font-jakarta font-bold text-[#0a1628] text-lg">
                Registration Details
              </h3>
              <button
                onClick={() => setSelected(null)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <X size={16} className="text-gray-600" />
              </button>
            </div>

            <div className="p-7 space-y-5">
              {/* Status badge */}
              <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border capitalize ${STATUS_COLORS[selected.payment_status]}`}>
                {selected.payment_status === 'pending' && <Clock size={11} />}
                {selected.payment_status === 'paid' && <CheckCircle size={11} />}
                {selected.payment_status}
              </span>

              {/* Details */}
              <div className="bg-[#f4f8fd] rounded-xl p-5 space-y-3">
                {[
                  { label: 'Full Name', value: selected.full_name },
                  { label: 'Email', value: selected.email },
                  { label: 'Phone', value: selected.phone },
                  { label: 'State', value: selected.state },
                  { label: 'Sector', value: SECTOR_LABELS[selected.preferred_sector] ?? selected.preferred_sector },
                  { label: 'Registered', value: new Date(selected.created_at).toLocaleString('en-NG') },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-start gap-4 py-2 border-b border-gray-200 last:border-0">
                    <span className="text-gray-400 text-sm shrink-0">{item.label}</span>
                    <span className="text-[#0a1628] text-sm font-semibold text-right">{item.value}</span>
                  </div>
                ))}
              </div>

              {/* Receipt */}
              {selected.receipt_url && (
                <div>
                  <h4 className="font-semibold text-[#0a1628] text-sm mb-3">Payment Receipt</h4>
                  
                  <a
                    href={selected.receipt_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl overflow-hidden border border-gray-100 hover:border-blue-200 transition-colors"
                  >
                    <img
                      src={selected.receipt_url}
                      alt="Payment receipt"
                      className="w-full object-contain max-h-64"
                    />
                    <div className="bg-gray-50 px-4 py-2 text-xs text-blue-600 font-medium text-center">
                      Click to view full image ↗
                    </div>
                  </a>
                </div>
              )}

              {/* Confirm button */}
              {selected.payment_status === 'pending' && (
                <button
                  onClick={() => confirmPayment(selected.id)}
                  disabled={confirming === selected.id}
                  className="w-full py-4 rounded-xl bg-green-500 hover:bg-green-400 text-white font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {confirming === selected.id
                    ? <><Loader2 size={16} className="animate-spin" />Confirming...</>
                    : <><CheckCircle size={16} />Confirm Payment & Send Email</>
                  }
                </button>
              )}

              {selected.payment_status === 'paid' && (
                <div className="flex items-center gap-2 bg-green-50 border border-green-100 text-green-700 text-sm font-medium px-4 py-3 rounded-xl">
                  <CheckCircle size={16} />
                  Payment confirmed. Confirmation email sent.
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}