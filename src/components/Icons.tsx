import type { ReactNode } from 'react'

type IconShellProps = {
  children: ReactNode
  label: string
}

export function IconShell({ children, label }: IconShellProps) {
  return (
    <span aria-label={label} className="icon-shell" role="img">
      {children}
    </span>
  )
}

export function SearchIcon() {
  return (
    <IconShell label="Search">
      <svg viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="6.5" />
        <path d="M16 16L21 21" />
      </svg>
    </IconShell>
  )
}

export function HeartIcon() {
  return (
    <IconShell label="Likes">
      <svg viewBox="0 0 24 24">
        <path d="M12 20s-6.5-4.35-8.7-8.13C1.56 8.92 3.18 5 6.98 5c2.08 0 3.46 1.2 4.18 2.38C11.88 6.2 13.26 5 15.34 5c3.8 0 5.42 3.92 3.68 6.87C18.5 15.65 12 20 12 20Z" />
      </svg>
    </IconShell>
  )
}

export function CommentIcon() {
  return (
    <IconShell label="Comments">
      <svg viewBox="0 0 24 24">
        <path d="M5 6.5h14v9H9l-4 3v-12Z" />
      </svg>
    </IconShell>
  )
}

export function ArrowRightIcon() {
  return (
    <IconShell label="Next">
      <svg viewBox="0 0 24 24">
        <path d="M5 12h14" />
        <path d="M13 6l6 6-6 6" />
      </svg>
    </IconShell>
  )
}

export function SocialIcon({ type }: { type: 'github' | 'linkedin' | 'x' }) {
  if (type === 'github') {
    return (
      <IconShell label="GitHub">
        <svg viewBox="0 0 24 24">
          <path d="M9 19c-4 1.2-4-2.1-5.7-2.5" />
          <path d="M15 21v-3.1c0-1 .1-1.42-.48-2A4.6 4.6 0 0 0 18 12.3c0-3-1.8-4.3-1.8-4.3.9-2.4-.1-3.5-.1-3.5S14.6 4 12 5.8c-2.6-1.8-4.1-1.3-4.1-1.3S6.9 5.6 7.8 8c0 0-1.8 1.3-1.8 4.3a4.6 4.6 0 0 0 3.48 3.6c-.58.58-.58 1.27-.48 2V21" />
        </svg>
      </IconShell>
    )
  }

  if (type === 'linkedin') {
    return (
      <IconShell label="LinkedIn">
        <svg viewBox="0 0 24 24">
          <path d="M7 9v8" />
          <path d="M7 6h.01" />
          <path d="M12 17v-4.2a2.3 2.3 0 0 1 4.6 0V17" />
          <path d="M12 9v8" />
          <path d="M17 9v8" />
        </svg>
      </IconShell>
    )
  }

  return (
    <IconShell label="X">
      <svg viewBox="0 0 24 24">
        <path d="M5 5l14 14" />
        <path d="M19 5L5 19" />
      </svg>
    </IconShell>
  )
}
