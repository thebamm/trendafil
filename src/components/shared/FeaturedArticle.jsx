import React from 'react'
import { getPostUrl, getReadTime } from '@/lib/utils'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import Link from 'next/link'

const FeaturedArticle = ({ featured }) => {
  const readTime = getReadTime(featured.body)

  return (
    <Link
      href={getPostUrl(featured)}
      className='group fade-up lg:col-span-2'
    >
      <div className='relative aspect-[16/10] overflow-hidden rounded-xl bg-muted shadow-card'>
        {featured.mainImage && (
          <Image
            src={urlFor(featured.mainImage).width(800).height(400).url()}
            alt={featured.mainImage.alt || featured.title}
            width={1600}
            height={1024}
            className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]'
            loading='eager'
          />
        )}
        <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent' />
        <div className='absolute inset-x-0 bottom-0 p-6 md:p-10'>
                <span className='inline-block rounded-sm bg-brand px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-foreground'>
                  {featured.categories &&
                    featured.categories.map((cat) => (
                        <span key={cat._id}>
                        {cat?.title}
                      </span>
                      )
                    )}
                </span>
          <h1 className='mt-4 max-w-3xl font-display text-2xl font-black leading-[1.05] text-white text-balance md:text-5xl'>
            {featured.title}
          </h1>
          <p className='mt-4 hidden max-w-2xl text-base text-white/85 md:block'>
            {featured.excerpt}
          </p>
          <div className='mt-5 flex items-center gap-3 text-xs text-white/70'>
            {featured.author && <span className='font-medium text-white'>{featured.author.name}</span>}
            <span>·</span>
            <span>{featured.publishedAt && (
              <time>{new Date(featured.publishedAt).toLocaleDateString()}</time>
            )}</span>
            <span>·</span>
            <span>{readTime} min read</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default FeaturedArticle
