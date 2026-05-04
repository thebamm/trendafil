import { client } from '@/sanity/lib/client'
import { urlFor } from '@/lib/sanity'
import { allPostsQuery, postBySlugQuery, relatedPostsQuery } from '@/lib/queries'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import AdSlot from '@/components/shared/AdSlot'
import Link from 'next/link'
import React from 'react'
import ArticleCard from '@/components/shared/ArticleCard'
import { getReadTime } from '@/lib/utils'
import Content from '@/components/shared/Content'

export async function generateStaticParams() {
  const posts = await client.fetch(allPostsQuery)

  return posts
    .filter((post) => post.publishedAt && post.slug?.current && post.category)
    .map((post) => {
      const date = new Date(post.publishedAt)
      return {
        category: post.category.slug.current,
        year: String(date.getFullYear()),
        month: String(date.getMonth() + 1).padStart(2, '0'),
        day: String(date.getDate()).padStart(2, '0'),
        slug: post.slug.current,
      }
    })
}

export async function generateMetadata({ params }) {
  const { postSlug } = await params
  const post = await client.fetch(postBySlugQuery, { slug: postSlug })

  return {
    title: post.seo?.metaTitle || post.title,
    description: post.seo?.metaDescription || post.excerpt,
    robots: post.seo?.noIndex ? 'noindex' : 'index, follow',
    openGraph: {
      title: post.seo?.metaTitle || post.title,
      description: post.seo?.metaDescription || post.excerpt,
      images: post.seo?.ogImage
        ? [{ url: post.seo.ogImage }]
        : post.mainImage
          ? [{ url: urlFor(post.mainImage).width(1200).height(630).url() }]
          : [],
    },
  }
}

export default async function ArticlePage({ params }) {
  const { postSlug } = await params

  const article = await client.fetch(postBySlugQuery, { slug: postSlug }, { next: { revalidate: 60 } })

  if (!article) notFound()

  const readTime = getReadTime(article.body)

  const relatedPosts = await client.fetch(relatedPostsQuery, {
    slug: postSlug,
    categoryId: article.category._id,
  })

  return (
    <>
      <article>
        <header className='border-b border-border'>
          <div className='mx-auto max-w-3xl px-4 pt-12 pb-8'>
            {article.category && (
              <div className='flex gap-2'>
                <Link
                  href={`/sections/${article.category.slug.current}`}
                  className='text-xs font-bold uppercase tracking-widest text-brand hover:underline'
                >
                  {article.category.title}
                </Link>
              </div>
            )}

            <h1 className='mt-3 font-display text-4xl font-black leading-[1.05] text-balance md:text-5xl lg:text-6xl'>
              {article.title}
            </h1>
            <p className='mt-5 text-lg text-muted-foreground text-balance'>
              {article.excerpt}
            </p>
            <div className='mt-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground'>
              {article.author && (
                <div className='flex items-center gap-2'>
                  <span className='flex h-9 w-9 items-center justify-center rounded-full bg-brand text-brand-foreground font-bold'>
                    {article.author.name.split(' ').map((n) => n[0]).join('')}
                  </span>

                  <span className='font-semibold text-foreground'>{article.author.name}</span>
                </div>
              )}

              <span>·</span>
              {article.publishedAt && (
                <span><time>{new Date(article.publishedAt).toLocaleDateString()}</time></span>
              )}
              <span>·</span>
              <span>{`${readTime} ${readTime === 1 ? 'минута' : 'минути'} читање`}</span>
            </div>
          </div>

          {article.mainImage && (
            <div className='mx-auto max-w-5xl px-4 pb-10'>
              <div className='aspect-[16/9] overflow-hidden rounded-xl bg-muted shadow-card'>
                <Image
                  src={urlFor(article.mainImage).width(800).height(400).url()}
                  alt={article.mainImage.alt || article.title}
                  width={800}
                  height={400}
                  className='h-full w-full object-cover'
                  loading='eager'
                />
              </div>
            </div>)}
        </header>

        {/* Body */}
        <div className='mx-auto grid max-w-6xl gap-12 px-4 py-12 lg:grid-cols-[1fr_300px]'>
          <div className='prose-styles max-w-none text-[17px] leading-[1.75] text-foreground/90'>
            <p className='first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-7xl first-letter:font-black first-letter:leading-[0.85] first-letter:text-brand'>
              {article.excerpt}
            </p>

            <Content value={article.body} />

            <div className='mt-10'>
              <AdSlot size='inline' label='Sponsored' />
            </div>
          </div>

          <aside className='space-y-6'>
            <div className='sticky top-28 space-y-6'>
              <AdSlot size='rectangle' />
              <div className='rounded-lg border border-border bg-card p-5'>
                <h4 className='font-display text-lg font-bold'>Повеќе за читање</h4>
                <div className='mt-4 space-y-4'>
                  {relatedPosts?.map((a) => (
                    <ArticleCard key={a._id} article={a} variant='compact' />
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </article>

      <div className='mx-auto max-w-7xl px-4'>
        <AdSlot size='billboard' />
      </div>
    </>
  )
}
