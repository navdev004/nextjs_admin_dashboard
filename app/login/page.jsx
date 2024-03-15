import React from 'react'
import styles from './login.module.css'

import LoginForm from '../ui/login/loginForm/loginForm'


const Login = () => {
  return (
    <div className={styles.container}>
     <LoginForm />
    </div>
  )
}

export default Login