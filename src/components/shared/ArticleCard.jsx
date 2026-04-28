import React from 'react'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import { getPostUrl, getReadTime } from '@/lib/utils'

const ArticleCard = ({ article, variant = "default" }) => {
  const readTime = getReadTime(article.body)

  if (variant === "compact") {
    return (
      <Link
        href={getPostUrl(article)}
        className="group flex gap-4"
      >
        {article.mainImage && (
          <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-md bg-muted">
            <Image
              src={urlFor(article.mainImage).width(800).height(400).url()}
              alt={article.mainImage.alt || article.title}
              width={800}
              height={400}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}

        <div className="min-w-0 flex-1">
          {article.categories &&
            article.categories.map((cat) => (
              <span key={cat._id} className="text-[10px] font-bold uppercase tracking-widest text-brand">
                {cat?.title}
              </span>
              )
            )}

          <h4 className="mt-1 line-clamp-3 text-sm font-semibold leading-snug text-foreground transition-colors group-hover:text-brand">
            {article.title}
          </h4>

          <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
            <span>{readTime} min read</span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={getPostUrl(article)}
      className="group block"
    >
      <Card className="overflow-hidden border-border/60 shadow-none transition-shadow hover:shadow-card gap-0 py-0">
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          {article.mainImage && (
            <Image
              src={urlFor(article.mainImage).width(800).height(400).url()}
              alt={article.mainImage.alt || article.title}
              width={800}
              height={400}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
          )}

          {article.categories &&
            <div className='absolute left-3 top-3 flex gap-2'>
            {article.categories.map((cat) => (
                <Badge key={cat._id} className="rounded-sm bg-brand px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-brand-foreground hover:bg-brand">
                  {cat.title}
                </Badge>
              )
            )}
            </div>
          }
        </div>

        <CardContent className="p-5">
          <h3 className="font-display text-xl font-bold leading-tight text-balance transition-colors group-hover:text-brand">
            {article.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
            {article?.excerpt}
          </p>
          <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
            {article.author && <span className="font-medium text-foreground/80">{article.author.name}</span>}
            <span>·</span>
            <span>{article.publishedAt && (
              <time>{new Date(article.publishedAt).toLocaleDateString()}</time>
            )}</span>
            <span>·</span>
            <span>{readTime} min read</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

export default ArticleCard
