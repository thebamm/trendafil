// https://www.sanity.io/docs/structure-builder-cheat-sheet
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'

export const structure = (S, context) =>
  S.list()
    .title('Blog')
    .items([
      S.listItem()
        .title('Top Stories')
        .child(
          S.document()
            .schemaType('topStories')
            .documentId('topStories') // fixed ID = singleton
        ),
      S.documentTypeListItem('post').title('Posts'),
      orderableDocumentListDeskItem({ type: 'category', title: 'Categories', S, context }),
      S.documentTypeListItem('author').title('Authors'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['post', 'category', 'author', 'topStories'].includes(item.getId()),
      ),
    ])
