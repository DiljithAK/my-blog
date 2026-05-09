import type { BlogPost } from '../types'
import { CommentIcon, HeartIcon } from './Icons'
import { NavLink } from './NavLink'

type BlogCardProps = {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="blog-card">
      <NavLink href={`/posts/${post.slug}`} className="blog-card-link">
        <div
          aria-label={post.imageLabel}
          className="blog-card-image"
          role="img"
          style={{ background: post.gradient }}
        >
          <span>{post.imageLabel}</span>
        </div>

        <div className="blog-card-body">
          <div className="blog-meta-row">
            <span className="chip">{post.category}</span>
            <span>{post.readTime}</span>
          </div>

          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>

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
