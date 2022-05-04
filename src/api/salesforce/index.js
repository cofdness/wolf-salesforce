import {Router} from "express";
import qs from 'qs'

import { salesforceUser, salesforcePassword, salesforceClientId, salesforceClientSecret } from '../../config'

import {default as axios} from "axios"
const router = new Router()

router.get('/token', async (req, res, next) => {
    try {
        const url = 'https://login.salesforce.com/services/oauth2/token'
        const data = qs.stringify({
            'grant_type': 'password',
            'client_id': salesforceClientId,
            'client_secret': salesforceClientSecret,
            'username': salesforceUser,
            'password': salesforcePassword
        });

        const config = {
            method: 'post',
            url,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cookie': 'BrowserId=jASzbMauEeyRtc3OTtj5BA; CookieConsentPolicy=0:0; LSKey-c$CookieConsentPolicy=0:0'
            },
            data
        };

        const getData = await axios(config)
        console.log(getData.data)
        return res.status(200).json(getData.data)

    } catch (error) {
        return res.status(400).json({
            error: 400
        })
    }
})

export default router
