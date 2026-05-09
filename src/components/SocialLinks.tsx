import { SocialIcon } from './Icons'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/', type: 'github' as const },
  { label: 'LinkedIn', href: 'https://linkedin.com/', type: 'linkedin' as const },
  { label: 'X', href: 'https://x.com/', type: 'x' as const },
]

export function SocialLinks() {
  return (
    <div className="social-links" aria-label="Social links">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          className="social-link"
          href={link.href}
          rel="noreferrer"
          target="_blank"
        >
          <SocialIcon type={link.type} />
        </a>
      ))}
    </div>
  )
}
