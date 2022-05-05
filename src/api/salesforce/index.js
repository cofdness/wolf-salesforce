import {Router} from "express";
import qs from 'qs'
import jsForceConnect from "../../services/jsforce";

import { salesforceUser, salesforcePassword, salesforceClientId, salesforceClientSecret, salesforceLoginUrl } from '../../config'

import {default as axios} from "axios"
import jsForce from "jsforce";
const router = new Router()

router.get('/token', async (req, res, next) => {
    try {
        const url = salesforceLoginUrl
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

router.post('/login', async (req, res, next) => {
    const loginInfo = await jsForceConnect()
    console.log(loginInfo)
    res.status(200).json(loginInfo)
})

router.get('/callback',  (req, res, next) => {
    var conn = new jsForce.Connection({oauth2: oauth2});
    var code = req.param('code');
    conn.authorize(code, function (err, userInfo) {
        if (err) {
            return console.error(err);
        }
        // Now you can get the access token, refresh token, and instance URL information.
        // Save them to establish connection next time.
        console.log(conn.accessToken);
        console.log(conn.refreshToken);
        console.log(conn.instanceUrl);
        console.log("User ID: " + userInfo.id);
        console.log("Org ID: " + userInfo.organizationId);
        // ...
        res.send('success'); // or your desir
    })
})

// router.get('/book', async (req, res, next) => {
//     const instanceUrl = req.body.instanceUrl
//     const accessToken = req.body.accessToken
//     const connect = new jsForce.Connection({
//         instanceUrl,
//         accessToken
//     })
//     try {
//         const query = await connect.query("SELECT Id, Price__c FROM Book__c")
//         console.log(query)
//         return res.status(200).json({
//             success: true,
//             data: query
//         })
//     }catch (error) {
//         console.log(error)
//         return res.status(404).json({
//             success: false
//         })
//     }
// })
//
// router.post('/book', async (req, res, next) => {
//
// })

export default router
