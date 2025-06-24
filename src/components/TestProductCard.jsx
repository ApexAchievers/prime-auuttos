import ProductCard from "../components/ProductCard"; 
import pc6 from '../assets/images/pc6.PNG';

export default function TestProductCard() {
  const mockProduct = {
    id: 1,
    name: "Premium Ceramic Brake Pads",
    price: 49.99,
    image: pc6,
    vendor: "AutoZone",
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <ProductCard product={mockProduct} />
    </div>
  );
}
