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
        payload = {
            ...payload,
            client_id: process.env.REACT_APP_CLIENT_ID,
            client_secret: process.env.REACT_APP_CLIENT_SECRET,
        }
        result = await service.post(
            '/registration/email?include=token',
            payload
        )
    } catch (error) {
        let errorsString = ''
        const { response } = error
        if (response) {
            const { data } = response
            if (data) {
                const { errors } = data
                if (errors.email) {
                    errorsString += errors.email.join('<br/>')
                }
                if (errors.password) {
                    errorsString += errors.password.join('<br/>')
                }
            }
        }
        if (errorsString == '') {
            errorsString = trans('Something Went Wrong')
        }
        onfailure(errorsString)
    }
    if (result) {
        const { data } = result
        if (data && data.data) {
            const { token } = data.data
            localStorage.setItem('token', JSON.stringify(token))
        }
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
        payload = {
            ...payload,
            client_id: process.env.REACT_APP_CLIENT_ID,
            client_secret: process.env.REACT_APP_CLIENT_SECRET,
        }
        result = await service.post('/login/email?include=token', payload)
    } catch (error) {
        let errorsString = ''
        const { response } = error
        if (response) {
            const { data } = response
            if (data) {
                const { exception } = data
                if (
                    exception &&
                    exception.includes('InvalidLoginCredentials')
                ) {
                    errorsString += trans('Invalid User Or Password')
                }
            }
        }
        if (errorsString == '') {
            errorsString = trans('Something Went Wrong')
        }
        onfailure(errorsString)
    }
    if (result) {
        const { data } = result
        if (data && data.data) {
            const { token } = data.data
            localStorage.setItem('token', JSON.stringify(token))
        }
        onsuccess(result)
    }
}
export { RegisterService, LoginService }
