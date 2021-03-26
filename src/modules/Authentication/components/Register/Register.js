import React, { useState } from 'react'
import { Button, Form, Input, Alert } from 'antd'
import logo from '../../../../assets/images/logo.png'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
const validatePassword = (rule, value, callback) => {
    console.log(value)
    if (value && value !== 'Secret') {
        callback('Error!')
    } else {
        callback()
    }
}

const Register = (props) => {
    const [formData, setFormData] = useState({
        password: '',
        repassword: '',
        username: '',
        email: '',
    })
    const [isMatched, setPasswordMatch] = useState(true)

    const doRegister = () => {
        console.log(formData)
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
    const { switchToLogin } = props
    return (
        <div className="register-wrapper">
            <Form name="registerForm">
                <div className="logo">
                    <img src={logo} alt="dolphin logo" />
                </div>
                <Form.Item
                    rules={[
                        { required: true, message: 'Please enter your email' },
                    ]}
                    name="email"
                >
                    <Input
                        prefix={<UserOutlined />}
                        size="large"
                        placeholder="Email"
                        className="email-input"
                        onChange={onFormFieldChange}
                        name="email"
                    />
                </Form.Item>
                <Form.Item
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your user name',
                        },
                    ]}
                    name="username"
                >
                    <Input
                        name="username"
                        prefix={<UserOutlined />}
                        onChange={onFormFieldChange}
                        placeholder="User Name"
                        size="large"
                    />
                </Form.Item>
                <Form.Item
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your password',
                        },
                    ]}
                    name="password"
                >
                    <Input.Password
                        name="password"
                        onChange={onFormFieldChange}
                        prefix={<LockOutlined />}
                        placeholder="Password"
                        size="large"
                    />
                </Form.Item>
                <Form.Item
                    rules={[
                        {
                            required: true,
                            message: 'Please re-enter your password',
                        },
                    ]}
                    name="repassword"
                >
                    <Input.Password
                        name="repassword"
                        onChange={onFormFieldChange}
                        prefix={<LockOutlined />}
                        placeholder="Re-Enter Password"
                        size="large"
                    />
                </Form.Item>
                {!isMatched && (
                    <Form.Item>
                        <Alert message="Passwords Mismatch" type="error" />
                    </Form.Item>
                )}
                <Form.Item>
                    <Button
                        onClick={doRegister}
                        block
                        type="primary"
                        htmlType="submit"
                    >
                        Register
                    </Button>
                    <Button type="link" onClick={() => switchToLogin()}>
                        Already have An Account ? Login
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Register
