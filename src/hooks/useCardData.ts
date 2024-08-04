import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "../types";

const API_BASE_URL = "https://dummyjson.com/products";

export const useCardData = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isProductLoading, setProductLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setProductLoading(true);
    try {
      const response = await axios.get(
        `${API_BASE_URL}?limit=12&skip=0&select=brand,category,description,price,rating,thumbnail,title`
      );
      setProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching data", error); // we can handle error case here in case if api call fails
    } finally {
      setProductLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAdd = () => {
    if (products.length === 0) return; // Prevent adding if there are no products
    const randomIndex = Math.floor(Math.random() * products.length);
    setProducts([{ ...products[randomIndex], id: Date.now() }, ...products]);
  };

  const handleRemove = (productId: number) => {
    const filteredProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(filteredProducts);
  };

  return [
    { products, isProductLoading },
    { handleAdd, handleRemove },
  ] as const;
};
