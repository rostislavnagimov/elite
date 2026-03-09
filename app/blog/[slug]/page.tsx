import {Metadata} from 'next'
import Header from '../../components/landing/Header'
import Footer from '../../components/landing/Footer'
import blogDataRaw from '../../../blog.json'
import {notFound} from 'next/navigation'

interface BlogPost {
  title: string
  image: string
  text: string
  link: string
  fullText: string
  slug: string
  tag?: string
}

const blogData = blogDataRaw as BlogPost[]

export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug
  }))
}

export async function generateMetadata({params}: {params: Promise<{slug: string}>}): Promise<Metadata> {
  const {slug} = await params
  const post = blogData.find((p) => p.slug === slug)
  if (!post) return {}

  return {
    title: `${post.title} | Блог Elite`,
    description: post.text
  }
}

export default async function BlogPostPage({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params
  const post = blogData.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <article className="pb-24 pt-[140px]">
        {/* Post Header */}
        <div className="mx-auto max-w-[1240px] px-5">
          <div className="mb-12 flex flex-col items-center">
            {post.tag && (
              <div className="mb-6 rounded-full bg-[#C5E4FC] px-4 py-1.5">
                <span className="font-[Gilroy,sans-serif] text-[14px] font-bold uppercase text-[#26262b]">
                  {post.tag}
                </span>
              </div>
            )}
            <h1 className="max-w-[900px] text-center font-[Gilroy,sans-serif] text-[36px] font-bold leading-[1.2] text-[#1E1E1E] md:text-[48px]">
              {post.title}
            </h1>
          </div>

          {/* Featured Image */}
          <div className="mb-16 overflow-hidden rounded-[40px] shadow-xl">
            <img src={post.image} alt={post.title} className="h-full max-h-[600px] w-full object-cover" />
          </div>

          {/* Content */}
          <div className="mx-auto max-w-[800px]">
            <div className="prose prose-lg max-w-none whitespace-pre-wrap font-[Gilroy,sans-serif] text-[18px] leading-[1.6] text-[#26262b]">
              {post.fullText}
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
