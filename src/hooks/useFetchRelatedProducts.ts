import { useState, useEffect } from "react";

interface Product {
  id: number;
  name: string;
  image: string;
  discount: number;
  price: number;
  originalPrice: string;
  category: string;
  rating: number;
  ratingCount: number;
}

const useFetchRelatedProducts = (category: string) => {
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      setLoading(true);
      try {
        const relatedResponse = await fetch(
          `https://fakestoreapi.com/products/category/${category}`
        );
        if (!relatedResponse.ok) {
          throw new Error("Network response was not ok");
        }
        const relatedData = await relatedResponse.json();

        const shuffled = relatedData
          .sort(() => 0.5 - Math.random())
          .slice(0, 4);

        const formattedRelatedProducts = shuffled.map((product: any) => ({
          id: product.id,
          name: product.title,
          image: product.image,
          discount: Math.floor(Math.random() * 50) + 10,
          price: product.price,
          originalPrice: (product.price * (1 + Math.random() * 0.5)).toFixed(2),
          category: product.category,
          rating: product.rating.rate,
          ratingCount: product.rating.count,
        }));

        setRelatedProducts(formattedRelatedProducts);
      } catch (error) {
        setError("Failed to fetch related products");
      } finally {
        setLoading(false);
      }
    };

    fetchRelatedProducts();
  }, [category]);

  return { relatedProducts, loading, error };
};

export default useFetchRelatedProducts;
