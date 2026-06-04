import React, { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Tentang', href: '#about' },
  { label: 'Proyek', href: '#projects' },
  { label: 'Keahlian', href: '#skills' },
  { label: 'Kontak', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <a href="#home" className="brand" onClick={() => setOpen(false)}>
        Eliyani<span>.</span>
      </a>

      <button
        className="nav-toggle"
        type="button"
        aria-label={open ? 'Tutup menu' : 'Buka menu'}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={21} /> : <Menu size={21} />}
      </button>

      <nav className={`nav-menu ${open ? 'nav-menu--open' : ''}`}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>
          Mulai Kolaborasi
        </a>
      </nav>
    </header>
  )
}
