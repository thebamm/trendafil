import AdSlot from '@/components/shared/AdSlot'
import { client } from '@/sanity/lib/client'
import { categoriesWithPostsQuery, latestPostsQuery } from '@/lib/queries'
import Link from 'next/link'
import { getPostUrl } from '@/lib/utils'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import React from 'react'
import ArticleCard from '@/components/shared/ArticleCard'
import FeaturedArticle from '@/components/shared/FeaturedArticle'
import CategorySection from '@/components/shared/CategorySection'

export const revalidate = 60

export default async function Home() {
  const latestPosts = await client.fetch(latestPostsQuery)

  // Extract IDs to exclude
  const excludeIds = latestPosts.map((p) => p._id)

  const categories = await client.fetch(categoriesWithPostsQuery, { excludeIds })

  // Optionally filter out categories that have no posts left after exclusion
  const categoriesWithPosts = categories.filter((cat) => cat.posts.length > 0)

  const [featured, ...rest] = latestPosts // split first from the rest

  return (
    <>
      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-3 lg:py-14">
          <FeaturedArticle featured={featured} />

          {/* Side rail */}
          <div className="flex flex-col gap-6 fade-up">
            <h2 className="border-l-4 border-brand pl-3 font-display text-sm font-bold uppercase tracking-widest">
              Top Stories
            </h2>
            <div className="flex flex-col divide-y divide-border">
              {rest.map((post) => (
                <div key={post._id} className="py-4 first:pt-0">
                  <ArticleCard article={post} variant="compact"/>
                </div>
              ))}
            </div>
            <AdSlot size="rectangle" />
          </div>
        </div>
      </section>

      {/* Leaderboard ad */}
      <div className="mx-auto max-w-7xl px-4 pt-8">
        <AdSlot size="leaderboard" />
      </div>

      {/* Latest grid */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand">
              Најново
            </span>
            <h2 className="mt-1 font-display text-3xl font-black md:text-4xl">
              Што го движи светот
            </h2>
          </div>
          {/*<Link*/}
          {/*  to="/category/$slug"*/}
          {/*  params={{ slug: "world" }}*/}
          {/*  className="hidden items-center gap-1 text-sm font-semibold text-foreground hover:text-brand sm:inline-flex"*/}
          {/*>*/}
          {/*  All stories <ArrowRight className="h-4 w-4" />*/}
          {/*</Link>*/}
        </div>

        {/* Categories sections */}
        {categoriesWithPosts.map((category) => (
          <CategorySection key={category._id} category={category} />
        ))}

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/*{rest.map((a, i) => (*/}
          {/*  <div key={a.slug} style={{ animationDelay: `${i * 60}ms` }} className="fade-up">*/}
          {/*    <ArticleCard article={a} />*/}
          {/*  </div>*/}
          {/*))}*/}
        </div>
      </section>

      {/* Brand band */}
      <section className="relative overflow-hidden bg-black text-primary-foreground">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-brand/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-16 md:grid-cols-2 md:items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand">
              Брифингот на ТРЕНДАФИЛ
            </span>
            <h3 className="mt-2 font-display text-3xl font-black leading-tight text-balance md:text-4xl">
              The day's news, distilled.<br/>In your inbox by 7am.
            </h3>
            <p className="mt-3 max-w-md text-sm text-primary-foreground/70">
              One email. Five stories. Zero filler. Join 240,000 readers who skip the noise.
            </p>
          </div>
          {/*<form*/}
          {/*  onSubmit={(e) => e.preventDefault()}*/}
          {/*  className="flex flex-col gap-3 sm:flex-row"*/}
          {/*>*/}
          {/*  <Input*/}
          {/*    type="email"*/}
          {/*    placeholder="your@email.com"*/}
          {/*    required*/}
          {/*    className="h-12 flex-1 border-white/20 bg-white/5 text-white placeholder:text-white/50"*/}
          {/*  />*/}
          {/*  <Button type="submit" className="h-12 bg-brand px-6 text-sm font-bold uppercase tracking-wider text-brand-foreground hover:bg-brand/90">*/}
          {/*    Subscribe*/}
          {/*  </Button>*/}
          {/*</form>*/}
        </div>
      </section>

      {/* Bottom ad */}
      <div className="mx-auto max-w-7xl px-4 pt-12">
        <AdSlot size="billboard" />
      </div>
    </>
  )
}
