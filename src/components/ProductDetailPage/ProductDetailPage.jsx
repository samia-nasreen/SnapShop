import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "./Sections/ProductDetail/ProductDetail";
import RelatedItems from "./Sections/RelatedItems/RelatedItems";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const fetchProductById = async (id) => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProduct(data);

        if (data.category) {
          const relatedResponse = await fetch(
            `https://fakestoreapi.com/products/category/${data.category}`
          );
          if (!relatedResponse.ok) {
            throw new Error("Network response was not ok");
          }
          const relatedData = await relatedResponse.json();

          const shuffled = relatedData
            .sort(() => 0.5 - Math.random())
            .slice(0, 4);

          const formattedRelatedProducts = shuffled.map((product) => ({
            id: product.id,
            name: product.title,
            image: product.image,
            discount: Math.floor(Math.random() * 50) + 10,
            price: product.price,
            originalPrice: (product.price * (1 + Math.random() * 0.5)).toFixed(
              2
            ),
            rating: product.rating.rate,
            ratingCount: product.rating.count,
          }));

          setRelatedProducts(formattedRelatedProducts);
        }

        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    fetchProductById(productId);
  }, [productId]);

  if (!product) {
    return <div className="flex justify-center p-8">Loading...</div>;
  }

  return (
    <div className="px-8 md:px-28">
      <div className="text-xs text-gray-500 mt-12 ml-4">
        <span className="mr-2">Account</span> /
        <span className="mx-2">{product.category}</span> /
        <span className="ml-2 text-black">{product.title}</span>
      </div>
      <ProductDetail product={product} />
      <RelatedItems relatedProducts={relatedProducts} />
    </div>
  );
};

export default ProductDetailPage;
