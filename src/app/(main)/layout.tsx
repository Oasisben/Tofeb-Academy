import Navbar from '@/components/ui/layout/NavBar'
import Footer from '@/components/ui/layout/Footer'
import WhatsAppFloat from '@/components/ui/shared/WhatsAppFloat'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}