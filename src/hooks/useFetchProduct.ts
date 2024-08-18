import { useState, useEffect } from "react";

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  discount: number;
  price: number;
  originalPrice: string;
  category: string;
  rating: number;
  ratingCount: number;
}

const useFetchProduct = (productId: number) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        const data = await res.json();

        const formattedProduct: Product = {
          id: data.id,
          name: data.title,
          image: data.image,
          description: data.description,
          discount: Math.floor(Math.random() * 50) + 10,
          price: data.price,
          originalPrice: (data.price * (1 + Math.random() * 0.5)).toFixed(2),
          category: data.category,
          rating: data.rating.rate,
          ratingCount: data.rating.count,
        };

        setProduct(formattedProduct);
      } catch (error) {
        setError("Failed to fetch product");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  return { product, loading, error };
};

export default useFetchProduct;
