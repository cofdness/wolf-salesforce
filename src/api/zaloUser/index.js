import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export ZaloUser, { schema } from './model'

const router = new Router()
const { name, phone, accessToken, instanceUrl } = schema.tree

/**
 * @api {post} /zaloUsers Create zalo user
 * @apiName CreateZaloUser
 * @apiGroup ZaloUser
 * @apiParam name Zalo user's name.
 * @apiParam phone Zalo user's phone.
 * @apiParam accessToken
 * @apiParam instanceUrl
 * @apiSuccess {Object} zaloUser Zalo user's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Zalo user not found.
 */
router.post('/',
  // body({ name, phone }),
  create)

/**
 * @api {get} /zaloUsers Retrieve zalo users
 * @apiName RetrieveZaloUsers
 * @apiGroup ZaloUser
 * @apiParam accessToken
 * @apiParam instanceUrl
 * @apiSuccess {Object[]} zaloUsers List of zalo users.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  // query(),
  index)

/**
 * @api {get} /zaloUsers/:id Retrieve zalo user
 * @apiName RetrieveZaloUser
 * @apiGroup ZaloUser
 * @apiParam accessToken
 * @apiParam instanceUrl
 * @apiSuccess {Object} zaloUser Zalo user's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Zalo user not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /zaloUsers/:id Update zalo user
 * @apiName UpdateZaloUser
 * @apiGroup ZaloUser
 * @apiParam name Zalo user's name.
 * @apiParam phone Zalo user's phone.
 * @apiParam accessToken
 * @apiParam instanceUrl
 * @apiSuccess {Object} zaloUser Zalo user's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Zalo user not found.
 */
router.put('/:id',
  body({ name, phone, accessToken, instanceUrl }),
  update)

/**
 * @api {delete} /zaloUsers/:id Delete zalo user
 * @apiName DeleteZaloUser
 * @apiGroup ZaloUser
 * @apiParam accessToken
 * @apiParam instanceUrl
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Zalo user not found.
 */
router.delete('/:id',
  destroy)

export default router
