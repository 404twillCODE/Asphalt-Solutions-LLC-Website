import { useEffect, useState } from 'react'
import logoImage from '../images/Logo.jpg'
import sealcoatingImage from '../images/sealcoating.jpeg'
import crackFillingImage from '../images/Crack filling.jpeg'
import asphaltRepairImage from '../images/Asphalt repair.jpeg'
import snowPlowingImage from '../images/Snow plowing.jpeg'

const PHONE = '(315) 795-5214'
const PHONE_RAW = '3157955214'
const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61576151121008'
const INSTAGRAM_URL = 'https://www.instagram.com/asphaltsolutions_'

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Free estimate form' },
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
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-neutral-900" />
      <div className="relative z-10 text-center max-w-2xl w-full">
        <div className="opacity-0 animate-fade-up mb-6 sm:mb-8" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <img src={logoImage} alt="Asphalt Solutions LLC" className="w-full max-w-[280px] sm:max-w-md mx-auto rounded-lg shadow-2xl" />
        </div>
        <p className="text-gray-200 text-base sm:text-lg opacity-0 animate-fade-up mb-4 sm:mb-6 px-1" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          Sealcoating, crack filling, asphalt repair, and snow plowing in CNY.
        </p>
        <p className="text-gray-400 text-sm opacity-0 animate-fade-up mb-6 sm:mb-8" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          Text or call for a free estimate!
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <a href={`tel:${PHONE_RAW}`} className="min-h-[48px] inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3.5 rounded-lg font-semibold hover:bg-neutral-200 transition-all active:scale-[0.98] touch-manipulation">
            <span className="text-lg">📲</span> {PHONE}
          </a>
          <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="min-h-[48px] inline-flex items-center justify-center gap-2 border border-white/40 text-white px-6 py-3.5 rounded-lg font-medium hover:bg-white/10 transition-all touch-manipulation">
            Facebook
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="min-h-[48px] inline-flex items-center justify-center gap-2 border border-white/40 text-white px-6 py-3.5 rounded-lg font-medium hover:bg-white/10 transition-all touch-manipulation">
            Instagram
          </a>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 opacity-0 animate-fade-up" style={{ animationFillMode: 'forwards' }}>Services</h2>
        <p className="text-gray-400 mb-8 sm:mb-12 text-sm sm:text-base opacity-0 animate-fade-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          Residential and commercial work with clean, professional results.
        </p>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-4">
          <div
            className="rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 shadow-xl opacity-0 animate-fade-up"
            style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
          >
            <div className="relative aspect-[3/5]">
              <img src={sealcoatingImage} alt="Residential sealcoating" className="w-full h-full object-cover" />
              <div className="absolute inset-x-3 bottom-3">
                <div className="inline-block bg-black/80 text-white text-sm font-semibold px-3 py-1 rounded-md">
                  Sealcoating
                </div>
              </div>
            </div>
          </div>
          <div
            className="rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 shadow-xl opacity-0 animate-fade-up"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            <div className="relative aspect-[3/5]">
              <img src={asphaltRepairImage} alt="Commercial sealcoating and line striping" className="w-full h-full object-cover" />
              <div className="absolute inset-x-3 bottom-3">
                <div className="inline-block bg-black/80 text-white text-sm font-semibold px-3 py-1 rounded-md">
                  Asphalt repair
                </div>
              </div>
            </div>
          </div>
          <div
            className="rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 shadow-xl opacity-0 animate-fade-up"
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
          >
            <div className="relative aspect-[3/5]">
              <img src={crackFillingImage} alt="Crack filling" className="w-full h-full object-cover" />
              <div className="absolute inset-x-3 bottom-3">
                <div className="inline-block bg-black/80 text-white text-sm font-semibold px-3 py-1 rounded-md">
                  Crack Filling
                </div>
              </div>
            </div>
          </div>
          <div
            className="rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 shadow-xl opacity-0 animate-fade-up"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            <div className="relative aspect-[3/5]">
              <img src={snowPlowingImage} alt="Snow plowing" className="w-full h-full object-cover" />
              <div className="absolute inset-x-3 bottom-3">
                <div className="inline-block bg-black/80 text-white text-sm font-semibold px-3 py-1 rounded-md">
                  Snow Plowing
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-asphalt-silver mb-3 sm:mb-4 opacity-0 animate-fade-up" style={{ animationFillMode: 'forwards' }}>Get Your Free Estimate</h2>
          <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base opacity-0 animate-fade-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            Call, message us on social, or send your info and we&apos;ll reach out.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <a href={`tel:${PHONE_RAW}`} className="min-h-[48px] inline-flex items-center justify-center text-asphalt-silver font-semibold text-lg hover:text-white transition-colors touch-manipulation">{PHONE}</a>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="min-h-[48px] inline-flex items-center justify-center text-asphalt-silver hover:text-white transition-colors touch-manipulation">Facebook</a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="min-h-[48px] inline-flex items-center justify-center text-asphalt-silver hover:text-white transition-colors touch-manipulation">Instagram</a>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl opacity-0 animate-fade-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-asphalt-silver mb-1">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-asphalt-silver placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-asphalt-silver/60 focus:border-asphalt-silver/60"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-asphalt-silver mb-1">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-asphalt-silver placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-asphalt-silver/60 focus:border-asphalt-silver/60"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-asphalt-silver mb-1">
                  Phone number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-asphalt-silver placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-asphalt-silver/60 focus:border-asphalt-silver/60"
                  placeholder="Best number to reach you"
                  required
                />
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-asphalt-silver mb-1">
                  Address
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-asphalt-silver placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-asphalt-silver/60 focus:border-asphalt-silver/60"
                  placeholder="Service address"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-asphalt-silver mb-1">
                Service needed
              </label>
              <select
                id="service"
                name="service"
                className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-asphalt-silver focus:outline-none focus:ring-2 focus:ring-asphalt-silver/60 focus:border-asphalt-silver/60"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option value="Sealcoating">Sealcoating</option>
                <option value="Crack filling">Crack filling</option>
                <option value="Asphalt repair">Asphalt repair</option>
                <option value="Snow plowing">Snow plowing</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-asphalt-silver mb-1">
                Brief message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-asphalt-silver placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-asphalt-silver/60 focus:border-asphalt-silver/60 resize-none"
                placeholder="Tell us a little about your driveway, parking lot, or project."
                required
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex justify-center items-center px-6 py-3.5 rounded-lg bg-asphalt-silver text-asphalt-black font-semibold text-sm sm:text-base hover:bg-white transition-all active:scale-[0.98] touch-manipulation"
              >
                Send message
              </button>
              <p className="mt-2 text-xs text-gray-500">
                This form is for collecting your info. Response times may vary based on workload and season.
              </p>
            </div>
          </form>
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
      <Footer />
    </>
  )
}
