import { Book } from '.'

let book

beforeEach(async () => {
  book = await Book.create({ author: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = book.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(book.id)
    expect(view.author).toBe(book.author)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = book.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(book.id)
    expect(view.author).toBe(book.author)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
