import { categories } from '../data/blogs'
import { SearchIcon } from './Icons'
import { NavLink } from './NavLink'
import { SocialLinks } from './SocialLinks'

export function Navbar() {
  return (
    <header className="topbar">
      <NavLink href="/" className="brand-mark">
        DK
      </NavLink>

      <nav className="topbar-nav" aria-label="Primary">
        <details className="category-menu">
          <summary>Categories</summary>
          <div className="category-dropdown">
            {categories.map((category) => (
              <span className="dropdown-item" key={category}>
                {category}
              </span>
            ))}
          </div>
        </details>

        <NavLink href="/about" className="nav-item">
          About Me
        </NavLink>
        <NavLink href="/contact" className="nav-item">
          Contact
        </NavLink>
      </nav>

      <div className="topbar-actions">
        <div className="search-group">
          <SearchIcon />
          <input
            aria-label="Search blog topics"
            className="search-input"
            placeholder="Search articles, topics..."
            type="search"
          />
        </div>
        <SocialLinks />
      </div>
    </header>
  )
}
