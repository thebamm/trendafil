import { defineArrayMember, defineField, defineType } from 'sanity'

export const topStoriesType = defineType({
  name: 'topStories',
  title: 'Top Stories',
  type: 'document',
  fields: [
    defineField({
      name: 'posts',
      title: 'Posts',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: { type: 'post' },
          options: {
            disableNew: true,
          },
        })
      ],
      validation: (Rule) => Rule.max(5), // limit to 5, adjust as needed
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Top Stories',
      }
    },
  },
})
