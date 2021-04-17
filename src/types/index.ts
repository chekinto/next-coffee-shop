export interface UserProps {
  name: string;
  email: string;
  basket: ProductProps[];
  saved: ProductProps[];
}

export interface ProductProps {
  id: string;
  category?: string;
  description?: string;
  descriptionLong?: string;
  price?: number;
  isPopular: boolean;
  quantity?: number;
  image?: {
    url?: String;
  }
  slug?: string;
  title?: string;
}


