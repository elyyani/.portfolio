import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Code2, LayoutTemplate, Smartphone, SwatchBook, X } from 'lucide-react'

const projects = [
  {
    title: 'Daily Challenge App',
    type: 'Development',
    category: 'dev',
    year: '2025',
    icon: LayoutTemplate,
    image: '/daili.jpeg',
    description:
      'Aplikasi mobile cheklist aktifitas sehari-hari yang membantu pengguna mencatat aktivitas.',
    stack: ['Flutter', 'Firebase', 'Responsive UI', 'mobile development'],
  },
  {
    title: 'Website Reservasi Hotel',
    type: 'Development',
    category: 'dev',
    year: '2025',
    icon: Smartphone,
    image: '/reservasii-hotel.png',
    description:
      'Website yang menyediakan layanan reservasi untuk memudahkan customer didalam melakukan reservasi / booking hotel.',
    stack: ['CI4', 'MySql', 'PHP'],
  },
  {
    title: 'Website Jasa Survey Kost',
    type: 'Development',
    category: 'dev',
    year: '2025',
    icon: Code2,
    image: '/jasa-survey-kost.png',
    description:
      'Website layanan Jasa Survey Kost untuk membantu customer dalam memastikan kondisi kost secara detail sebelum menyewa sehingga mendapat informasi yang terpercaya.',
    stack: ['html', 'CSS', 'JavaScript', 'PHP', 'MySql'],
  },
  {
    title: 'Little Farmer Mobile Game UI',
    type: 'Graphic Design',
    category: 'design',
    year: '2026',
    icon: SwatchBook,
    image: '/farmer.png',
    description:
      'Desain UI mobile game bertema farming dengan tampilan ceria, interaktif, user friendly untuk meningkatkan pengalaman bermain user.',
    stack: ['Illustrator', 'Figma', 'Brand Guide'],
  },
  {
    title: 'Poster Seminar Organisasi',
    type: 'Graphic Design',
    category: 'design',
    year: '2024',
    icon: LayoutTemplate,
    image: '/poster.jpeg',
    description:
      'Seri poster digital untuk publikasi acara organisasi dengan visual hierarchy yang kuat dan pesan yang mudah dipahami.',
    stack: ['CorelDraw', 'Adobe Ilustrator', 'Social Media'],
  },
  {
    title: 'UI Daily Challenge App',
    type: 'Mobile Game Design',
    category: 'design',
    year: '2025',
    icon: SwatchBook,
    image: '/daily.png',
    description:
      'Desain kumpulan komponen UI untuk aplikasi daily challenge, termasuk tombol, form, card, dan state komponen.',
    stack: ['Figma', 'Canva', 'Design System', 'Prototype'],
  },
]

const tabs = [
  { key: 'all', label: 'Semua' },
  { key: 'dev', label: 'Aplikasi & Web' },
  { key: 'design', label: 'Desain Grafis' },
]

export default function Projects() {
  const [active, setActive] = useState('all')
  const [previewProject, setPreviewProject] = useState(null)
  const filtered = active === 'all' ? projects : projects.filter((project) => project.category === active)

  useEffect(() => {
    if (!previewProject) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setPreviewProject(null)
      }
    }

    document.body.classList.add('modal-open')
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.classList.remove('modal-open')
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [previewProject])

  return (
    <section id="projects" className="section projects">
      <motion.div
        className="section-heading section-heading--center"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55 }}
      >
        <span className="eyebrow">Selected Works</span>
        <h2>Hasil eksplorasi selama di perkuliahan.</h2>
        <p>
          Hasil dibawah ini merupakan kumpulan project yang pernah saya kerjakan selama perkuliahan.
        </p>
      </motion.div>

      <div className="project-tabs" role="tablist" aria-label="Filter proyek">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={active === tab.key ? 'active' : ''}
            type="button"
            onClick={() => setActive(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {filtered.map((project, index) => {
          const Icon = project.icon
          return (
            <motion.article
              className="project-card"
              key={project.title}
              layout
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <div className={`project-thumb project-thumb--${project.category} ${project.image ? 'project-thumb--image' : ''}`}>
                {project.image ? (
                  <img src={project.image} alt={`Preview ${project.title}`} />
                ) : (
                  <>
                    <Icon size={32} />
                    <div className="project-thumb__window">
                      <span />
                      <span />
                      <span />
                    </div>
                  </>
                )}
              </div>
              <div className="project-card__content">
                <div className="project-card__meta">
                  <span>{project.type}</span>
                  <span>{project.year}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-row">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
              <button
                className="project-card__link"
                type="button"
                onClick={() => setPreviewProject(project)}
                aria-label={`Lihat gambar ${project.title}`}
                disabled={!project.image}
              >
                <ArrowUpRight size={18} />
              </button>
            </motion.article>
          )
        })}
      </div>

      {previewProject?.image && (
        <motion.div
          className="project-preview"
          role="dialog"
          aria-modal="true"
          aria-label={`Preview ${previewProject.title}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setPreviewProject(null)}
        >
          <button
            className="project-preview__close"
            type="button"
            onClick={() => setPreviewProject(null)}
            aria-label="Tutup preview"
          >
            <X size={22} />
          </button>
          <motion.figure
            className="project-preview__frame"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.22 }}
            onClick={(event) => event.stopPropagation()}
          >
            <img src={previewProject.image} alt={`Preview ${previewProject.title}`} />
            <figcaption>{previewProject.title}</figcaption>
          </motion.figure>
        </motion.div>
      )}
    </section>
  )
}
