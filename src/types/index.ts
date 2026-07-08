export interface Registration {
    id: string
    full_name: string
    phone: string
    email: string
    state: string
    preferred_sector: string
    payment_status: 'pending' | 'paid' | 'failed'
    payment_reference?: string
    created_at: string
  }
  
  export interface Sector {
    id: string
    title: string
    description: string
    icon: string
    color: string
  }