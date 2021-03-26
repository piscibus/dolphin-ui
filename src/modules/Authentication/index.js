import React, { useState } from 'react'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
const Index = (props) => {
    const [activeAuthPage, switchAuth] = useState('login')

    return (
        <div className="auth-wrapper">
            {activeAuthPage === 'login' && (
                <Login switchToRegister={() => switchAuth('register')} />
            )}
            {activeAuthPage === 'register' && (
                <Register switchToLogin={() => switchAuth('login')} />
            )}
        </div>
    )
}

export default Index
