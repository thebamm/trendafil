import { client } from '@/sanity/lib/client'
import { categoriesQuery, categoryBySlugQuery, postsByCategoryQuery } from '@/lib/queries'
import { notFound } from 'next/navigation'
import AdSlot from '@/components/shared/AdSlot'
import ArticleCard from '@/components/shared/ArticleCard'

// Pre-generate all category pages at build time
export async function generateStaticParams() {
  const categories = await client.fetch(categoriesQuery)
  return categories.map((cat) => ({ slug: cat.slug.current }))
}

export default async function CategoryPage({
  params,
}) {
  const { slug } = await params
  const category = await client.fetch(categoryBySlugQuery, { slug: slug }, { cache: 'force-cache' })
  const posts = await client.fetch(postsByCategoryQuery, { slug: slug }, { next: { revalidate: 60 } })

  if (!category) notFound()

  return (
    <main>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand">
            Section
          </span>
          <h1 className="mt-2 font-display text-5xl font-black md:text-6xl">
            {category.title}
          </h1>
          {category.description && (
            <p className="mt-3 max-w-xl text-muted-foreground">
              {category.description}
            </p>
          )}

        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 pt-8">
        <AdSlot size="leaderboard" />
      </div>

      <section className="mx-auto max-w-7xl px-4 py-12">
        {posts.length === 0 ? (
          <p className="text-muted-foreground">No stories yet — check back soon.</p>
        ) : (
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <ArticleCard key={post._id} article={post} />
            ))}
          </div>
        )}
      </section>
    </main>
  )
}
