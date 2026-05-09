import { blogPosts } from '../data/blogs'
import { PostGrid } from '../components/PostGrid'
import { SectionHeader } from '../components/SectionHeader'

export function AllPostsPage() {
  return (
    <div className="page-stack page-narrow">
      <section className="page-intro">
        <p className="section-eyebrow">All Posts</p>
        <h1>A growing library of practical notes and reflective essays</h1>
        <p className="section-copy">
          Browse every article across web development, AI, blockchain,
          workplace ethics, and lifestyle. Each card routes to a dedicated
          static detail page with hardcoded comments and engagement details.
        </p>
      </section>

      <section className="content-section">
        <SectionHeader
          eyebrow="Archive"
          title="Every article in one place"
          description="Structured as a reusable grid so the archive stays easy to extend when more posts are added later."
        />
        <PostGrid posts={blogPosts} />
      </section>
    </div>
  )
}
