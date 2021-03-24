import React,{useState} from 'react'
import { Button, Form, Input, Alert } from 'antd'
import logo from '../../../../assets/images/logo.png'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
const validatePassword = (rule, value, callback) => {
    console.log(value);
    if (value && value !== "Secret") {
      callback("Error!");
    } else {
      callback();
    }
  };

const Register = (props) => {
    const [password, setPassword] = useState("");
    const [repassword, setRePassword] = useState("");
    const [isMatched, setPasswordMatch] = useState(true);
    const repassChange = event => {
        const target = event.target;
        const value = target.value;
        setRePassword(value);
    }
    const passChange = event => {
        const target = event.target;
        const value = target.value;
        setPassword(value);
    }
    const doRegister = () => {
        if(password !== repassword){
            setPasswordMatch(false);
        }
    }
    return (
        <div className='auth-wrapper'>
        <div className="register-wrapper">
            <Form name="registerForm">
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
                    { required: true, message: 'Please enter your user name' },
                ]} name="username">
                    <Input  prefix={<UserOutlined />} placeholder="User Name" size="large" />
                </Form.Item>
                <Form.Item rules={[
                    { required: true, message: 'Please enter your password' },
                ]} 
                name="password">
                    <Input.Password onChange={passChange} prefix={<LockOutlined />} placeholder="Password" size="large" />
                </Form.Item>
                <Form.Item rules={[
                    { required: true, message: 'Please re-enter your password' },
                ]} name="repassword">
                    <Input.Password onChange={repassChange} prefix={<LockOutlined />} placeholder="Re-Enter Password" size="large" />
                </Form.Item>
                {!isMatched && <Form.Item>
                    <Alert message="Passwords Mismatch" type="error" />
                </Form.Item>}
                <Form.Item>
                    <Button onClick={doRegister} block type="primary" htmlType="submit">
                        Register
                    </Button>
                </Form.Item>
            </Form>
        </div>
        </div>
    )
}

export default Register
