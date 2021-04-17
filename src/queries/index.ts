import { gql } from '@apollo/client'

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
      descriptionLong
      price
      isPopular
      slug
      image {
        url
      }
    }
  }
`
// Fetches latest 3 products
export const LATEST_ARRIVALS = gql`
  query LatestArrivals {
    products(first: 3) {
      id
      title
      category
      descriptionLong
      slug
      image {
        url
      }
    }
  }
`

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
