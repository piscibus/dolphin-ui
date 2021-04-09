import React, { useState } from 'react'
import { Button, Form, Input, Alert, message, Space } from 'antd'
import logo from '../../../../assets/images/logo.png'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Rules } from './_rules'
import localisation from '../../../../localisations'
import { RegisterService } from '../../services'
const Register = (props) => {
    const local = localisation.Create()
    const { trans, getChangeLangDropDown } = local
    const [form] = Form.useForm()
    const [formData, setFormData] = useState({
        password: '',
        repassword: '',
        email: '',
    })
    const [requestStatus, setRequestStatus] = useState({
        fetch: false,
        success: false,
        failure: false,
    })
    const doRegister = () => {
        let errorCount = 0
        if (formData.password !== formData.repassword) {
            message.error(trans('wrongPass'))
            errorCount += 1
        }
        if (
            formData.email.length === 0 ||
            formData.password.length === 0 ||
            formData.repassword.length === 0
        ) {
            errorCount += 1
        }
        if (errorCount > 0) {
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
            setFormData({
                password: '',
                repassword: '',
                email: '',
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
    const onFormFieldChange = (event) => {
        const target = event.target
        const value = target.value
        const name = target.name
        formData[name] = value
        setFormData(formData)
    }
    const { switchToLogin } = props
    const { fetch, success, failure } = requestStatus
    return (
        <div className="auth-holder">
            <Form name="registerForm" form={form}>
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
                        onChange={onFormFieldChange}
                        name="email"
                    />
                </Form.Item>
                <Form.Item rules={Rules().password} name="password">
                    <Input.Password
                        disabled={fetch}
                        name="password"
                        onChange={onFormFieldChange}
                        prefix={<LockOutlined />}
                        placeholder={trans('Password')}
                        size="large"
                    />
                </Form.Item>
                <Form.Item rules={Rules().password} name="repassword">
                    <Input.Password
                        disabled={fetch}
                        name="repassword"
                        onChange={onFormFieldChange}
                        prefix={<LockOutlined />}
                        placeholder={trans('rePassword')}
                        size="large"
                    />
                </Form.Item>
                <Form.Item>
                    <Button
                        loading={fetch}
                        disabled={fetch}
                        onClick={doRegister}
                        block
                        type="primary"
                        htmlType="submit"
                    >
                        {trans('Register')}
                    </Button>
                    <Button type="link" onClick={() => switchToLogin()}>
                        {trans('Login')}
                    </Button>
                </Form.Item>
                {getChangeLangDropDown()}
            </Form>
        </div>
    )
}

export default Register
