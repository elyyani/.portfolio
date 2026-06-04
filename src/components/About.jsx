import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Palette, Sparkles } from 'lucide-react'

const highlights = [
  {
    icon: GraduationCap,
    title: 'Latar Akademik',
    text: 'Mahasiswa Teknologi Rekayasa Perangkat Lunak dengan minat pada produk digital yang mudah digunakan.',
  },
  {
    icon: Palette,
    title: 'Desain Visual',
    text: 'Membuat identitas visual, poster, UI, dan konten digital dengan komposisi yang bersih dan komunikatif.',
  },
  {
    icon: Sparkles,
    title: 'Cara Kerja',
    text: 'Terbiasa menyusun ide, membuat wireframe, membangun antarmuka, dan merapikan detail akhir.',
  },
  {
    icon: MapPin,
    title: 'Lokasi',
    text: 'Berbasis di Tawangmangu, Karanganyar, Jawa Tengah dan terbuka untuk kolaborasi remote maupun proyek kampus.',
  },
]

export default function About() {
  return (
    <section id="about" className="section about">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55 }}
      >
        <span className="eyebrow">Tentang Saya</span>
        <h2>Profil singkat</h2>
      </motion.div>

      <div className="about__grid">
        <motion.div
          className="about__story"
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <p>
            Saya menyukai proses mengubah kebutuhan menjadi pengalaman digital yang terasa jelas,
            nyaman, dan tetap menarik secara visual. Dalam proyek kampus, saya sering berada di
            titik temu antara perancangan tampilan, penyusunan konten, dan implementasi antarmuka.
          </p>
          <p>
            Fokus utama saya adalah pengembangan website/aplikasi berbasis React, desain UI, dan
            desain grafis untuk publikasi digital. Portofolio ini dirancang sebagai ruang kurasi
            untuk menampilkan karya akademik dan eksplorasi kreatif secara profesional.
          </p>
        </motion.div>

        <div className="about__cards">
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.article
                className="info-card"
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Icon size={22} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
