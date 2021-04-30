import service from '../../services'

const RegisterService = async (
    payload,
    onfetching,
    onsuccess,
    onfailure,
    trans
) => {
    onfetching()
    let result = false
    try {
        result = await service.post(
            '/registration/email?include=token',
            payload
        )
    } catch (error) {
        let errorsString = ''
        const { inferedMsg } = error
        if (inferedMsg) {
            errorsString = trans(inferedMsg)
        }
        onfailure(errorsString)
    }
    if (result) {
        onsuccess(result)
    }
}
const LoginService = async (
    payload,
    onfetching,
    onsuccess,
    onfailure,
    trans
) => {
    onfetching()
    let result = false
    try {
        result = await service.post('/login/email?include=token', payload)
    } catch (error) {
        let errorsString = ''
        const { inferedMsg } = error
        if (inferedMsg) {
            errorsString = trans(inferedMsg)
        }
        onfailure(errorsString)
    }
    if (result) {
        onsuccess(result)
    }
}
export { RegisterService, LoginService }
