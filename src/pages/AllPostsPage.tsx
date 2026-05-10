import { blogPosts } from '../data/blogs'
import { PostGrid } from '../components/PostGrid'

export function AllPostsPage() {
  return (
    <div className="page-stack page-narrow">
      <section className="content-section">
        <p className="section-eyebrow">ARTICLES</p>
        <PostGrid posts={blogPosts} />
      </section>
    </div>
  )
}
