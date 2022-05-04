import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Book } from '.'

const app = () => express(apiRoot, routes)

let book

beforeEach(async () => {
  book = await Book.create({})
})

test('POST /books 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ author: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.author).toEqual('test')
})

test('GET /books 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /books/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${book.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(book.id)
})

test('GET /books/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /books/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${book.id}`)
    .send({ author: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(book.id)
  expect(body.author).toEqual('test')
})

test('PUT /books/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ author: 'test' })
  expect(status).toBe(404)
})

test('DELETE /books/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${book.id}`)
  expect(status).toBe(204)
})

test('DELETE /books/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
