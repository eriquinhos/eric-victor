import type { CSSProperties } from 'react'
import type { PortfolioProject } from '../data/portfolio'
import type { Translation } from '../data/translations'

type ProjectCardProps = {
  project: PortfolioProject
  copy: Translation['projects'][PortfolioProject['id']]
  labels: Translation['projectSection']
  featured?: boolean
  delay: number
}

type RevealStyle = CSSProperties & { '--reveal-delay': string }

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="size-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6">
      <path d="M6 14 14 6M6 6h8v8" />
    </svg>
  )
}

export default function ProjectCard({ project, copy, labels, featured = false, delay }: ProjectCardProps) {
  const revealStyle: RevealStyle = { '--reveal-delay': `${delay}ms` }
  const technologies = (
    <ul aria-label={`Tecnologias de ${project.name}`} className="mt-6 flex flex-wrap gap-2">
      {project.stack.map((item) => (
        <li key={item} className="tag rounded-full px-3 py-1 text-xs font-medium">
          {item}
        </li>
      ))}
    </ul>
  )
  const repositoryLink = (
    <a
      className="mt-6 inline-flex min-h-11 w-fit items-center gap-2 rounded-lg border border-[var(--control-border)] px-4 py-2 text-sm font-semibold text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
      href={project.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`${labels.repository}: ${project.name}`}
    >
      {labels.repository} <ArrowIcon />
    </a>
  )

  return (
    <article data-reveal className={`project-card surface-card flex h-full flex-col rounded-2xl p-6 sm:p-7 ${featured ? 'md:col-span-2 md:grid md:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] md:gap-x-10' : ''}`} style={revealStyle}>
      <div>
        <h3 className="text-xl font-semibold tracking-tight text-[var(--text)]">{project.name}</h3>
        <p className="mt-2 text-sm font-medium text-[var(--accent)]">{copy.category}</p>
        <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">{copy.summary}</p>
        {featured ? technologies : null}
        {featured ? repositoryLink : null}
      </div>

      <div className={`mt-6 ${featured ? 'md:mt-0' : ''}`}>
        <dl className="space-y-4 text-sm">
          <div>
            <dt className="font-semibold text-[var(--text)]">{labels.problem}</dt>
            <dd className="mt-1 leading-relaxed text-[var(--muted)]">{copy.problem}</dd>
          </div>
          <div>
            <dt className="font-semibold text-[var(--text)]">{labels.implementation}</dt>
            <dd className="mt-1 leading-relaxed text-[var(--muted)]">{copy.architecture}</dd>
          </div>
          <div>
            <dt className="font-semibold text-[var(--text)]">{labels.outcome}</dt>
            <dd className="mt-1 leading-relaxed text-[var(--muted)]">{copy.outcome}</dd>
          </div>
        </dl>

        {!featured ? technologies : null}
        {!featured ? repositoryLink : null}
      </div>
    </article>
  )
}
