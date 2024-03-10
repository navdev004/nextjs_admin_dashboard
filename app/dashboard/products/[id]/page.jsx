import React from 'react'
import styles from "@/app/ui/dashboard/products/SingleProduct/SingleProduct.module.css"
import Image from 'next/image'

const SingleProductPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/avatar.png" alt='' fill />
                </div>
                Iphone
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label htmlFor="">Title</label>
                    <input type="text" name="title" placeholder='iphone' />

                    <label htmlFor="">Price</label>
                    <input type="number" name="price" placeholder='Price' />

                    <label htmlFor="">Stock</label>
                    <input type="number" name="stock" placeholder='23' />

                    <label htmlFor="">Color</label>
                    <input type="text" name="color" placeholder='red' />

                    <label htmlFor="">Size</label>
                    <textarea name="size" placeholder='New York'></textarea>

                    <label htmlFor="">Cat</label>
                    <select name="cat" id="cat">
                        <option value="kitchen">Kitchen</option>
                        <option value="computers">Computers</option>
                       

                    </select>

                    <label htmlFor="">Description</label>
<textarea name="desc" id="desc" rows="10" placeholder='description'></textarea>
                    <button type='button'>Update</button>

                </form>
            </div>
        </div>
    )
}

export default SingleProductPage