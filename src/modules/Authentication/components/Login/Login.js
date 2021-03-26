import React from 'react'
import { Button, Form, Input } from 'antd'
import logo from '../../../../assets/images/logo.png'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'

const Login = (props) => {
    const { authentication } = props.currentResources
    const { switchToRegister } = props
    return (
        <div className="login-wrapper">
            <Form name="loginForm">
                <div className="logo">
                    <img src={logo} alt="dolphin logo" />
                </div>
                <Form.Item
                    rules={[
                        {
                            required: true,
                            message: authentication.emailRequired,
                        },
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
                <Form.Item
                    rules={[
                        {
                            required: true,
                            message: authentication.passwordRequired,
                        },
                    ]}
                    name="password"
                >
                    <Input.Password
                        prefix={<LockOutlined />}
                        placeholder="Password"
                        size="large"
                    />
                </Form.Item>
                <Form.Item>
                    <Button block type="primary" htmlType="submit">
                        {authentication.login}
                    </Button>
                    <Button type="link" onClick={() => switchToRegister()}>
                        New To Dolphin ? Register Now
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        currentResources: state.authReducer.currentResources,
    }
}

export default connect(mapStateToProps)(Login)
