'use client'

import React from 'react'
import styles from './loginForm.module.css'
import { authenticate } from '@/app/lib/actions';
import { useFormState } from 'react-dom'

const LoginForm = () => {
   const [state,formAction] = useFormState(authenticate,undefined);
    return (
        <div>
            <form action={formAction} className={styles.form}>
                <h1>Login</h1>

                <input type="text" placeholder='username' name='username' />
                <input type="text" placeholder='password' name='password' />
                <button>Login</button>
                {state && state}
            </form>
        </div>
    )
}

export default LoginForm