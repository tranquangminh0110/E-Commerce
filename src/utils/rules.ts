import { UseFormGetValues, type RegisterOptions } from 'react-hook-form'

type Rule = {
  [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions
}
export const rules: Rule = {
  email: {
    required: {
      value: true,
      message: 'Email là bắt buộc'
    },
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'Email không đúng định dạng'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài không phù hợp'
    },
    minLength: {
      value: 6,
      message: 'Độ dài không phù hợp'
    }
  },
  password: {
    required: {
      value: true,
      message: 'Mật khẩu là bắt buộc'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài không phù hợp'
    },
    minLength: {
      value: 6,
      message: 'Độ dài không phù hợp'
    }
  },
  confirm_password: {
    required: {
      value: true,
      message: 'Xác nhận mật khẩu là bắt buộc'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài không phù hợp'
    },
    minLength: {
      value: 6,
      message: 'Độ dài không phù hợp'
    },
    validate: (value) => {
      if (value === 'adminadminadmin') {
        return 'Dung mat kahur'
      }
    }
  }
}
export const ruleFunction = (getValues?: UseFormGetValues<any>): Rule => {
  return {
    email: {
      required: {
        value: true,
        message: 'Email là bắt buộc'
      },
      pattern: {
        value: /^\S+@\S+\.\S+$/,
        message: 'Email không đúng định dạng'
      },
      maxLength: {
        value: 160,
        message: 'Độ dài không phù hợp'
      },
      minLength: {
        value: 6,
        message: 'Độ dài không phù hợp'
      }
    },
    password: {
      required: {
        value: true,
        message: 'Mật khẩu là bắt buộc'
      },
      maxLength: {
        value: 160,
        message: 'Độ dài không phù hợp'
      },
      minLength: {
        value: 6,
        message: 'Độ dài không phù hợp'
      }
    },
    confirm_password: {
      required: {
        value: true,
        message: 'Xác nhận mật khẩu là bắt buộc'
      },
      maxLength: {
        value: 160,
        message: 'Độ dài không phù hợp'
      },
      minLength: {
        value: 6,
        message: 'Độ dài không phù hợp'
      },
      validate:
        typeof getValues === 'function' ? (value) => value === getValues('password') || 'Nhập lại sai' : undefined
    }
  }
}
