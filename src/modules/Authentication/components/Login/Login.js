import React from 'react'
import { Button, Form, Input } from 'antd'
import logo from '../../../../assets/images/logo.png'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'
import { rules } from './_rules'

const Login = (props) => {
    const { authentication } = props.currentResources
    return (
        <div className="auth-wrapper">
            <div className="auth-holder">
                <Form name="loginForm">
                    <div className="logo">
                        <img src={logo} alt="dolphin logo" />
                    </div>
                    <Form.Item rules={rules('en').email} name="email">
                        <Input
                            prefix={<UserOutlined />}
                            size="large"
                            placeholder="Email"
                            className="email-input"
                        />
                    </Form.Item>
                    <Form.Item rules={rules('en').password} name="password">
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
                        <Button
                            type="link"
                            onClick={() => {
                                props.history.push('/register')
                            }}
                        >
                            New To Dolphin ? Register Now
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        currentResources: state.authReducer.currentResources,
    }
}

export default connect(mapStateToProps)(Login)
