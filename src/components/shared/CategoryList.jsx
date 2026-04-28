import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { categoriesQuery } from '@/lib/queries'

export async function CategoryList() {
  const categories = await client.fetch(categoriesQuery)

  return (
    <ul>
      {categories.map((cat) => (
        <li key={cat._id}>
          <Link href={`/categories/${cat.slug.current}`}>
            {cat.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}
