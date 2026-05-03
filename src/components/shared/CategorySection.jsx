import React from 'react'
import ArticleCard from '@/components/shared/ArticleCard'
import Link from 'next/link'

const CategorySection = ({ category }) => {
  return (
    <section className="mt-12">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">{category.title}</h2>
        <Link
          href={`/categories/${category.slug.current}`}
          className="text-sm text-blue-600 hover:underline"
        >
          See all articles →
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
