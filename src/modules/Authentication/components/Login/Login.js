import React, { useState } from 'react'
import { Button, Form, Input, message } from 'antd'
import logo from '../../../../assets/images/logo.png'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'
import { rules } from './_rules'
import localisation from '../../../../localisations'
import { LoginService } from '../../services'
const Login = (props) => {
    const local = localisation.Create()
    const { trans, getChangeLangDropDown } = local
    const [form] = Form.useForm()
    const [requestStatus, setRequestStatus] = useState({
        fetch: false,
        success: false,
        failure: false,
    })
    const doLogin = (payload) => {
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
            message.success(trans('LoggedIn Successfully'))
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
        LoginService(payload, onfetch, onsuccess, onfailure, trans)
    }
    const { authentication } = props.currentResources
    const { switchToRegister } = props
    const { fetch, success, failure } = requestStatus
    return (
        <div className="auth-holder">
            <Form name="loginForm" onFinish={doLogin} form={form}>
                <div className="logo">
                    <img src={logo} alt="dolphin logo" />
                </div>
                <Form.Item rules={rules().email} name="email">
                    <Input
                        disabled={fetch}
                        prefix={<UserOutlined />}
                        size="large"
                        placeholder={trans('Email')}
                        className="email-input"
                    />
                </Form.Item>
                <Form.Item rules={rules().password} name="password">
                    <Input.Password
                        disabled={fetch}
                        prefix={<LockOutlined />}
                        placeholder={trans('Password')}
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
                        {trans('Login')}
                    </Button>
                    <Button type="link" onClick={() => switchToRegister()}>
                        {trans('New To Dolphin')}
                    </Button>
                </Form.Item>
                {getChangeLangDropDown()}
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
