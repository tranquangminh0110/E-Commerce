export interface Product {
  _id: string
  images: string[]
  price: number
  rating: number
  price_before_discount: number
  quantity: number
  sold: number
  view: number
  name: string
  description: string
  category: {
    _id: string
    name: string
  }
  image: string
  createdAt: string
  updatedAt: string
}

export interface ProductList {
  products: Product[]
  pagination: {
    page: number
    limit: number
    page_size: number
  }
}

export interface ProductListQueryParamsConfig {
  page?: number | string //số trang, default: 1
  limit?: number | string // số lượng product trên 1 trang, default: 30
  order?: 'desc' | 'asc' //sắp xếp theo thứ tự, default: 'desc'
  sort_by?: 'createdAt' | 'view' | 'sold' | 'price' //sắp xếp theo trường, default: 'createdAt'
  category?: string //lọc theo category
  exclude?: string //loại trừ sản phẩm nào đó
  rating_filter?: number | string //lọc sản phẩm có số sao lớn hơn hoặc bằng rating_filter
  price_max?: number | string //lọc sản phẩm với giá cao nhất
  price_min?: number | string // lọc sản phẩm với giá thấp nhất
  name?: string //lọc theo tên sản phẩm (tiếng Việt có dấu)
}
