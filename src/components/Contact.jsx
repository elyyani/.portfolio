import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Instagram, Linkedin, Mail, MapPin, MessageCircle, Send } from 'lucide-react'

const contacts = [
  { icon: Mail, label: 'Email', value: 'eliyanidwiastuti@email.com', href: 'mailto:eliyanidwiastuti@email.com' },
  { icon: MessageCircle, label: 'WhatsApp', value: '+62 812 2626 4823', href: 'https://wa.me/6281226264823' },
  { icon: Github, label: 'GitHub', value: 'github.com/elyyani', href: 'https://github.com/' },
  { icon: Linkedin, label: 'LinkedIn', value: 'Eliyani Dwi Astuti', href: 'https://linkedin.com/' },
  { icon: Instagram, label: 'Instagram', value: '@elyyani12', href: 'https://instagram.com/' },
]

const whatsappNumber = '6281226264823'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get('name').trim()
    const email = formData.get('email').trim()
    const message = formData.get('message').trim()
    const whatsappMessage = [
      'Halo Eliyani, saya ingin menghubungi untuk kolaborasi.',
      '',
      `Nama: ${name}`,
      `Email: ${email}`,
      `Pesan: ${message}`,
    ].join('\n')
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    setSent(true)
    event.currentTarget.reset()
    window.setTimeout(() => setSent(false), 3500)
  }

  return (
    <section id="contact" className="section contact">
      <motion.div
        className="section-heading section-heading--center"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55 }}
      >
        <span className="eyebrow">Kontak</span>
        <h2>Siap berdiskusi untuk proyek berikutnya.</h2>
        <p>
          Anda bisa menggunakan form ini untuk menghubungi saya dan memulai kolaborasi project bersama. Terima kasih.
        </p>
      </motion.div>

      <div className="contact__grid">
        <motion.div
          className="contact-list"
          initial={{ opacity: 0, x: -26 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
        >
          <div className="location-card">
            <MapPin size={22} />
            <div>
              <h3>Tawangmangu, Karanganyar</h3>
              <p>Terbuka untuk kolaborasi remote, internship, dan proyek kampus.</p>
            </div>
          </div>

          {contacts.map((item) => {
            const Icon = item.icon
            return (
              <a className="contact-item" key={item.label} href={item.href} target="_blank" rel="noreferrer">
                <Icon size={20} />
                <span>
                  <small>{item.label}</small>
                  {item.value}
                </span>
              </a>
            )
          })}
        </motion.div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 26 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <label>
            Nama
            <input name="name" type="text" placeholder="Nama kamu" required />
          </label>
          <label>
            Email
            <input name="email" type="email" placeholder="nama@email.com" required />
          </label>
          <label>
            Pesan
            <textarea name="message" rows="6" placeholder="Ceritakan kebutuhan proyek atau kolaborasi..." required />
          </label>
          <button className="btn btn--primary" type="submit">
            Kirim Pesan <Send size={18} />
          </button>
          {sent && <p className="form-note">Pesan berhasil disiapkan. Terima kasih sudah menghubungi saya.</p>}
        </motion.form>
      </div>
    </section>
  )
}
