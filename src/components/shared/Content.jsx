import React from 'react'
import { urlFor } from '@/lib/sanity'
import Image from 'next/image'
import { PortableText } from 'next-sanity'

const components = {
  // Custom block styles
  block: {
    h1: ({ children }) => <h1 className="text-4xl font-bold mt-4 mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold mt-6 mb-3">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold mt-4 mb-2">{children}</h3>,
    normal: ({ children }) => <p className="my-4 leading-relaxed">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-4 border-brand bg-secondary/40 p-6 font-display text-2xl font-semibold italic leading-snug text-balance">
        {children}
      </blockquote>
    ),
  },

  // Lists
  list: {
    bullet: ({ children }) => <ul className="list-disc ml-6 my-4">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal ml-6 my-4">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-1">{children}</li>,
    number: ({ children }) => <li className="mb-1">{children}</li>,
  },

  // Bold, italic, links etc
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => (
    <a
      href={value.href}
      target={value.href.startsWith('http') ? '_blank' : '_self'}
      rel="noopener noreferrer"
      className="underline text-blue-600 hover:text-blue-800"
    >
      {children}
    </a>
    ),
  },

  // Images inside body content
  types: {
    image: ({ value }) => (
      <Image
        src={urlFor(value).width(800).url()}
        alt={value.alt || ''}
        width={800}
        height={500}
        className="my-6 rounded"
      />
    ),
  },
}

const Content = ({ value }) => {
  return <PortableText value={value} components={components} />
}

export default Content
