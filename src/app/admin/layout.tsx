import Footer from "@/components/ui/layout/Footer"

export default function AdminLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div>
        {children}
        <Footer />
      </div>
    )
  }