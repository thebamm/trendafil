import { client } from '@/sanity/lib/client'
import { categoriesQuery } from '@/lib/queries'
import imageUrlBuilder from '@sanity/image-url'

export async function getCategories() {
  return await client.fetch(categoriesQuery)
}

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}
