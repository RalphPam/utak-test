import { ProductDetails } from './form'

export type WithId<T> = T & { 
  id: string
}

export interface ChildObject {
  [key: string]: Record<string, unknown>
}

export type GetProductsResponse = Array<WithId<ProductDetails>>
