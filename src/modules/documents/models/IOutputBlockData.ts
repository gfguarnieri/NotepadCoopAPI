export interface IOutputBlockData<
  Type extends string = string,
  Data extends object = any,
> {
  id?: string
  type: Type
  data: Data
}
