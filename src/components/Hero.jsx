import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Instagram, Linkedin } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

export default function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="hero__content">
        <motion.div
          className="eyebrow"
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          Portfolio Mahasiswa TRPL
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          Halo! Saya Eliyani Dwi Astuti,
        </motion.h1>

        <motion.p
          className="hero__lead"
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.16 }}
        >
          Mahasiswa Teknologi Rekayasa Perangkat Lunak yang berfokus pada
          pengembangan aplikasi/web dan desain grafis untuk kebutuhan akademik, organisasi, dan proyek kreatif.
        </motion.p>

        <motion.div
          className="hero__actions"
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.24 }}
        >
          <a className="btn btn--primary" href="#projects">
            Lihat Proyek <ArrowRight size={18} />
          </a>
          <a className="btn btn--ghost" href="#contact">
            <Download size={18} /> Hubungi Saya
          </a>
        </motion.div>

        <motion.div
          className="hero__meta"
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.32 }}
        >
          <span>React JS</span>
          <span>UI/UX</span>
          <span>Branding</span>
          <span>Vercel Ready</span>
        </motion.div>
      </div>

      <motion.aside
        className="hero-card"
        initial={{ opacity: 0, scale: 0.94, y: 28 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.18 }}
      >
        <div className="profile-visual">
          <div className="profile-visual__portrait">
            <img src="/profile-photo.jpeg" alt="Foto profil Eliyani Dwi Astuti" />
          </div>
          <div className="profile-visual__chip profile-visual__chip--one">Web App</div>
          <div className="profile-visual__chip profile-visual__chip--two">Graphic Design</div>
        </div>
        <div className="hero-card__body">
          <p className="hero-card__label">Available for</p>
          <h2>Campus Projects, Internship, and Creative Collaboration</h2>
          <div className="social-row">
            <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer">
              <Github size={18} />
            </a>
            <a aria-label="LinkedIn" href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <Linkedin size={18} />
            </a>
            <a aria-label="Instagram" href="https://instagram.com/" target="_blank" rel="noreferrer">
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </motion.aside>
    </section>
  )
}
