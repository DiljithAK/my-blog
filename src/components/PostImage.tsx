import type { BlogPost } from '../types'

type PostImageProps = {
  post: BlogPost
  className: string
  showLabelOnFallback?: boolean
}

export function PostImage({
  post,
  className,
  showLabelOnFallback = false,
}: PostImageProps) {
  const hasImage = Boolean(post.imageSrc)

  return (
    <div
      aria-label={hasImage ? undefined : post.imageLabel}
      className={hasImage ? `${className} has-post-image` : className}
      role={hasImage ? undefined : 'img'}
      style={hasImage ? undefined : { background: post.gradient }}
    >
      {hasImage ? (
        <img alt={post.imageLabel} src={post.imageSrc} />
      ) : (
        showLabelOnFallback && <span>{post.imageLabel}</span>
      )}
    </div>
  )
}
