import axios, { AxiosError, HttpStatusCode } from 'axios'

export const isUnprocessableEntity = <T>(error: unknown): error is AxiosError<T> => {
  /* eslint-disable import/no-named-as-default-member */
  return axios.isAxiosError<T>(error) && error.response?.status === HttpStatusCode.UnprocessableEntity
}
