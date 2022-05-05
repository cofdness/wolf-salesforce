import jsForce from 'jsforce'
import { salesforceUser, salesforcePassword, salesforceClientId, salesforceClientSecret, salesforceLoginUrl, salesforceRedirectUrl } from '../../config'

const jsForceConnect = async () => {
    const connect = new jsForce.Connection({
        oauth2: {
            loginUrl: salesforceLoginUrl,
            clientId: salesforceClientId,
            clientSecret: salesforceClientSecret,
            redirectUri: salesforceRedirectUrl
        }
    })

    try {
        await connect.login(salesforceUser, salesforcePassword)
        console.log(connect.accessToken)
        console.log(connect.instanceUrl)
        return {
            accessToken: connect.accessToken,
            instanceUrl: connect.instanceUrl
        }
    }
    catch (error){
        console.log(error)
        return {error}
    }

}

export default jsForceConnect


