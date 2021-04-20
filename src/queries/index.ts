import { formatPrice } from './../utils/index';
import { gql } from '@apollo/client'

// QUERIES
// Fetches all products
export const ALL_PRODUCTS = gql`
  query AllProducts {
    products {
      id
      title
      category
      description
      price
      slug
      isPopular
      quantity
      image {
        url
      }
    }
  }
`

// Fetches single Product
export const SINGLE_PRODUCT = gql`
  query SingleProduct($slug: String) {
    product(where: {slug: $slug}) {
      id
      title
      category
      description
      descriptionLong
      price
      isPopular
      quantity
      image {
        url
      }
    }
  } 
`

// Fetches product by category
export const GET_CATEGORY = gql`
  query GetCategory($category: String) {
    products(where: {category: $category}) {
      id
      title
      description
      descriptionLong
      price
      isPopular
      slug
      caffeine
      image {
        url
      }
    }
  }
`
// Fetches latest 3 products
export const LATEST_ARRIVALS = gql`
  query LatestArrivals {
    products(orderBy: createdAt_DESC, first: 3) {
      id
      title
      category
      description
      descriptionLong
      slug
      price
      quantity
      image {
        url
      }
    }
  }
`
// Fetches first single category
export const SINGLE_CATEGORY = gql`
  query FirstCategoryItem($category: String){
    products(first:1, where:{category: $category}){
      title
      category
      slug
      price
    }
  }
`
// Filters by caffeine
export const IS_CAFFEINE = gql`
  query IsCaffeine($category: String, $caffeine: Boolean){
    products(where:{caffeine:false, category: "think"}){
      title
      category
      slug
      caffeine
    }
  }
`
// Fetch products based on search text
export const EXECUTE_SEARCH = gql`
  query ExecuteSearch($query: String) {
    products(where: {OR:[{title_contains: $query}, {description_contains:$query}]}) {
      title
      description
    }
  }
`
// MUTATIONS
export const UPDATE_QUANTITY = gql`
  mutation UpdateQuantity($id: ID, $quantity: number){
  updateProduct(where: {id: $id} data: {quantity: $quantity}) {
    category
    quantity
    title
    description
    image
  }
}
`
