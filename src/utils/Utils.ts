import axios, { AxiosError, HttpStatusCode } from 'axios'

export const isUnprocessableEntity = <T>(error: unknown): error is AxiosError<T> => {
  /* eslint-disable import/no-named-as-default-member */
  return axios.isAxiosError<T>(error) && error.response?.status === HttpStatusCode.UnprocessableEntity
}

export const formatNumberToSocialStyle = (rawNumber: number, socialStyle?: boolean) => {
  return socialStyle
    ? new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 2 })
        .format(rawNumber)
        .replace('.', ',')
        .toLowerCase()
    : new Intl.NumberFormat('de-DE').format(rawNumber).replace('.', ',')
}

//Total Page = 10
export const handlePagination = (totalPage: number, currentPage: number, range: number) => {
  const longListPagination: number[] = Array.from({ length: totalPage }, (_, i) => i + 1)
  const newPaginaton: number[] = []
  //Assume longListPagination: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  //Assume currentPage is: 3

  //Vị trí hiện tại của lastPage trong 'long' list: 9
  const indexOfLastPageAtLong = longListPagination.indexOf(longListPagination[longListPagination.length - 1])
  //Vị trí hiện tại của currentPage trong 'long' list: 2
  const indexOfCurrentPageAtLong = longListPagination.indexOf(currentPage)

  //Assume longListPagination: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  //Total Page = 10
  for (let i = 0; i < totalPage; i++) {
    if (i === 0 || i === 1) {
      newPaginaton.push(longListPagination[i]) //Output Expected newPagination:  [1, 2]
    } else if (i === totalPage - 1 || i === totalPage - 2) {
      newPaginaton.push(longListPagination[i]) //Output Expected newPagination: [1, 2, 0, 0, 0, 0, 0, 0, 9, 10]
    } else {
      newPaginaton.push(0) //Output Expected newPagination: [1, 2, 0, 0, 0, 0, 0, 0]
    }
  }
  //Output Expected newPagination: [1, 2, 0, 0, 0, 0, 0, 0, 9, 10]
  if (longListPagination.includes(currentPage)) {
    if (![indexOfLastPageAtLong, indexOfLastPageAtLong - 1].includes(indexOfCurrentPageAtLong)) {
      newPaginaton[indexOfCurrentPageAtLong] = currentPage
      //Cập nhật + -
      for (let i = 0; i < range; i++) {
        newPaginaton[indexOfCurrentPageAtLong + (i + 1)] = currentPage + (i + 1)
        newPaginaton[indexOfCurrentPageAtLong - (i + 1)] = currentPage - (i + 1)
      }
    } else {
      //Vì là last page chỉ cập nhật lùi
      for (let i = 0; i < range; i++) {
        newPaginaton[indexOfCurrentPageAtLong - (i + 1)] = currentPage - (i + 1)
      }
    }
    return newPaginaton
  }
  return newPaginaton
}
