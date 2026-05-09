import { blogPosts } from '../data/blogs'
import { CommentIcon, HeartIcon } from '../components/Icons'

type BlogDetailPageProps = {
  slug: string
}

export function BlogDetailPage({ slug }: BlogDetailPageProps) {
  const post = blogPosts.find((entry) => entry.slug === slug)

  if (!post) {
    return (
      <div className="page-stack page-narrow">
        <section className="page-intro">
          <p className="section-eyebrow">Post Not Found</p>
          <h1>This article does not exist in the static blog set.</h1>
          <p className="section-copy">
            Try heading back to the archive and opening another post card.
          </p>
        </section>
      </div>
    )
  }

  return (
    <div className="page-stack page-narrow">
      <article className="blog-detail">
        <div
          aria-label={post.imageLabel}
          className="blog-detail-image"
          role="img"
          style={{ background: post.gradient }}
        />

        <div className="blog-detail-copy">
          <div className="blog-meta-row">
            <span className="chip">{post.category}</span>
            <span>{post.publishedAt}</span>
            <span>{post.readTime}</span>
          </div>

          <h1>{post.title}</h1>
          <p className="blog-lead">{post.excerpt}</p>

          <div className="engagement-row detail-engagement">
            <span className="engagement-item">
              <HeartIcon />
              {post.likes} likes
            </span>
            <span className="engagement-item">
              <CommentIcon />
              {post.commentsCount} comments
            </span>
          </div>

          <div className="blog-content">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>

      <section className="comments-panel">
        <div className="section-header">
          <div>
            <p className="section-eyebrow">Reader Comments</p>
            <h2>Hardcoded conversations for the static experience</h2>
            <p className="section-copy">
              This screen is static, so the comments and engagement numbers are
              intentionally fixed for now.
            </p>
          </div>
        </div>

        <div className="comment-list">
          {post.comments.map((comment) => (
            <article className="comment-card" key={comment.id}>
              <div className="comment-avatar">{comment.author.slice(0, 1)}</div>
              <div>
                <h3>{comment.author}</h3>
                <p className="comment-role">{comment.role}</p>
                <p>{comment.message}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
