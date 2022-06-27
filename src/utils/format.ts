import { ChildObject } from '../types/response'

export function formatChildToArray(child: ChildObject): Array<unknown> {
  if (!child) return []
  const array: Array<unknown> = []
  Object.keys(child).forEach((key) => {
    array.push({ ...child[key], id: key })
  })
  return array
}