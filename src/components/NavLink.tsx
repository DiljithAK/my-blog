import type { ReactNode } from 'react'
import { navigateTo } from '../router/useHashRoute'

type NavLinkProps = {
  children: ReactNode
  href: string
  className?: string
}

export function NavLink({ children, href, className = '' }: NavLinkProps) {
  return (
    <a
      className={className}
      href={`#${href}`}
      onClick={(event) => {
        event.preventDefault()
        navigateTo(href)
      }}
    >
      {children}
    </a>
  )
}
