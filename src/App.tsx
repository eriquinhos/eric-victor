import { useEffect, useState, type CSSProperties } from 'react'
import profilePhoto from './assets/eric-victor-profile.webp'
import flagPt from './assets/pt.webp'
import flagEn from './assets/us.webp'
import flagEs from './assets/es.webp'
import flagFr from './assets/fr.webp'
import ProjectCard from './components/ProjectCard'
import SectionHeading from './components/SectionHeading'
import WorkProjectCard from './components/WorkProjectCard'
import {
  contact,
  experience,
  experienceOrder,
  projects,
  skillGroups,
  workProjects,
} from './data/portfolio'
import { languageOptions, translations } from './data/translations'
import type { Locale } from './data/portfolio'

type RevealStyle = CSSProperties & { '--reveal-delay': string }

const revealStyle = (index: number): RevealStyle => ({
  '--reveal-delay': `${(index % 3) * 90}ms`,
})

const flags: Record<Locale, string> = {
  'pt-BR': flagPt,
  en: flagEn,
  es: flagEs,
  fr: flagFr,
}

const resumes: Record<Locale, string> = {
  'pt-BR': 'Curriculo_Eric_Victor_PT-BR.pdf',
  en: 'Resume_Eric_Victor_EN-US.pdf',
  es: 'Curriculum_Eric_Victor_ES-ES.pdf',
  fr: 'CV_Eric_Victor_FR-FR.pdf',
}

const navigation = [
  { id: 'about', href: '#sobre' },
  { id: 'projects', href: '#projetos' },
  { id: 'experience', href: '#experiencia' },
  { id: 'skills', href: '#skills' },
  { id: 'contact', href: '#contato' },
] as const

