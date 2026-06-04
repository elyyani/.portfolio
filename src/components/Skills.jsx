import React from 'react'
import { motion } from 'framer-motion'
import { Brush, Code, Database, GitBranch, Layers, PenTool, Smartphone, Wand2 } from 'lucide-react'

const skills = [
  { name: 'React JS', group: 'Development', level: 100, icon: Code },
  { name: 'HTML, CSS, JavaScript', group: 'Development', level: 100, icon: Layers },
  { name: 'Flutter', group: 'Development', level: 100, icon: Smartphone },
  { name: 'Database MySql', group: 'Development', level: 100, icon: Database },
  { name: 'Github', group: 'Development', level: 100, icon: GitBranch },
  { name: 'Figma', group: 'Design', level: 100, icon: PenTool },
  { name: 'Canva', group: 'Design', level: 100, icon: Brush },
  { name: 'Adobe Ps, Adobe Ilustrator', group: 'Design', level: 100, icon: Wand2 },
]

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55 }}
      >
        <span className="eyebrow">Keahlian</span>
        <h2>Kemampuan yang mendukung proses dari konsep sampai publikasi.</h2>
      </motion.div>

      <div className="skill-grid">
        {skills.map((skill, index) => {
          const Icon = skill.icon
          return (
            <motion.article
              className="skill-card"
              key={skill.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <div className="skill-card__top">
                <span className="skill-card__icon">
                  <Icon size={19} />
                </span>
                <span>{skill.group}</span>
              </div>
              <h3>{skill.name}</h3>
              <div className="progress" aria-label={`${skill.name} ${skill.level}%`}>
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.1 }}
                />
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
