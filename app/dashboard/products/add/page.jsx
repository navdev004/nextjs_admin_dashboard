import React from 'react'
import styles from '@/app/ui/dashboard/products/addProduct/addProduct.module.css'
import { addProduct } from '@/app/lib/actions'

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action={addProduct} className={styles.form}>
        <input type="text" placeholder='title' name='title' required />
        <select name="cat" id="cat">
          <option value="general">Choose a Category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Choose a Category</option>
          <option value="general">Phone</option>
          <option value="comuputer">Computer</option>
        </select>
        <input type="number" placeholder='price' name='price' />
        <input type="number" placeholder='stock' name='stock' />
        <input type="text" placeholder='color' name='color' />
        <input type="text" placeholder='size' name='size' />
        <textarea name="desc" id="desc" cols="30" rows="10" placeholder='Description'></textarea>
        <button type='submit'>Submit</button>
      </form>
      
    </div>
  )
}

export default AddProductPage