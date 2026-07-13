/*import { z } from 'zod'

export const registrationSchema = z.object({
  full_name: z.string().min(3, 'Full name must be at least 3 characters'),
  phone: z.string().min(10, 'Enter a valid phone number').max(15, 'Phone number too long'),
  email: z.string().email('Enter a valid email address'),
  state: z.string().min(2, 'Please enter your state or country'),
  preferred_sector: z.enum(
    ['food', 'fashion', 'real-estate', 'financial-literacy'],
    { errorMap: () => ({ message: 'Please select a sector' }) }
  ),
})

export type RegistrationInput = z.infer<typeof registrationSchema>*/