"use client";

import { useCallback } from "react";

type Product = {
  name: string;
  price: string;
  description: string;
  quantity: number;
};

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  const handleEnquiry = useCallback((productName: string, quantity: number) => {
    const message = `Hello, I would like to inquire about ${productName} (Quantity: ${quantity}).`;
    const whatsappUrl = `https://wa.me/7306262055?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <div key={product.name} className="border rounded-lg p-6 shadow-md bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-lg">
          <h3 className="text-xl font-medium mb-4 text-gray-900 dark:text-white">{product.name}</h3>
          <p className="text-gray-600 dark:text-gray-300">{product.description}</p>
          <p className="mt-4 text-lg text-gray-800 dark:text-gray-200">Price: {product.price}</p>
          <button
            onClick={() => handleEnquiry(product.name, product.quantity)}
            className="mt-6 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 focus:ring-2 focus:ring-green-400 focus:outline-none"
          >
            Enquire Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;