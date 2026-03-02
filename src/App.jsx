import { useEffect, useState } from 'react'

const PHONE = '(315) 795-5214'
const PHONE_RAW = '3157955214'
const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61576151121008'
const INSTAGRAM_URL = 'https://www.instagram.com/asphaltsolutions_'

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' },
    { href: '#posts', label: 'Updates' },
  ]

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-asphalt-black/95 backdrop-blur-md border-b border-white/5 safe-area-inset-top">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        <a href="#home" onClick={closeMenu} className="text-asphalt-silver font-semibold tracking-wide text-sm sm:text-base truncate max-w-[180px] sm:max-w-none opacity-0 animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          Asphalt Solutions LLC
        </a>
        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} className="text-gray-400 hover:text-asphalt-silver transition-colors text-sm py-2">{label}</a>
          ))}
          <a href={`tel:${PHONE_RAW}`} className="bg-asphalt-silver/20 text-asphalt-silver px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-asphalt-silver/30 transition-all min-h-[44px] inline-flex items-center">
            {PHONE}
          </a>
        </div>
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <a href={`tel:${PHONE_RAW}`} className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center bg-asphalt-silver/20 text-asphalt-silver rounded-lg text-sm font-medium">
            Call
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="min-h-[44px] min-w-[44px] inline-flex flex-col items-center justify-center gap-1.5 rounded-lg text-asphalt-silver hover:bg-white/10 transition-colors"
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
          >
            <span className={`w-5 h-0.5 bg-current rounded-full transition-transform ${menuOpen ? 'rotate-45 translate-y-1' : ''}`} />
            <span className={`w-5 h-0.5 bg-current rounded-full transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-5 h-0.5 bg-current rounded-full transition-transform ${menuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
          </button>
        </div>
      </div>
      {/* Mobile menu panel */}
      <div
        className={`md:hidden absolute left-0 right-0 top-full bg-asphalt-black border-b border-white/10 shadow-xl transition-all duration-200 ease-out overflow-hidden ${menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} onClick={closeMenu} className="min-h-[48px] flex items-center text-gray-300 hover:text-asphalt-silver hover:bg-white/5 rounded-lg px-4 transition-colors">
              {label}
            </a>
          ))}
          <a href={`tel:${PHONE_RAW}`} onClick={closeMenu} className="min-h-[48px] flex items-center text-asphalt-silver font-medium bg-asphalt-silver/20 rounded-lg px-4 mt-2">
            {PHONE}
          </a>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section id="home" className="min-h-[100dvh] min-h-screen flex flex-col items-center justify-center relative px-4 sm:px-6 pt-20 pb-12 sm:pt-24 sm:pb-16">
      <div className="absolute inset-0 bg-gradient-to-b from-asphalt-black via-asphalt-black to-gray-900/50" />
      <div className="relative z-10 text-center max-w-2xl w-full">
        <div className="opacity-0 animate-fade-up mb-6 sm:mb-8" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <img src="/Logo.jpg" alt="Asphalt Solutions LLC" className="w-full max-w-[280px] sm:max-w-md mx-auto rounded-lg shadow-2xl" />
        </div>
        <p className="text-gray-400 text-base sm:text-lg opacity-0 animate-fade-up mb-4 sm:mb-6 px-1" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          Proudly serving CNY with professional asphalt sealcoating & repairs.
        </p>
        <p className="text-asphalt-metal text-sm opacity-0 animate-fade-up mb-6 sm:mb-8" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          Text or call for a free estimate!
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <a href={`tel:${PHONE_RAW}`} className="min-h-[48px] inline-flex items-center justify-center gap-2 bg-asphalt-silver text-asphalt-black px-6 py-3.5 rounded-lg font-semibold hover:bg-white transition-all active:scale-[0.98] touch-manipulation">
            <span className="text-lg">📲</span> {PHONE}
          </a>
          <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="min-h-[48px] inline-flex items-center justify-center gap-2 border border-asphalt-silver/40 text-asphalt-silver px-6 py-3.5 rounded-lg font-medium hover:bg-asphalt-silver/10 transition-all touch-manipulation">
            Facebook
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="min-h-[48px] inline-flex items-center justify-center gap-2 border border-asphalt-silver/40 text-asphalt-silver px-6 py-3.5 rounded-lg font-medium hover:bg-asphalt-silver/10 transition-all touch-manipulation">
            Instagram
          </a>
        </div>
      </div>
    </section>
  )
}

