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
    confirm_password: z.string().min(1)
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
  email: z.string().email('Vui lòng nhập email hợp lệ').min(1),
  password: z.string().min(1, ' ')
})

export const priceRangeSchema = z
  .object({
    price_min: z.string(),
    price_max: z.string()
  })
  .superRefine(({ price_max, price_min }, ctx) => {
    if (price_max !== '' && price_min !== '') {
      Number(price_max) < Number(price_min) &&
        ctx.addIssue({
          code: 'custom',
          message: 'Giá không hợp lệ',
          path: ['price_min']
        })
    }
    if (price_max === '' && price_min === '') {
      ctx.addIssue({
        code: 'custom',
        message: 'Không được để trống',
        path: ['price_min']
      })
    }
  })
export type PriceRangeSchema = z.infer<typeof priceRangeSchema>
export type SignUpSchema = z.infer<typeof signUpSchema>
export type LoginSchema = z.infer<typeof loginSchema>
