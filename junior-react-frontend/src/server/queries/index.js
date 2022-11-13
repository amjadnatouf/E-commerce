import {gql} from "@apollo/client";

const fetchProducts = gql `
query products($categoryInput: CategoryInput){
  category(input: $categoryInput) {
  products{
    name
    inStock
    gallery
    category
    prices {
        currency {
          symbol
        }
        amount
      }
    attributes {      
      name
    }
    id
    brand  
  }
  }
}
`

const fetchProduct = gql `
query productSingle($id: String!){
  product(id: $id) { 
    name
    inStock
    gallery    
    prices {
        currency {
          symbol
        }
        amount
      }
    attributes {      
      name
      type
      items {
        value
        id
      }
    }
    id
    brand  
  }
}
`

const fetchCurrencies = gql `
query currencies{
  currencies {
    label
    symbol
  }
} 
`

export {
    fetchProducts,
    fetchProduct,
    fetchCurrencies
}