function Services() {
  const items = [
    { title: 'Sealcoating', desc: 'Protect and extend the life of your asphalt with professional sealcoating.', delay: '0.1s' },
    { title: 'Repairs', desc: 'Crack filling, pothole repair, and surface restoration.', delay: '0.2s' },
    { title: 'Free Estimates', desc: 'Text or call for a no-obligation quote. Serving Central New York.', delay: '0.3s' },
  ]
  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-gray-900/50 to-asphalt-black">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-asphalt-silver mb-3 sm:mb-4 opacity-0 animate-fade-up" style={{ animationFillMode: 'forwards' }}>What We Do</h2>
        <p className="text-gray-400 mb-8 sm:mb-12 text-sm sm:text-base opacity-0 animate-fade-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          Professional asphalt services for driveways, parking lots, and more.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="p-5 sm:p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/[0.08] hover:border-asphalt-silver/30 transition-all duration-300 opacity-0 animate-fade-up"
              style={{ animationDelay: item.delay, animationFillMode: 'forwards' }}
            >
              <h3 className="text-base sm:text-lg font-semibold text-asphalt-silver mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-asphalt-silver mb-3 sm:mb-4 opacity-0 animate-fade-up" style={{ animationFillMode: 'forwards' }}>Get Your Free Estimate</h2>
        <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base opacity-0 animate-fade-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          Reach out by phone or follow us on social media.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <a href={`tel:${PHONE_RAW}`} className="min-h-[48px] inline-flex items-center justify-center text-asphalt-silver font-semibold text-lg hover:text-white transition-colors touch-manipulation">{PHONE}</a>
          <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="min-h-[48px] inline-flex items-center justify-center text-asphalt-silver hover:text-white transition-colors touch-manipulation">Facebook</a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="min-h-[48px] inline-flex items-center justify-center text-asphalt-silver hover:text-white transition-colors touch-manipulation">Instagram</a>
        </div>
      </div>
    </section>
  )
}

function FacebookFeed() {
  useEffect(() => {
    if (typeof window.FB !== 'undefined') {
      window.FB.XFBML.parse()
    }
  }, [])

  return (
    <section id="posts" className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-asphalt-black to-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1fr,500px] gap-8 sm:gap-12 lg:gap-16 items-start">
          <div className="lg:pt-2 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-asphalt-silver mb-2 sm:mb-3 opacity-0 animate-fade-up" style={{ animationFillMode: 'forwards' }}>Latest from Facebook</h2>
            <p className="text-gray-400 mb-0 text-sm sm:text-base opacity-0 animate-fade-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              Updates, photos, and news from Asphalt Solutions LLC.
            </p>
          </div>
          <div className="opacity-0 animate-fade-up min-h-[400px] sm:min-h-[600px] flex justify-center lg:justify-end -mx-2 sm:mx-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <div className="w-full max-w-[500px] rounded-xl overflow-hidden border border-white/10 bg-white/5 shadow-xl">
              <div
                className="fb-page w-full [&>span]:!block [&>span]:!w-full [&>iframe]:!w-full [&>iframe]:!max-w-[500px]"
                data-href={FACEBOOK_URL}
                data-tabs="timeline"
                data-width="500"
                data-height="700"
                data-small-header="true"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="false"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-white/5 safe-area-inset-bottom">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
        <span className="text-center sm:text-left">© {new Date().getFullYear()} Asphalt Solutions LLC. Barneveld, NY.</span>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="min-h-[44px] inline-flex items-center hover:text-asphalt-silver transition-colors touch-manipulation py-2">Facebook</a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="min-h-[44px] inline-flex items-center hover:text-asphalt-silver transition-colors touch-manipulation py-2">Instagram</a>
          <a href={`tel:${PHONE_RAW}`} className="min-h-[44px] inline-flex items-center hover:text-asphalt-silver transition-colors touch-manipulation py-2">{PHONE}</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Services />
      <Contact />
      <FacebookFeed />
      <Footer />
    </>
  )
}
