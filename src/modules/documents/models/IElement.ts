export interface IElement<Data extends object = any> {
  id?: string
  type: string
  data: Data
}
