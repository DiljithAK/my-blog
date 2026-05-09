import './App.css'
import { Navbar } from './components/Navbar'
import { AboutPage } from './pages/AboutPage'
import { AllPostsPage } from './pages/AllPostsPage'
import { BlogDetailPage } from './pages/BlogDetailPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { useHashRoute } from './router/useHashRoute'

function App() {
  const route = useHashRoute()

  const renderPage = () => {
    if (route.path === '/about') {
      return <AboutPage />
    }

    if (route.path === '/contact') {
      return <ContactPage />
    }

    if (route.path === '/posts') {
      return <AllPostsPage />
    }

    if (route.path.startsWith('/posts/')) {
      return <BlogDetailPage slug={route.path.replace('/posts/', '')} />
    }

    return <HomePage />
  }

  return (
    <div className="app-shell">
      <Navbar />
      <main>{renderPage()}</main>
    </div>
  )
}

export default App
