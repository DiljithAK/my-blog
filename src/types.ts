export type Category =
  | 'Web Development'
  | 'AI Development'
  | 'Blockchain Development'
  | 'Workplace Ethics'
  | 'Lifestyle'

export type Comment = {
  id: number
  author: string
  role: string
  message: string
}

export type BlogPost = {
  slug: string
  title: string
  category: Category
  excerpt: string
  content: string[]
  likes: number
  commentsCount: number
  readTime: string
  publishedAt: string
  featured: boolean
  popular: boolean
  recent: boolean
  imageSrc?: string
  gradient: string
  imageLabel: string
  comments: Comment[]
}
