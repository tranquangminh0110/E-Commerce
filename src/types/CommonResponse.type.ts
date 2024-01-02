//Kiểu dữ liệu sẽ trả về lỗi [422]
/**
 * {
 *  message: 'Lỗi'
 *  data: {
 *  "email": 'Email đã tồn tại'
 *  }
 * }
 */
//Kiểu dữ liệu ko trả về lỗi với data
/**
 * {
 *  message: 'Token không được gửi'
 * }
 */
export interface ErrorResponseAPI<TData> {
  message: string
  data?: TData
}

export interface SuccessResponseAPI<TData> {
  message: string
  data: TData
}
