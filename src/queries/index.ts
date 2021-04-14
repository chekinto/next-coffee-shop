import { gql } from '@apollo/client'

export interface AllProductProps {
  product: {
    id: string;
    title: string;
    category: string;
    description: string;
    price: number;
    slug: string;
    image: {
      url: string;
    }
  }
}
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
      title
      descriptionLong
      price
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
