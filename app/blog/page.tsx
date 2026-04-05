import {Metadata} from 'next'
import Link from 'next/link'
import JsonLd from '../components/JsonLd'
import blogDataRaw from '../../blog.json'

export const metadata: Metadata = {
  title: 'Блог компании Elite | Полезные статьи о рекрутинге и карьере',
  description:
    'Читайте последние статьи о рынке труда, поиске работы и управлении персоналом в блоге кадрового агентства Elite.',
  alternates: {
    canonical: 'https://elite.kz/blog'
  }
}

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Блог Elite',
  description: 'Статьи о подборе персонала, аутсорсинге и развитии карьеры.',
  publisher: {
    '@type': 'Organization',
    name: 'Elite',
    logo: {
      '@type': 'ImageObject',
      url: '/assets/images/Elite_logo_1_1.svg'
    }
  }
}

interface BlogPost {
  title: string
  image: string
  text: string
  link: string
  slug: string
  tag?: string
}

const blogData = blogDataRaw as BlogPost[]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={blogSchema} />
      
      {/* Hero Section */}
      <section className="px-5 pb-12 pt-[140px] text-[#26262B]">
        <div className="mx-auto max-w-[1240px]">
          <div className="flex flex-col border-b border-gray-100 pb-16 md:flex-row md:items-center">
            <div className="mb-4 w-full md:mb-0 md:w-1/3">
              <p className="max-w-[200px] font-[Gilroy,sans-serif] text-[16px] leading-[1.4] text-[#828282]">
                Читайте последние статьи прямо сейчас
              </p>
            </div>
            <div className="w-full md:w-2/3">
              <h1 className="bg-gradient-to-r from-[#ED0971] via-[#F0544D] to-[#F36A28] bg-clip-text font-[Gilroy,sans-serif] text-[50px] font-bold uppercase leading-tight text-transparent md:text-[62px]">
                БЛОГ
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="px-5 pb-24">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 lg:grid-cols-3">
            {blogData.map((post, index) => (
              <article
                key={index}
                className="group flex flex-col overflow-hidden rounded-[30px] bg-[#F5F5F5] transition-all duration-300"
              >
                <a href={`/blog/${post.slug}`} className="flex h-full flex-col focus:outline-none">
                  {/* Image area */}
                  <div className="relative aspect-[360/277] w-full overflow-hidden rounded-t-[30px]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {post.tag && (
                      <div className="absolute left-[30px] top-[30px] z-10 rounded-full bg-[#C5E4FC] px-4 py-1.5">
                        <span className="font-[Gilroy,sans-serif] text-[14px] font-bold uppercase text-[#26262b]">
                          {post.tag}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Text area */}
                  <div className="flex flex-1 flex-col p-[30px] pb-[40px]">
                    <h2 className="mb-4 font-[Gilroy,sans-serif] text-[20px] font-bold leading-[1.3] text-[#1E1E1E] transition-colors group-hover:text-[#e61a66]">
                      {post.title}
                    </h2>

                    <p className="mb-8 line-clamp-3 font-[Gilroy,sans-serif] text-[16px] leading-[1.55] text-[#5C5C5C]">
                      {post.text}
                    </p>

                    <div className="mt-auto flex items-center gap-1 font-[Gilroy,sans-serif] text-[16px] font-medium text-[#26262b] transition-colors group-hover:text-[#e61a66]">
                      Читать дальше
                      <img src="/assets/icons/arrow-right.svg" alt="" className="mt-0.5 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-20 flex justify-center border-t border-gray-100 pt-12">
            <button className="rounded-full border-2 border-[#e61a66] px-10 py-4 font-[Gilroy,sans-serif] text-[16px] font-bold text-[#e61a66] transition-all hover:bg-[#e61a66] hover:text-white focus:outline-none">
              Загрузить еще
            </button>
          </div>
        </div>
      </section>

          </main>
  )
}
