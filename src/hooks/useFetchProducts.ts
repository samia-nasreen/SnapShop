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

interface UseFetchProductsOptions {
  limit?: number;
  minRating?: number;
  randomize?: boolean;
  count?: number;
}

const useFetchProducts = ({
  limit,
  minRating,
  randomize,
  count,
}: UseFetchProductsOptions) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://fakestoreapi.com/products${limit ? `?limit=${limit}` : ""}`
        );
        const json = await res.json();

        let filteredProducts = json;

        if (minRating) {
          filteredProducts = filteredProducts.filter(
            (product: any) => product.rating.rate >= minRating
          );
        }

        if (randomize && count) {
          const randomProducts = [];
          while (randomProducts.length < count && filteredProducts.length > 0) {
            const randomIndex = Math.floor(
              Math.random() * filteredProducts.length
            );
            randomProducts.push(filteredProducts.splice(randomIndex, 1)[0]);
          }
          filteredProducts = randomProducts;
        }

        const formattedProducts = filteredProducts.map((product: any) => ({
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

        setProducts(formattedProducts);
      } catch (error) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [limit, minRating, randomize, count]);

  return { products, loading, error };
};

export default useFetchProducts;
