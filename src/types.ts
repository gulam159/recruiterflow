export interface Product {
  id: number;
  brand: string;
  category: string;
  title: string;
  description: string;
  thumbnail: string;
  price: number;
  rating: number;
}

export interface CardProps {
  id: number;
  title: string;
  brand: string;
  category: string;
  description: string;
  price: number;
  rating: number;
  thumbnail: string;
  onDelete: (id: number) => void;
}
