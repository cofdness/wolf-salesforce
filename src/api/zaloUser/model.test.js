import { ZaloUser } from '.'

let zaloUser

beforeEach(async () => {
  zaloUser = await ZaloUser.create({ name: 'test', phone: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = zaloUser.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(zaloUser.id)
    expect(view.name).toBe(zaloUser.name)
    expect(view.phone).toBe(zaloUser.phone)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = zaloUser.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(zaloUser.id)
    expect(view.name).toBe(zaloUser.name)
    expect(view.phone).toBe(zaloUser.phone)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
