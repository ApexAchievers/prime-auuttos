import pc6 from '../assets/images/pc6.PNG';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router';


export default function ProductCard({ viewMode}) {
    return (
        <div className={
            viewMode === 'list'
                ? 'flex w-full shadow-xl overflow-hidden bg-white mb-4'
                : 'max-w-xs w-full mx-auto shadow-2xl overflow-hidden bg-white'
        }>
            <img
                src={pc6}
                alt="Brake Pads"
                className={viewMode === 'list' ? 'w-50 h-32 object-cover p-2' : 'w-full h-50 object-cover p-2'}
            />

            <div className="p-3">
                <h1 className="text-base font-semibold text-gray-800 mb-1 truncate">
                    Premium Ceramic Brake Pads
                </h1>
                
                <h2 className="text-base font-bold text-green-500 mb-1">₵2,280</h2>
                <h3 className="text-xs text-gray-500 mb-3">
                    Vendor: AutoZone
                </h3>
                <div className="flex gap-2">
                    <Link to='/single-advert'>
                    <button className="flex-1 w-20 bg-orange-700 text-white py-1 rounded-md hover:bg-white hover:text-orange-700 hover:border-1 hover:border-orange-700 transition-colors text-xs font-medium">
                        View
                    </button>
                    </Link>
                    
                    <button
                  onClick={() => handleAddToCart(product)}
                  className="w-24 bg-gray-700 text-white py-1 px-2 rounded-md hover:bg-black transition-colors flex items-center justify-center space-x-1 text-xs"
                >
                  <ShoppingCart className="h-3 w-3" />
                  <span>Add to Cart</span>
                </button>
                </div>
            </div>
        </div>
    );
}
