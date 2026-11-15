type SectionHeadingProps = {
  id: string
  title: string
  description?: string
}

export default function SectionHeading({ id, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-2xl">
      <h2 id={id} className="text-balance text-3xl font-semibold tracking-[-0.035em] text-[var(--text)] sm:text-4xl">
        {title}
      </h2>
      {description ? <p className="mt-3 text-base leading-relaxed text-[var(--muted)]">{description}</p> : null}
    </div>
  )
}
