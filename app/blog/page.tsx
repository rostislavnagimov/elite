'use client'

import Header from '../components/landing/Header'
import Footer from '../components/landing/Footer'
import blogData from '../../blog.json'

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-[140px] pb-12 px-5 text-[#26262B]">
        <div className="mx-auto max-w-[1240px]">
          <div className="flex flex-col md:flex-row md:items-center border-b border-gray-100 pb-16">
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <p className="font-[Gilroy,sans-serif] text-[16px] leading-[1.4] text-[#828282] max-w-[200px]">
                Читайте последние статьи прямо сейчас
              </p>
            </div>
            <div className="w-full md:w-2/3">
              <h1 className="font-[Gilroy,sans-serif] text-[50px] md:text-[62px] font-bold uppercase leading-tight bg-gradient-to-r from-[#ED0971] via-[#F0544D] to-[#F36A28] bg-clip-text text-transparent">
                БЛОГ
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-24 px-5">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
            {blogData.map((post, index) => (
              <article key={index} className="group flex flex-col bg-[#F5F5F5] rounded-[30px] overflow-hidden transition-all duration-300">
                <a href={post.link} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full focus:outline-none">
                  {/* Image area */}
                  <div className="relative aspect-[360/277] w-full overflow-hidden rounded-t-[30px]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {post.tag && (
                      <div className="absolute left-[30px] top-[30px] bg-[#C5E4FC] px-4 py-1.5 rounded-full z-10">
                        <span className="font-[Gilroy,sans-serif] text-[14px] font-bold text-[#26262b] uppercase">
                          {post.tag}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Text area */}
                  <div className="flex-1 p-[30px] pb-[40px] flex flex-col">
                    <h2 className="font-[Gilroy,sans-serif] text-[20px] font-bold text-[#1E1E1E] leading-[1.3] mb-4 transition-colors group-hover:text-[#e61a66]">
                      {post.title}
                    </h2>

                    <p className="font-[Gilroy,sans-serif] text-[16px] text-[#5C5C5C] leading-[1.55] mb-8 line-clamp-3">
                      {post.text}
                    </p>

                    <div className="mt-auto flex items-center gap-1 text-[#26262b] font-[Gilroy,sans-serif] text-[16px] font-medium transition-colors group-hover:text-[#e61a66]">
                      Читать дальше
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 transition-transform duration-300 group-hover:translate-x-1">
                        <path d="M1 7H13M13 7L9 3M13 7L9 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
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

      <Footer />
    </main>
  )
}
