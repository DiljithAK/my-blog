import type { BlogPost } from '../types'
import { CommentIcon, HeartIcon } from './Icons'
import { NavLink } from './NavLink'
import { PostImage } from './PostImage'

type BlogCardProps = {
  post: BlogPost
}

function getCardExcerpt(excerpt: string, maxWords = 100) {
  const words = excerpt.trim().split(/\s+/)

  if (words.length <= maxWords) {
    return excerpt
  }

  return `${words.slice(0, maxWords).join(' ')}...`
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="blog-card">
      <NavLink href={`/posts/${post.slug}`} className="blog-card-link">
        <PostImage
          post={post}
          className="blog-card-image"
          showLabelOnFallback
        />

        <div className="blog-card-body">
          <div className="blog-meta-row">
            <span className="chip">{post.category}</span>
            <span>{post.readTime}</span>
          </div>

          <h3>{post.title}</h3>
          <p>{getCardExcerpt(post.excerpt)}</p>

          <div className="blog-card-footer">
            <span>{post.publishedAt}</span>
            <div className="engagement-row">
              <span className="engagement-item">
                <HeartIcon />
                {post.likes}
              </span>
              <span className="engagement-item">
                <CommentIcon />
                {post.commentsCount}
              </span>
            </div>
          </div>
        </div>
      </NavLink>
    </article>
  )
}
