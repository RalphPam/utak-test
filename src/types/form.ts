export type FormState = 'create' | 'edit' | 'view' | null

export interface ProductDetails {
  category: string
  cost: string
  name: string
  options: Array<string>
  price: string
  stock: string
}
