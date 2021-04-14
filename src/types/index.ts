export interface UserProps {
  name: string;
  email: string;
  basket: [];
  saved: [];
}

export interface Product {
  id: string;
  category: string;
  description: string;
  descriptionLong: string;
  price: number;
  image: {
    url: String;
  }
  slug: string;
  title: string;
}


