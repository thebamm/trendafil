import React from 'react'
import ArticleCard from '@/components/shared/ArticleCard'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const CategorySection = ({ category }) => {
  return (
    <section className="mt-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="border-l-4 border-brand pl-3 text-2xl font-bold">{category.title}</h2>

        <Link
          href={`/sections/${category.slug.current}`}
          className="text-sm text-brand hover:underline flex items-center"
        >
          Сите статии <ArrowRight size={14} />
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {category.posts.map((post) => (
          <ArticleCard key={post._id} article={post} />
        ))}
      </div>
    </section>
  )
}

export default CategorySection
