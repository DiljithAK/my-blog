import type { BlogPost, Category } from '../types'

import frontendScaleImage from '../assets/blogs/ScalableFrontendSystems.png'
import aiPairProgrammingWorksBestWhenTheBoundariesAreClear from '../assets/blogs/AiPairProgrammingWorksBestWhenTheBoundariesAreClear.png'
import kindFeedbackIsATechnicalSkill from '../assets/blogs/KindFeedbackIsATechnicalSkill.png'
import shippingBlockchainProductsWithoutFallingIntoHype from '../assets/blogs/ShippingBlockchainProductsWithoutFallingIntoHype.png'
import buildingASustainableCreatorRhythmAlongsideFullTimeWork from '../assets/blogs/BuildingASustainableCreatorRhythmAlongsideFullTimeWork.png'
import semanticHTMLStillMattersMoreThanFancyUITricks from '../assets/blogs/SemanticHTMLStillMattersMoreThanFancyUITricks.png'

export const categories: Category[] = [
  'Web Development',
  'AI Development',
  'Blockchain Development',
  'Workplace Ethics',
  'Lifestyle',
]

export const blogPosts: BlogPost[] = [
  {
    slug: 'designing-frontend-systems-that-scale',
    title: 'Designing Frontend Systems That Scale Beyond the First Launch',
    category: 'Web Development',
    excerpt:
      'A practical look at how design tokens, layout primitives, and content-aware components keep a personal platform clean as the blog grows.',
    content: [
      'The first version of a blog often feels tidy because there are only a few cards, a single hero section, and one author voice. The real challenge begins when the site needs to support more categories, richer storytelling, and multiple content rhythms without losing consistency.',
      'A scalable frontend starts with shared decisions instead of repeated styling. Buttons, cards, icon shells, section containers, and typography rules should be designed once and reused with intent. That lets us update the experience globally without hunting through the entire codebase.',
      'I also like treating blog sections as editorial systems rather than one-off layouts. Featured, popular, and recent content can all share the same card anatomy while changing only the surrounding context. The result is faster maintenance and a much more stable UI.',
    ],
    likes: 284,
    commentsCount: 18,
    readTime: '6 min read',
    publishedAt: 'May 2, 2026',
    featured: true,
    popular: true,
    recent: false,
    imageSrc: frontendScaleImage,
    gradient: 'linear-gradient(135deg, #f7f7f7 0%, #d9d9d9 45%, #8b8b8b 100%)',
    imageLabel: 'Component grid with layered cards',
    comments: [
      {
        id: 1,
        author: 'Riya',
        role: 'Frontend Engineer',
        message:
          'The point about shared UI decisions really lands. It is exactly what keeps side projects from turning fragile later.',
      },
      {
        id: 2,
        author: 'Marcus',
        role: 'Product Designer',
        message:
          'Loved the editorial systems angle. Reusing card anatomy but changing context is such a clean mental model.',
      },
    ],
  },
  {
    slug: 'ai-pair-programming-with-clear-boundaries',
    title: 'AI Pair Programming Works Best When the Boundaries Are Clear',
    category: 'AI Development',
    excerpt:
      'A grounded approach to collaborating with AI tools without losing architecture ownership, code review discipline, or engineering judgment.',
    content: [
      'AI can remove the drag from repetitive implementation, but it should not become a shortcut around thinking. The healthiest pattern is to give it focused responsibilities while humans keep ownership of the design, tradeoffs, and final review.',
      'In practice, that means defining a good task boundary. Ask the assistant to build a component, clean up a utility, or draft tests for a defined scenario. Avoid outsourcing fuzzy problem framing until you have already clarified what success looks like.',
      'Clear boundaries make AI collaboration feel less chaotic. They improve trust, reduce noisy output, and help the team keep its coding standards intact even when development speeds up.',
    ],
    likes: 356,
    commentsCount: 24,
    readTime: '5 min read',
    publishedAt: 'May 7, 2026',
    featured: true,
    popular: true,
    recent: true,
    imageSrc: aiPairProgrammingWorksBestWhenTheBoundariesAreClear,
    gradient: 'linear-gradient(135deg, #ffffff 0%, #ececec 35%, #6f6f6f 100%)',
    imageLabel: 'Terminal window with abstract AI pulse',
    comments: [
      {
        id: 1,
        author: 'Naveen',
        role: 'Tech Lead',
        message:
          'This mirrors our team experience. AI helps a lot, but only when the task is properly scoped.',
      },
      {
        id: 2,
        author: 'Elena',
        role: 'Engineering Manager',
        message:
          'The idea of keeping architecture ownership with humans is a strong framing and very actionable.',
      },
      {
        id: 3,
        author: 'Josh',
        role: 'Full Stack Developer',
        message:
          'I would read a follow-up post on prompts that work well for bounded engineering tasks.',
      },
    ],
  },
  {
    slug: 'shipping-blockchain-products-without-hype',
    title: 'Shipping Blockchain Products Without Falling Into Hype',
    category: 'Blockchain Development',
    excerpt:
      'Why the strongest blockchain products focus on user trust, transparent tradeoffs, and boring reliability before industry buzzwords.',
    content: [
      'Users rarely care which chain, node strategy, or wallet flow we are proud of unless those details improve trust and usability. The best blockchain products reduce uncertainty instead of introducing more of it.',
      'That means surfacing fees clearly, writing copy that respects the stakes, and designing failure states with the same care as success states. A production-ready product is not the same thing as a technically impressive demo.',
      'The deeper lesson is simple: credibility is a feature. Teams that communicate carefully and optimize for stability earn much more loyalty than teams that only optimize for novelty.',
    ],
    likes: 198,
    commentsCount: 11,
    readTime: '7 min read',
    publishedAt: 'April 29, 2026',
    featured: true,
    popular: false,
    recent: false,
    imageSrc: shippingBlockchainProductsWithoutFallingIntoHype,
    gradient: 'linear-gradient(135deg, #fbfbfb 0%, #d8d8d8 40%, #4f4f4f 100%)',
    imageLabel: 'Network lines over a minimal ledger',
    comments: [
      {
        id: 1,
        author: 'Aman',
        role: 'Web3 Builder',
        message:
          'Credibility is a feature should be on every roadmap. Great reminder for product teams.',
      },
    ],
  },
  {
    slug: 'kind-feedback-is-a-technical-skill',
    title: 'Kind Feedback Is a Technical Skill, Not Just a Personality Trait',
    category: 'Workplace Ethics',
    excerpt:
      'Healthy engineering teams improve faster when feedback is direct, specific, and respectful enough to preserve momentum.',
    content: [
      'There is a myth that helpful feedback must be either brutally honest or overly soft. In reality, strong technical feedback is both clear and humane. It names the issue, explains the impact, and offers a path forward.',
      'This matters because code review is rarely just about code. It shapes confidence, collaboration, and the speed at which new contributors can become effective. Teams with thoughtful review culture create more durable quality over time.',
      'When we treat kindness as rigor instead of decoration, feedback becomes easier to absorb and more likely to lead to change.',
    ],
    likes: 421,
    commentsCount: 39,
    readTime: '4 min read',
    publishedAt: 'May 5, 2026',
    featured: false,
    popular: true,
    recent: true,
    imageSrc: kindFeedbackIsATechnicalSkill,
    gradient: 'linear-gradient(135deg, #ffffff 0%, #efefef 42%, #707070 100%)',
    imageLabel: 'Conversation bubbles over review notes',
    comments: [
      {
        id: 1,
        author: 'Priya',
        role: 'Senior Developer',
        message:
          'This is the kind of review culture more teams need. The confidence angle is especially true.',
      },
      {
        id: 2,
        author: 'Daniel',
        role: 'Staff Engineer',
        message:
          'Direct plus humane is a great rule. I shared this with my team lead group.',
      },
    ],
  },
  {
    slug: 'building-a-sustainable-creator-rhythm',
    title: 'Building a Sustainable Creator Rhythm Alongside Full-Time Work',
    category: 'Lifestyle',
    excerpt:
      'A realistic system for writing, learning, and recovering without turning every free evening into a second shift.',
    content: [
      'A personal blog only stays alive when the publishing rhythm fits the rest of life. Systems built on guilt usually fail. Systems built on energy, curiosity, and recovery tend to survive.',
      'For me, sustainability comes from lighter expectations. One good article every few weeks is more valuable than a burst of unsustainable output followed by silence. Creative work compounds when it is paced in a way your real life can support.',
      'The useful question is not how to publish more. It is how to keep showing up long enough for the work to become meaningful.',
    ],
    likes: 163,
    commentsCount: 9,
    readTime: '3 min read',
    publishedAt: 'May 8, 2026',
    featured: false,
    popular: false,
    recent: true,
    imageSrc: buildingASustainableCreatorRhythmAlongsideFullTimeWork,
    gradient: 'linear-gradient(135deg, #ffffff 0%, #f3f3f3 38%, #8d8d8d 100%)',
    imageLabel: 'Desk scene with journal and calm lighting',
    comments: [
      {
        id: 1,
        author: 'Karthik',
        role: 'Indie Maker',
        message:
          'One good article every few weeks feels much more sustainable than the usual content advice online.',
      },
    ],
  },
  {
    slug: 'semantic-html-still-matters',
    title: 'Semantic HTML Still Matters More Than Fancy UI Tricks',
    category: 'Web Development',
    excerpt:
      'Accessibility, SEO, and maintainability all improve when semantic structure leads the interface instead of styling alone.',
    content: [
      'It is tempting to treat HTML as just a container for CSS and JavaScript, especially when building visually ambitious pages. But semantic structure quietly influences accessibility, search discoverability, and how easy the UI is to reason about later.',
      'A strong content hierarchy reduces confusion for both machines and people. It also makes components more reusable because the meaning of each region is already clear before styles get involved.',
      'Well-chosen tags will never be flashy, but they are some of the highest-leverage decisions in a frontend codebase.',
    ],
    likes: 239,
    commentsCount: 16,
    readTime: '5 min read',
    publishedAt: 'May 1, 2026',
    featured: false,
    popular: false,
    recent: false,
    imageSrc: semanticHTMLStillMattersMoreThanFancyUITricks,
    gradient: 'linear-gradient(135deg, #fcfcfc 0%, #e7e7e7 36%, #616161 100%)',
    imageLabel: 'Code brackets layered over paper texture',
    comments: [
      {
        id: 1,
        author: 'Sara',
        role: 'Accessibility Advocate',
        message:
          'Semantic structure is one of those things that keeps paying off later. Glad to see it centered here.',
      },
    ],
  },
]

export const featuredPosts = blogPosts.filter((post) => post.featured)
export const popularPosts = blogPosts.filter((post) => post.popular)
export const recentPosts = blogPosts.filter((post) => post.recent)
