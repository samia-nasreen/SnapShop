import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../types/product";

interface FetchProductsOptions {
  limit?: number;
  minRating?: number;
  randomize?: boolean;
  count?: number;
}

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<Product[], FetchProductsOptions>({
      query: ({ limit } = {}) => `products${limit ? `?limit=${limit}` : ""}`,
      transformResponse: (response: any[], meta, arg) => {
        const allProducts = response;
        let filteredProducts = allProducts;

        const minRating = arg?.minRating ?? 0;
        filteredProducts = allProducts.filter(
          (product) => product.rating.rate >= minRating
        );

        if (arg?.randomize && arg?.count) {
          const randomProducts: Product[] = [];
          while (
            randomProducts.length < arg.count &&
            filteredProducts.length > 0
          ) {
            const randomIndex = Math.floor(
              Math.random() * filteredProducts.length
            );
            randomProducts.push(filteredProducts.splice(randomIndex, 1)[0]);
          }
          filteredProducts = randomProducts;
        }

        return filteredProducts.map((product) => ({
          id: product.id,
          name: product.title,
          image: product.image,
          discount: Math.floor(Math.random() * 50) + 10,
          price: product.price,
          originalPrice: (product.price * (1 + Math.random() * 0.5)).toFixed(2),
          category: product.category,
          rating: product.rating.rate,
          ratingCount: product.rating.count,
          description: product.description,
        }));
      },
    }),

    getProduct: builder.query<Product, number>({
      query: (id) => `products/${id}`,
      transformResponse: (product: any) => ({
        id: product.id,
        name: product.title,
        image: product.image,
        discount: Math.floor(Math.random() * 50) + 10,
        price: product.price,
        originalPrice: (product.price * (1 + Math.random() * 0.5)).toFixed(2),
        category: product.category,
        rating: product.rating.rate,
        ratingCount: product.rating.count,
        description: product.description,
      }),
    }),

    getRelatedProducts: builder.query<Product[], string>({
      query: (category) => `/products/category/${category}`,
      transformResponse: (response: any[]) => {
        const relatedProducts = response
          .sort(() => 0.5 - Math.random())
          .slice(0, 4);

        return relatedProducts.map((product) => ({
          id: product.id,
          name: product.title,
          image: product.image,
          discount: Math.floor(Math.random() * 50) + 10,
          price: product.price,
          originalPrice: (product.price * (1 + Math.random() * 0.5)).toFixed(2),
          category: product.category,
          rating: product.rating.rate,
          ratingCount: product.rating.count,
          description: product.description,
        }));
      },
    }),

    getCategoryProducts: builder.query<Product[], string>({
      query: (category) => `/products/category/${category}`,
      transformResponse: (products: any[]) =>
        products.map((product) => ({
          id: product.id,
          name: product.title,
          image: product.image,
          discount: Math.floor(Math.random() * 50) + 10,
          price: product.price,
          originalPrice: (product.price * (1 + Math.random() * 0.5)).toFixed(2),
          category: product.category,
          rating: product.rating.rate,
          ratingCount: product.rating.count,
          description: product.description,
        })),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductQuery,
  useGetRelatedProductsQuery,
  useGetCategoryProductsQuery,
} = productsApi;
