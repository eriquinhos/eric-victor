import type { CSSProperties } from 'react'
import type { WorkProject, WorkProjectId } from '../data/portfolio'
import type { Translation } from '../data/translations'

type WorkProjectCardProps = {
  project: WorkProject
  copy: Translation['workProjects'][WorkProjectId]
  company: string
  role: string
  period: string
  delay: number
}

type RevealStyle = CSSProperties & { '--reveal-delay': string }

export default function WorkProjectCard({
  project,
  copy,
  company,
  role,
  period,
  delay,
}: WorkProjectCardProps) {
  const revealStyle: RevealStyle = { '--reveal-delay': `${delay}ms` }

  return (
    <article data-reveal className="project-card surface-card flex h-full flex-col rounded-2xl p-6" style={revealStyle}>
      <p className="text-sm font-semibold text-[var(--accent)]">{role}</p>
      <p className="mt-1 text-xs text-[var(--muted)]">{company} · {period}</p>
      <h3 className="mt-5 text-lg font-semibold leading-snug text-[var(--text)]">{copy.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--muted)]">{copy.summary}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((technology) => (
          <li key={technology} className="tag rounded-full px-3 py-1 text-xs font-medium">
            {technology}
          </li>
        ))}
      </ul>
    </article>
  )
}
