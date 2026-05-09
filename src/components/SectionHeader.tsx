import type { ReactNode } from 'react'

type SectionHeaderProps = {
  eyebrow: string
  title: string
  description: string
  action?: ReactNode
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
}: SectionHeaderProps) {
  return (
    <div className="section-header">
      <div>
        <p className="section-eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p className="section-copy">{description}</p>
      </div>
      {action}
    </div>
  )
}
