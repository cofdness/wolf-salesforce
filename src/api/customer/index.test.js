import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Customer } from '.'

const app = () => express(apiRoot, routes)

let customer

beforeEach(async () => {
  customer = await Customer.create({})
})

test('POST /customers 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ name: 'test', phone: 'test', nickname: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
  expect(body.phone).toEqual('test')
  expect(body.nickname).toEqual('test')
})

test('GET /customers 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /customers/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${customer.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(customer.id)
})

test('GET /customers/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /customers/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${customer.id}`)
    .send({ name: 'test', phone: 'test', nickname: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(customer.id)
  expect(body.name).toEqual('test')
  expect(body.phone).toEqual('test')
  expect(body.nickname).toEqual('test')
})

test('PUT /customers/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ name: 'test', phone: 'test', nickname: 'test' })
  expect(status).toBe(404)
})

test('DELETE /customers/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${customer.id}`)
  expect(status).toBe(204)
})

test('DELETE /customers/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
