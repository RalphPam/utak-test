import { message } from 'antd'
import { child, get, getDatabase, ref, remove, set, update } from 'firebase/database'
import { ProductDetails } from './types/form'
import { GetProductsResponse } from './types/response'
import { formatChildToArray } from './utils/format'

export async function createProduct(id: string, values: ProductDetails): Promise<boolean> {
  try {
    const db = getDatabase()
    await set(ref(db, 'products/' + id), values)
    message.success('Product created successfully', 3)
    return true
  } catch (error) {
    message.error('Something went wrong, please try again later', 3)
    console.error(error)
    return false
  }
}

export async function getProducts(): Promise<GetProductsResponse> {
  try {
    const dbRef = ref(getDatabase())
    const snapshot = await get(child(dbRef, 'products'))
    if (snapshot.exists()) {
      return formatChildToArray(snapshot.val()) as GetProductsResponse
    }
    return []
  } catch (error) {
    message.error('Something went wrong, please try again later', 3)
    console.error(error)
    return []
  }
}

export async function deleteProduct(id: string): Promise<boolean> {
  try {
    const db = getDatabase()
    await remove(ref(db, 'products/' + id))
    message.success('Product deleted successfully', 3)
    return true
  } catch (error) {
    message.error('Something went wrong, please try again later', 3)
    console.error(error)
    return false
  }
}

export async function updateProductDetails(id: string, productDetails: ProductDetails): Promise<boolean> {
  try {
    const db = getDatabase()
    await update(ref(db, 'products/' + id), productDetails)
    message.success('Product edited successfully', 3)
    return true
  } catch (error) {
    message.error('Something went wrong, please try again later', 3)
    console.error(error)
    return false
  }
}