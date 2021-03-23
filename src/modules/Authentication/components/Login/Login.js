import React from 'react'
import { Button, Form, Input } from 'antd'
import logo from '../../../../assets/images/logo.png'
import { LockOutlined, UserOutlined } from '@ant-design/icons'

const Login = (props) => {
    return (
        <div className="login-wrapper">
            <Form name="loginForm">
                <div className='logo'>
                    <img src={logo} alt="dolphin logo"/>
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
                    />
                </Form.Item>
                <Form.Item rules={[
                    { required: true, message: 'Please enter your password' },
                ]} name="password">
                    <Input.Password prefix={<LockOutlined />} placeholder="Password" size="large" />
                </Form.Item>
                <Form.Item>
                    <Button block type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Login
