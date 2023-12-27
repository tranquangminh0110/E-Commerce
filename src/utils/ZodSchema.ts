/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from 'zod'

export const signUpSchema = z
  .object({
    email: z
      .string()
      .email('Vui lòng nhập email hợp lệ')
      .min(5, 'Độ dài email từ 5 - 160 kí tự ')
      .max(160, 'Độ dài email từ 5 - 160 kí tự'),
    password: z.string().min(6, 'Độ dài mật khẩu từ 6 - 160 kí tự ').max(160, 'Độ dài mật khẩu từ 6 - 160 kí tự'),
    confirm_password: z.string()
  })
  .superRefine(({ confirm_password, password }, ctx) => {
    if (confirm_password !== password) {
      ctx.addIssue({
        message: 'Xác nhận mật khẩu không khớp',
        code: 'custom',
        path: ['confirm_password']
      })
    }
  })

export const loginSchema = z.object({
  email: z.string().email('Vui lòng nhập email hợp lệ'),
  password: z.string()
})

export type SignUpSchema = z.infer<typeof signUpSchema>
