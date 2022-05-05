import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { ZaloUser } from '.'

const app = () => express(apiRoot, routes)

let zaloUser

beforeEach(async () => {
  zaloUser = await ZaloUser.create({})
})

test('POST /zaloUsers 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ name: 'test', phone: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
  expect(body.phone).toEqual('test')
})

test('GET /zaloUsers 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /zaloUsers/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${zaloUser.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(zaloUser.id)
})

test('GET /zaloUsers/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /zaloUsers/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${zaloUser.id}`)
    .send({ name: 'test', phone: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(zaloUser.id)
  expect(body.name).toEqual('test')
  expect(body.phone).toEqual('test')
})

test('PUT /zaloUsers/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ name: 'test', phone: 'test' })
  expect(status).toBe(404)
})

test('DELETE /zaloUsers/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${zaloUser.id}`)
  expect(status).toBe(204)
})

test('DELETE /zaloUsers/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
