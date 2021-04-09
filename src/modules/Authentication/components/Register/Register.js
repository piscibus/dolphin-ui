import React, { useState } from 'react'
import { Button, Form, Input, Alert } from 'antd'
import logo from '../../../../assets/images/logo.png'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { rules } from '../Login/_rules'
import localisation from '../../../../localisations'

const Register = (props) => {
    const local = localisation.Create()
    const { trans, getChangeLangDropDown } = local
    const [formData, setFormData] = useState({
        password: '',
        repassword: '',
        username: '',
        email: '',
    })
    const [isMatched, setPasswordMatch] = useState(true)

    const doRegister = () => {
        if (formData.password !== formData.repassword) {
            setPasswordMatch(false)
        }
        //fetch/axios to api
    }
    const onFormFieldChange = (event) => {
        const target = event.target
        const value = target.value
        const name = target.name
        formData[name] = value
        setFormData(formData)
    }

    return (
        <div className="auth-wrapper">
            <div className="auth-holder">
                <Form name="registerForm">
                    <div className="logo">
                        <img src={logo} alt="dolphin logo" />
                    </div>
                    <Form.Item rules={rules('en').email} name="email">
                        <Input
                            prefix={<UserOutlined />}
                            size="large"
                            placeholder={trans('register.Email')}
                            className="email-input"
                            onChange={onFormFieldChange}
                            name="email"
                        />
                    </Form.Item>
                    <Form.Item rules={rules('en').password} name="password">
                        <Input.Password
                            name="password"
                            onChange={onFormFieldChange}
                            prefix={<LockOutlined />}
                            placeholder={trans('register.Password')}
                            size="large"
                        />
                    </Form.Item>
                    <Form.Item rules={rules('en').password} name="repassword">
                        <Input.Password
                            name="repassword"
                            onChange={onFormFieldChange}
                            prefix={<LockOutlined />}
                            placeholder={trans('register.rePassword')}
                            size="large"
                        />
                    </Form.Item>
                    {!isMatched && (
                        <Form.Item>
                            <Alert
                                message={trans('register.wrongPass')}
                                type="error"
                            />
                        </Form.Item>
                    )}
                    <Form.Item>
                        <Button
                            onClick={doRegister}
                            block
                            type="primary"
                            htmlType="submit"
                        >
                            {trans('register.Register')}
                        </Button>
                        <Button
                            type="link"
                            onClick={() => {
                                props.history.push('/login')
                            }}
                        >
                            {trans('register.Login')}
                        </Button>
                    </Form.Item>
                    {getChangeLangDropDown()}
                </Form>
            </div>
        </div>
    )
}

export default Register
