//Cú pháp `-?` sẽ loại bỏ undefined của Key Optional
export type NoUndefinedField<T> = {
  [P in keyof T]-?: NoUndefinedField<NonNullable<T[P]>>
}
