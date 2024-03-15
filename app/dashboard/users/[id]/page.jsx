import React from 'react'
import styles from "@/app/ui/dashboard/users/SingleUser/SingleUser.module.css"
import Image from 'next/image'
import { fetchUser } from '@/app/lib/data';
import { updateUser } from '@/app/lib/actions';

const SingleUserPage = async({params}) => {
    const {id}  = params;
    const user = await fetchUser(id);
    console.log(user);

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/avatar.png" alt='' fill />
                </div>
                {user?.username}
            </div>
            <div className={styles.formContainer}>
                <form action={updateUser} className={styles.form}>
                    <input type="hidden" name="id" value={user._id}/>
                    <label htmlFor="">Username</label>
                    <input type="text" name="username" placeholder={user.username} />

                    <label htmlFor="">Email</label>
                    <input type="text" name="email" placeholder={user.email} />

                    <label htmlFor="">Password</label>
                    <input type="password" name="password" />

                    <label htmlFor="">Phone</label>
                    <input type="text" name="phone" placeholder={user?.phone} />

                    <label htmlFor="">Address</label>
                    <textarea name="address" placeholder={user.address}></textarea>

                    <label htmlFor="">Is Admin?</label>
                    <select name="isAdmin" id="isAdmin">
                       
                        <option value={true} selected={user.isAdmin}>Yes</option>
                        <option value={false} selected={!user.isAdmin}>No</option>

                    </select>

                    <label htmlFor="">Is Active?</label>

                    <select name="isActive" id="isActive">
                     
                        <option value={true} selected={user.isActive}>Yes</option>
                        <option value={false} selected={!user.isActive}>No</option>

                    </select>
                    <button type='submit'>Submit</button>

                </form>
            </div>
        </div>  
    )
}

export default SingleUserPage 