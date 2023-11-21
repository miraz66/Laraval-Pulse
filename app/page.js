import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Headers from '@/components/Headers'

export default function Home() {
  return (
    <main className="min-h-screen bg-primary font-sans">
      <Headers />
      <Features />
      <Footer />
    </main>
  )
}
