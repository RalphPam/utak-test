import { uuidv4 } from '@firebase/util'
import { message } from 'antd'
import { getDatabase, ref, set } from 'firebase/database'
import { ProductDetails } from './types/form'

export async function createProduct(values: ProductDetails): Promise<boolean> {
  try {
    const db = getDatabase()
    await set(ref(db, 'products/' + uuidv4()), values)
    message.success('Product created successfully', 3)
    return true
  } catch (error) {
    message.error('Something went wrong, please try again later', 3)
    console.error(error)
    return false
  }
}