function App() {
  const [locale, setLocale] = useState<Locale>('pt-BR')
  const t = translations[locale]
  const resumeHref = `${import.meta.env.BASE_URL}${resumes[locale]}`

  useEffect(() => {
    document.documentElement.lang = t.htmlLang
    document.title = t.metadata.title
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    const openGraphTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]')
    const openGraphDescription = document.querySelector<HTMLMetaElement>('meta[property="og:description"]')

    if (description) description.content = t.metadata.description
    if (openGraphTitle) openGraphTitle.content = t.metadata.title
    if (openGraphDescription) openGraphDescription.content = t.metadata.description
  }, [t])

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.setAttribute('data-visible', 'true')
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )
    const targets = document.querySelectorAll<HTMLElement>('[data-reveal]')
    const hero = document.querySelector<HTMLElement>('#inicio')
    const heroObserver = new IntersectionObserver(([entry]) => {
      hero?.toggleAttribute('data-motion-paused', !entry.isIntersecting)
    })

    targets.forEach((target) => observer.observe(target))
    if (hero) heroObserver.observe(hero)
    document.documentElement.dataset.motion = 'ready'

    return () => {
      observer.disconnect()
      heroObserver.disconnect()
      delete document.documentElement.dataset.motion
    }
  }, [])

  return (
    <>
      <a className="skip-link" href="#conteudo">{t.skipLink}</a>

      <header className="sticky top-0 z-30 border-b border-[var(--line)] bg-[var(--header)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 py-3 sm:px-8">
          <a className="order-1 flex min-h-11 items-center gap-3 font-semibold tracking-tight text-[var(--text)]" href="#inicio">
            <span className="grid size-9 place-items-center rounded-xl border border-[var(--line)] bg-[var(--surface)] text-sm text-[var(--accent)]" aria-hidden="true">EV</span>
            <span>Eric Victor</span>
          </a>

          <div className="order-2 ml-auto flex items-center gap-1" role="group" aria-label={t.languageLabel}>
            {languageOptions.map((option) => (
              <button
                key={option.locale}
                className={`language-button inline-flex min-h-11 min-w-10 items-center justify-center rounded-lg border px-2 text-xs font-semibold ${locale === option.locale ? 'language-button-active' : ''}`}
                type="button"
                aria-label={`${t.languageLabel}: ${option.label}`}
                aria-pressed={locale === option.locale}
                onClick={() => setLocale(option.locale)}
              >
                <img className="language-flag" src={flags[option.locale]} alt="" width="24" height="16" />
                <span className="language-code" aria-hidden="true">{option.locale === 'pt-BR' ? 'PT' : option.locale.toUpperCase()}</span>
              </button>
            ))}
          </div>

          <nav aria-label={t.navigationLabel} className="primary-nav order-3 w-full lg:order-2 lg:w-auto">
            <ul className="primary-nav-list flex flex-wrap gap-x-5 gap-y-1 text-sm">
              {navigation.map((item) => (
                <li key={item.id}>
                  <a className="quiet-link inline-flex min-h-11 items-center" href={item.href}>
                    {t.nav[item.id]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="reading-progress" aria-hidden="true" />
      </header>

      <main id="conteudo">
        <section id="inicio" aria-labelledby="hero-title" className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-24">
          <div className="hero-atmosphere" aria-hidden="true"><span /><span /><span /></div>
          <svg className="hero-signal" viewBox="0 0 640 520" fill="none" aria-hidden="true">
            <path className="signal-path" d="M0 400 H95 L150 345 H275 L330 290 H420 L480 230 H640" />
            <path className="signal-pulse" d="M0 400 H95 L150 345 H275 L330 290 H420 L480 230 H640" />
            <circle className="signal-node" cx="330" cy="290" r="4" />
            <circle className="signal-node" cx="480" cy="230" r="4" />
          </svg>
          <div className="hero-copy">
            <h1 id="hero-title" data-hero-enter className="text-5xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Eric Victor
            </h1>
            <p data-hero-enter className="mt-5 max-w-2xl text-2xl font-medium leading-snug tracking-tight text-[var(--text)] sm:text-3xl" style={{ animationDelay: '90ms' }}>
              {t.hero.subtitle}
            </p>
            <p data-hero-enter className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--muted)]" style={{ animationDelay: '180ms' }}>
              {t.hero.summary}
            </p>
            <div data-hero-enter className="mt-9 flex flex-wrap gap-3" style={{ animationDelay: '270ms' }}>
              <a className="primary-cta filled-cta inline-flex min-h-12 items-center justify-center rounded-lg bg-[var(--accent)] px-5 py-3 text-sm font-bold text-[var(--page)]" href="#projetos">
                {t.hero.projectsCta}
              </a>
              <a className="secondary-cta inline-flex min-h-12 items-center justify-center rounded-lg border border-[var(--control-border)] px-5 py-3 text-sm font-semibold text-[var(--text)]" href={resumeHref} download={resumes[locale]}>
                {t.hero.cvCta}<span className="sr-only">, {t.hero.cvLanguage}</span>
              </a>
            </div>
            <div data-hero-enter className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ animationDelay: '360ms' }}>
              <a className="quiet-link inline-flex min-h-11 items-center underline" href={contact.github} target="_blank" rel="noreferrer">{t.hero.github}</a>
              <a className="quiet-link inline-flex min-h-11 items-center underline" href={contact.linkedin} target="_blank" rel="noreferrer">{t.hero.linkedin}</a>
            </div>
          </div>

          <div data-hero-enter className="mx-auto w-full max-w-[25rem] lg:mr-0" style={{ animationDelay: '240ms' }}>
            <figure className="profile-figure">
              <img
                className="profile-photo aspect-[5/6] w-full rounded-2xl object-cover"
                src={profilePhoto}
                alt={t.hero.profileAlt}
                fetchPriority="high"
                decoding="async"
              />
              <figcaption className="mt-4 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <span className="font-semibold text-[var(--text)]">{t.experience.entries.embraer.role}</span>
                <span className="text-sm text-[var(--muted)]">{experience.embraer.company} · {t.experience.entries.embraer.period}</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section id="sobre" aria-labelledby="sobre-title" className="border-t section-rule">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
            <div data-reveal>
              <SectionHeading id="sobre-title" title={t.about.title} />
              <div className="max-w-2xl space-y-4 text-base leading-relaxed text-[var(--muted)]">
                {t.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <article data-reveal style={revealStyle(0)} className="surface-card rounded-2xl p-5">
                <p className="text-sm font-semibold text-[var(--accent)]">{t.about.education}</p>
                <p className="mt-2 font-medium text-[var(--text)]">{t.about.degree}</p>
                <p className="text-sm text-[var(--muted)]">{t.about.degreeStatus}</p>
              </article>
              <article data-reveal style={revealStyle(1)} className="surface-card rounded-2xl p-5">
                <p className="text-sm font-semibold text-[var(--accent)]">{t.about.academicBase}</p>
                <p className="mt-2 font-medium text-[var(--text)]">{t.about.academicBaseDegree}</p>
                <p className="text-sm text-[var(--muted)]">{t.about.academicBaseStatus}</p>
              </article>
            </div>
          </div>
        </section>

        <section id="projetos" aria-labelledby="projetos-title" className="border-t section-rule">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
            <div data-reveal>
              <SectionHeading id="projetos-title" title={t.projectSection.workTitle} description={t.projectSection.workDescription} />
            </div>
            <div className="work-projects grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {workProjects.map((project, index) => {
                const job = experience[project.experienceId]
                const jobCopy = t.experience.entries[project.experienceId]

                return (
                  <WorkProjectCard
                    key={project.id}
                    project={project}
                    copy={t.workProjects[project.id]}
                    company={job.company}
                    role={jobCopy.role}
                    period={jobCopy.period}
                    delay={(index % 3) * 90}
                  />
                )
              })}
            </div>

            <div data-reveal className="mt-20">
              <SectionHeading id="projetos-pessoais-title" title={t.projectSection.personalTitle} description={t.projectSection.personalDescription} />
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  copy={t.projects[project.id]}
                  labels={t.projectSection}
                  featured={index === 0}
                  delay={(index % 3) * 90}
                />
              ))}
            </div>
            <a className="primary-cta mt-8 inline-flex min-h-11 items-center gap-2 font-semibold text-[var(--accent)] underline" href={contact.github} target="_blank" rel="noreferrer">
              {t.projectSection.allRepositories}
            </a>
          </div>
        </section>

        <section id="experiencia" aria-labelledby="experiencia-title" className="border-t section-rule">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:py-24">
            <div data-reveal>
              <SectionHeading id="experiencia-title" title={t.experience.title} description={t.experience.description} />
            </div>
            <ol className="experience-timeline space-y-8">
              {experienceOrder.map((id, index) => {
                const item = experience[id]
                const copy = t.experience.entries[id]

                return (
                  <li key={id} data-reveal style={revealStyle(index)} className="timeline-entry relative border-l border-[var(--line)] pb-2 pl-6 last:border-transparent">
                    <span aria-hidden="true" className="timeline-marker absolute -left-[5px] top-2 size-2.5 rounded-full bg-[var(--accent)] ring-4 ring-[var(--page)]" />
                    <p className="text-sm font-medium text-[var(--accent)]">{copy.period}</p>
                    <h3 className="mt-1 text-xl font-semibold text-[var(--text)]">{copy.role}</h3>
                    <p className="mt-1 text-sm text-[var(--muted)]">{item.company}</p>
                    <ul className="mt-4 list-disc space-y-2.5 pl-5 text-sm leading-relaxed text-[var(--muted)] marker:text-[var(--accent)]">
                      {copy.details.map((detail) => <li key={detail}>{detail}</li>)}
                    </ul>
                  </li>
                )
              })}
            </ol>
          </div>
        </section>

        <section id="skills" aria-labelledby="skills-title" className="border-t section-rule">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
            <div data-reveal>
              <SectionHeading id="skills-title" title={t.skills.title} description={t.skills.description} />
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((group, index) => (
                <article key={group.id} data-reveal style={revealStyle(index)} className="surface-card rounded-2xl p-5">
                  <h3 className="text-lg font-semibold text-[var(--text)]">{t.skills.groups[group.id]}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li key={skill} className="tag rounded-full px-3 py-1 text-xs">{skill}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="oportunidades" aria-labelledby="oportunidades-title" className="border-t section-rule">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:py-24">
            <div data-reveal>
              <SectionHeading id="oportunidades-title" title={t.opportunities.title} />
            </div>
            <div data-reveal>
              <p className="max-w-2xl text-base leading-relaxed text-[var(--muted)]">{t.opportunities.description}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {t.opportunities.items.map((opportunity, index) => (
                  <li key={opportunity} data-reveal style={revealStyle(index)} className="opportunity-item flex min-h-12 items-center gap-3 rounded-xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm font-medium text-[var(--text)]">
                    <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                    {opportunity}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="contato" aria-labelledby="contato-title" className="border-t section-rule">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
            <div data-reveal className="contact-panel surface-card rounded-3xl p-7 sm:p-10 lg:flex lg:items-end lg:justify-between lg:gap-10">
              <div>
                <SectionHeading id="contato-title" title={t.contact.title} description={t.contact.description} />
                <a className="text-lg font-semibold text-[var(--accent)] underline" href={`mailto:${contact.email}`}>{contact.email}</a>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-3 lg:mt-0">
                <a className="primary-cta filled-cta col-span-2 inline-flex min-h-12 items-center justify-center rounded-lg bg-[var(--accent)] px-5 py-3 text-center text-sm font-bold text-[var(--page)]" href={resumeHref} download={resumes[locale]}>
                  {t.contact.cvCta}
                </a>
                <a className="secondary-cta inline-flex min-h-12 items-center justify-center rounded-lg border border-[var(--control-border)] px-5 py-3 text-sm font-semibold text-[var(--text)]" href={contact.github} target="_blank" rel="noreferrer">
                  {t.hero.github}
                </a>
                <a className="secondary-cta inline-flex min-h-12 items-center justify-center rounded-lg border border-[var(--control-border)] px-5 py-3 text-sm font-semibold text-[var(--text)]" href={contact.linkedin} target="_blank" rel="noreferrer">
                  {t.hero.linkedin}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t section-rule">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-6 text-sm text-[var(--muted)] sm:px-8">
          <p>Eric Victor · São José dos Campos, SP</p>
          <p>{t.footer}</p>
        </div>
      </footer>
    </>
  )
}

export default App
