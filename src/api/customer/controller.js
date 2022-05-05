import { success, notFound } from '../../services/response/'

import jsForce from "jsforce";

export const create = async ({ bodymen: { body } }, res, next) => {
    console.log(body)
    return res.status(200).json({
        success: true
    })
}

export const index = async (req, res, next) => {

}

export const show = async (req, res, next) => {

}

export const update = async (req, res, next) => {

}

export const destroy = async (req, res, next) => {

}
