import { useEffect, useState } from 'react'

type RouteState = {
  path: string
}

const getPathFromHash = () => {
  const hash = window.location.hash.replace(/^#/, '')

  if (!hash) {
    return '/'
  }

  return hash.startsWith('/') ? hash : `/${hash}`
}

export function navigateTo(path: string) {
  window.location.hash = path
}

export function useHashRoute(): RouteState {
  const [path, setPath] = useState(getPathFromHash)

  useEffect(() => {
    const syncPath = () => setPath(getPathFromHash())

    window.addEventListener('hashchange', syncPath)

    return () => window.removeEventListener('hashchange', syncPath)
  }, [])

  return { path }
}
