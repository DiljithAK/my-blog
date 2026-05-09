import { blogPosts, featuredPosts, popularPosts, recentPosts } from '../data/blogs'
import { ArrowRightIcon } from '../components/Icons'
import { HeroSection } from '../components/HeroSection'
import { NavLink } from '../components/NavLink'
import { NewsletterSection } from '../components/NewsletterSection'
import { PostGrid } from '../components/PostGrid'
import { SectionHeader } from '../components/SectionHeader'

export function HomePage() {
  return (
    <div className="page-stack">
      <HeroSection />

      <section className="content-section">
        <SectionHeader
          eyebrow="Featured Blogs"
          title="Thoughtful reads for developers building with intention"
          description="A handpicked mix of engineering, AI, blockchain, and work culture essays designed to be both practical and reflective."
        />
        <PostGrid posts={featuredPosts} />
      </section>

      <section className="content-section">
        <SectionHeader
          eyebrow="Popular This Week"
          title="Stories readers are returning to and sharing"
          description="High-signal posts that are resonating this week across technical craft, team habits, and product thinking."
        />
        <PostGrid posts={popularPosts} />
      </section>

      <section className="content-section">
        <SectionHeader
          eyebrow="Recently Posted"
          title="Fresh ideas from the latest publishing sprint"
          description="The newest additions to the journal, with current lessons from hands-on development and creative routine building."
          action={
            <NavLink className="text-link" href="/posts">
              View all posts
              <ArrowRightIcon />
            </NavLink>
          }
        />
        <PostGrid posts={recentPosts} />
      </section>

      <section className="content-section">
        <SectionHeader
          eyebrow="All Posts Snapshot"
          title="A complete view of the writing library"
          description="Every post uses the same reusable card design, making it easy to scan categories, engagement, and publishing dates."
        />
        <PostGrid posts={blogPosts.slice(0, 3)} />
      </section>

      <NewsletterSection />
    </div>
  )
}
