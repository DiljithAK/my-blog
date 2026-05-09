import type { BlogPost } from '../types'
import { BlogCard } from './BlogCard'

type PostGridProps = {
  posts: BlogPost[]
}

export function PostGrid({ posts }: PostGridProps) {
  return (
    <div className="post-grid">
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  )
}
