import { UtensilsCrossed, Shirt, Building2 } from 'lucide-react'

export const SECTORS = [
  {
    id: 'food',
    title: 'Food Sector',
    description: 'Food business management, branding, marketing and scaling. Learn how to build and grow a profitable food business.',
    icon: UtensilsCrossed,
    color: 'from-orange-500 to-amber-400',
    lightBg: 'bg-orange-50',
    iconColor: 'text-orange-500',
  },
  {
    id: 'fashion',
    title: 'Fashion Sector',
    description: 'Fashion entrepreneurship, brand development and business growth. Build a fashion brand that stands out and sells.',
    icon: Shirt,
    color: 'from-pink-500 to-rose-400',
    lightBg: 'bg-pink-50',
    iconColor: 'text-pink-500',
  },
  {
    id: 'real-estate',
    title: 'Real Estate Sector',
    description: 'Property investment, real estate business and wealth creation strategies that work in the Nigerian market.',
    icon: Building2,
    color: 'from-blue-500 to-indigo-400',
    lightBg: 'bg-blue-50',
    iconColor: 'text-blue-500',
  },
]

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Sectors', href: '/sectors' },
  { label: 'Programs', href: '/programs' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]

export const STATS = [
  { value: 500, suffix: '+', label: 'Graduates' },
  { value: 3, suffix: '', label: 'Sectors' },
  { value: 92, suffix: '%', label: 'Success Rate' },
  { value: 4, suffix: 'wks', label: 'Program Length' },
]

export const BANK_DETAILS = {
  bankName: 'Moniepoint Microfinance Bank',
  accountName: 'Atitebi Busayo Tofunmi',
  accountNumber: '8033710031',
  amount: '₦20,000',
}

export const FAQS = [
  {
    question: 'Do I need prior business experience to join?',
    answer: 'No experience is required. Our programs are designed for aspiring entrepreneurs, beginners, and professionals at any stage who want to build or grow a business.',
  },
  {
    question: 'How long does each program last?',
    answer: 'Each program runs for approximately 4 weeks. The schedule is structured but flexible enough to balance with other commitments.',
  },
  {
    question: 'Is the training online or physical?',
    answer: 'The training is solely online so you can participate from anywhere.',
  },
  {
    question: 'What is Financial Literacy and is it included?',
    answer: 'Financial Literacy is a bonus module included in all our programs at no extra cost. Every participant learns budgeting, cash flow management, investment basics, and financial planning regardless of their chosen sector.',
  },
  {
    question: 'How does payment work?',
    answer: 'After filling your registration form, you will see our bank account details. Transfer the program fee, then upload your receipt. Our team will verify and confirm your enrollment within 24 hours.',
  },
  {
    question: 'Will I receive a certificate after completing the program?',
    answer: 'Yes. All graduates receive a verified certificate of completion from Tofeb Academy.',
  },
  {
    question: 'What makes Tofeb Academy different from other programs?',
    answer: 'We focus entirely on practical business education — not theory. Every module is designed around real market realities so you can apply what you learn immediately.',
  },
]