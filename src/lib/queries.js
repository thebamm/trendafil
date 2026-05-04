import { groq } from 'next-sanity'

export const categoriesQuery = groq`
  *[_type == "category"] | order(orderRank asc) {
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

export const topStoriesQuery = groq`
  *[_type == "topStories"][0] {
    posts[]-> {
      _id,
      title,
      slug,
      body,
      publishedAt,
      excerpt,
      "mainImage": mainImage{ asset->, alt },
      "author": author->{ name, slug },
      "category": category->{ _id, title, slug }
    }
  }
`

export const postsByCategoryQuery = groq`
  *[_type == "post" && category->slug.current == $slug] | order(publishedAt desc) {
    _id,
    title,
    slug,
    body,
    publishedAt,
    "author": author->{ name, slug },
    "mainImage": mainImage{ asset->, alt },
    "category": category->{ _id, title, slug }
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
    "category": category->{ _id, title, slug }
  }
`

export const allPostsQuery = groq`
  *[_type == "post"] {
    slug,
    publishedAt,
    "category": category->{ slug }
  }
`

export const relatedPostsQuery = groq`
  *[
    _type == "post" &&
    slug.current != $slug &&
    category._ref == $categoryId
  ] | order(publishedAt desc) [0..2] {
    _id,
    title,
    body,
    slug,
    publishedAt,
    excerpt,
    "mainImage": mainImage{ asset->, alt },
    "category": category->{ _id, title, slug }
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
    "category": category->{ _id, title, slug }
  }
`

export const categoriesWithPostsQuery = groq`
  *[_type == "category"] {
    _id,
    title,
    slug,
    "posts": *[
      _type == "post" &&
      category._ref == ^._id &&
      !(_id in $excludeIds)
    ] | order(publishedAt desc) [0...4] {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      body,
      "author": author->{ name, slug },
      "mainImage": mainImage{ asset->, alt },
      "category": category->{ _id, title, slug }
    }
  }
`
