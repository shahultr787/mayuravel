import { Metadata } from 'next';
import Breadcrumb from "@/components/Common/Breadcrumb";
import ProductList from './ProductList'; // Import the Client Component

// Define the metadata for the Products Page
export const metadata: Metadata = {
  title: "Products Page | Premium Products for Spiritual and Home Use",
  description: "Discover our premium range of products including Camphor Tablets, Candles, and Lightwickles for a peaceful and spiritual experience.",
};

// Sample product data (could be fetched from an API in a real app)
const products = [
  { name: "Camphor Tablets", price: "$20", description: "Premium camphor tablets for spiritual rituals.", quantity: 1 },
  { name: "Candles", price: "$10", description: "Handmade wax candles for a peaceful ambiance.", quantity: 1 },
  { name: "Lightwickles", price: "$15", description: "Eco-friendly wicks for lightening your home.", quantity: 1 },
];

const ProductsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Products Page"
        description="Explore our premium range of spiritual products designed to elevate your life and bring peace."
      />
      <section className="py-16">
        <div className="container">
          <h2 className="text-2xl font-semibold mb-6">Our Products</h2>
          {/* Pass products to the Client Component */}
          <ProductList products={products} />
        </div>
      </section>
    </>
  );
};

export default ProductsPage;