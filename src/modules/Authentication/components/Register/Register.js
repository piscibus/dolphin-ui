import React, { useState } from 'react'
import { Button, Form, Input, message } from 'antd'
import logo from '../../../../assets/images/logo.png'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Rules } from './_rules'
import localisation from '../../../../localisations'
import { RegisterService } from '../../services'
const Register = (props) => {
    const local = localisation.Create()
    const { trans, getChangeLangDropDown } = local
    const [form] = Form.useForm()
    const [requestStatus, setRequestStatus] = useState({
        fetch: false,
        success: false,
        failure: false,
    })
    const doRegister = (formData) => {
        if (formData.password !== formData.repassword) {
            message.error(trans('wrongPass'))
            return
        }
        //console.log(RegisterServices);
        //fetch/axios to api
        const payload = { email: formData.email, password: formData.password }
        const onfetch = () => {
            setRequestStatus({
                ...requestStatus,
                fetch: true,
                success: false,
                failure: false,
            })
        }
        const onsuccess = (response) => {
            setRequestStatus({
                ...requestStatus,
                fetch: false,
                success: true,
                failure: false,
            })
            message.success(trans('Registerd Successfully'))
            form.resetFields()
        }
        const onfailure = (response) => {
            setRequestStatus({
                ...requestStatus,
                fetch: false,
                success: false,
                failure: true,
            })
            message.error(response)
        }
        RegisterService(payload, onfetch, onsuccess, onfailure, trans)
    }

    const { switchToLogin } = props
    const { fetch, success, failure } = requestStatus
    return (
        <div className="auth-holder">
            <Form name="registerForm" onFinish={doRegister} form={form}>
                <div className="logo">
                    <img src={logo} alt="dolphin logo" />
                </div>
                <Form.Item rules={Rules().email} name="email">
                    <Input
                        disabled={fetch}
                        prefix={<UserOutlined />}
                        size="large"
                        placeholder={trans('Email')}
                        className="email-input"
                        name="email"
                    />
                </Form.Item>
                <Form.Item rules={Rules().password} name="password">
                    <Input.Password
                        disabled={fetch}
                        name="password"
                        prefix={<LockOutlined />}
                        placeholder={trans('Password')}
                        size="large"
                    />
                </Form.Item>
                <Form.Item rules={Rules().password} name="repassword">
                    <Input.Password
                        disabled={fetch}
                        name="repassword"
                        prefix={<LockOutlined />}
                        placeholder={trans('rePassword')}
                        size="large"
                    />
                </Form.Item>
                <Form.Item>
                    <Button
                        loading={fetch}
                        disabled={fetch}
                        block
                        type="primary"
                        htmlType="submit"
                    >
                        {trans('Register')}
                    </Button>
                    <Button type="link" onClick={() => switchToLogin()}>
                        {trans('Already Have An Account')}
                    </Button>
                </Form.Item>
                {getChangeLangDropDown()}
            </Form>
        </div>
    )
}

export default Register
