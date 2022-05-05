import { success, notFound } from '../../services/response/'
import jsForce from "jsforce";

export const create = async (req, res, next) => {
    const phone = req.body.phone
    const name = req.body.name
    const instanceUrl = req.body.instanceUrl
    const accessToken = req.body.accessToken

    const connect = new jsForce.Connection({
        instanceUrl,
        accessToken
    })
    try {
        const result = await connect.sobject("ZaloUser__c").create({
            Name__c: name,
            Phone__c: phone
        })
        return res.status(200).json(result)
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            success: false
        })
    }


}

export const index = async (req, res, next) => {
    const instanceUrl = req.body.instanceUrl
    const accessToken = req.body.accessToken
    const connect = new jsForce.Connection({
        instanceUrl,
        accessToken
    })
    try {
        const result = await connect.query("SELECT Id, Phone__c, Name__c FROM ZaloUser__c")
        console.log(result)
        return res.status(200).json({
            success: true,
            data: result
        })
    }catch (error) {
        console.log(error)
        return res.status(404).json({
            success: false
        })
    }

}

export const show = async (req, res, next) => {
    const instanceUrl = req.body.instanceUrl
    const accessToken = req.body.accessToken
    const Id = req.params.id
    const connect = new jsForce.Connection({
        instanceUrl,
        accessToken
    })
    try {
        const result = await connect.sobject("ZaloUser__c").find({
            Id
        })
        return res.status(200).json({
            success: true,
            data: result
        })
    } catch (error) {
        console.log(error)
        return res.status(404).json({
            success: false
        })
    }

}

export const update = async (req, res, next) => {
    const name = req.body.name
    const phone = req.body.phone
    const instanceUrl = req.body.instanceUrl
    const accessToken = req.body.accessToken
    const Id = req.params.id
    const connect = new jsForce.Connection({
        instanceUrl,
        accessToken
    })
    try {
        const result = await connect.sobject("ZaloUser__c").update({
            Id,
            Name__c: name,
            Phone__c: phone
        })
        return res.status(200).json({
            success: true,
            data: result
        })
    } catch (error) {
        console.log(error)
        return res.status(404).json({
            success: false
        })
    }

}

export const destroy = async (req, res, next) => {
    const instanceUrl = req.body.instanceUrl
    const accessToken = req.body.accessToken
    const Id = req.params.id
    const connect = new jsForce.Connection({
        instanceUrl,
        accessToken
    })
    try {
        const result = await connect.sobject("ZaloUser__c").destroy(Id)
        return res.status(200).json({
            success: true,
            data: result
        })
    } catch (error) {
        console.log(error)
        return res.status(404).json({
            success: false
        })
    }
}
