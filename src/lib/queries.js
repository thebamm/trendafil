import { groq } from 'next-sanity'

export const categoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    slug,
    description
  }
`

export const categoryBySlugQuery = groq`
  *[_type == "category" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description
  }
`

export const postsByCategoryQuery = groq`
  *[_type == "post" && references(*[_type == "category" && slug.current == $slug]._id)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    body,
    publishedAt,
    "author": author->{ name, slug },
    "mainImage": mainImage{ asset->, alt },
    "categories": categories[]->{ _id, title, slug }
  }
`

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    body,
    "seo": seo {
      metaTitle,
      metaDescription,
      "ogImage": ogImage.asset->url,
      noIndex
    },
    "author": author->{ name, slug },
    "mainImage": mainImage{ asset->, alt },
    "categories": categories[]->{ _id, title, slug }
  }
`

export const allPostsQuery = groq`
  *[_type == "post"] {
    slug,
    publishedAt,
    "categories": categories[]->{ slug }
  }
`
export const relatedPostsQuery = groq`
  *[
    _type == "post" &&
    slug.current != $slug &&
    references(*[_type == "category" && _id in $categoryIds]._id)
  ] | order(publishedAt desc) [0..2] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    "mainImage": mainImage{ asset->, alt },
    "categories": categories[]->{ _id, title, slug }
  }
`
export const latestPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) [0...5] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    body,
    "author": author->{ name, slug },
    "mainImage": mainImage{ asset->, alt },
    "categories": categories[]->{ _id, title, slug }
  }
`
