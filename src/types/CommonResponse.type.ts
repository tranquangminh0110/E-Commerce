export interface ErrorResponseAPI<TData> {
  message: string
  data?: TData
}

export interface SuccessResponseAPI<TData> {
  message: string
  data: TData
}
