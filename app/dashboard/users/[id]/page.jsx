import React from 'react'
import styles from "@/app/ui/dashboard/users/SingleUser/SingleUser.module.css"
import Image from 'next/image'

const SingleUserPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/avatar.png" alt='' fill />
                </div>
                John Doe
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label htmlFor="">Username</label>
                    <input type="text" name="username" placeholder='John Doe' />

                    <label htmlFor="">Email</label>
                    <input type="text" name="username" placeholder='John Doe' />

                    <label htmlFor="">Password</label>
                    <input type="password" name="password" />

                    <label htmlFor="">Phone</label>
                    <input type="text" name="phone" placeholder='+123456' />

                    <label htmlFor="">Address</label>
                    <textarea name="address" placeholder='New York'></textarea>

                    <label htmlFor="">Is Admin?</label>
                    <select name="isAdmin" id="isAdmin">
                        <option value={false} selected>Is Admin?</option>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>

                    </select>

                    <label htmlFor="">Is Active?</label>

                    <select name="isActive" id="isActive">
                        <option value={true} selected>Is Active?</option>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>

                    </select>
                    <button type='button'>Submit</button>

                </form>
            </div>
        </div>
    )
}

export default SingleUserPage