import React, { useState } from 'react';
import { ShoppingCart, Phone, ShieldCheck, BadgeCheck, RotateCcw, Package2 } from 'lucide-react';
import tyrehero from '../assets/images/tyre-hero.jpg';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function SingleAdvert() {
  const [selectedImage, setSelectedImage] = useState(0);
  
  const productImages = [
    tyrehero,
  ];

  return (
    <>
    <Navbar />
    <div className="max-w-7xl mx-auto px-4 py-8 mt-15">
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-12">
        {/* Left Side - Product Images */}
        <div className="space-y-4 lg:col-span-4">
          {/* Main Product Image */}
          <div className="bg-white p-8 aspect-video flex items-center justify-center">
            <div className="w-full h-full relative overflow-hidden">
              {/* Main Product Image */}
          <div className="w-full h-full flex items-center justify-center rounded-lg shadow-2xl">
            <img
              src={productImages[selectedImage]}
              alt="Product"
              className="w-full h-full object-cover"
            />
          </div>
            </div>
          </div>
          
          {/* Thumbnail Images */}
          <div className="flex gap-3">
            {productImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-20 h-20 rounded-lg border-2 transition-all ${
                  selectedImage === index
                    ? 'border-blue-500'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <img
                  src={tyrehero}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover rounded-md"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Side - Product Details and Features */}
        <div className="space-y-8 lg:col-span-6">
          {/* Product Title & Brand */}
          <div>
            <p className="text-sm text-gray-500 font-medium mb-1">— BREMBO</p>
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
              Premium Brake Disc Set 320mm + Brake Pads
            </h1>
          </div>

          {/* Pricing and Feature Box Row */}
<div className="flex flex-col lg:flex-row items-start gap-4">
  {/* Pricing */}
  <div>
    <div className="flex items-baseline gap-1">
      <span className="text-4xl font-bold text-emerald-600">₵2,280</span>
      <span className="text-2xl text-emerald-600 font-bold">.00</span>
    </div>
    {/* Add to Cart Button BELOW price */}
    <div className="mt-2">
      <button className="bg-gray-700 hover:bg-black text-white font-semibold py-3 px-8 transition-colors flex items-center gap-2">
        <ShoppingCart className="w-5 h-5" />
        Add to Cart
      </button>
    </div>
    <div className="mt-5">
      <button className="bg-black hover:bg-gray-700 text-white font-semibold py-3 px-8 transition-colors flex items-center gap-2">
        <Phone className="w-5 h-5" />
        Contact Vendor
      </button>
    </div>
  </div>
  {/* Feature Box */}
  <div className="bg-white border border-gray-200 rounded-sm py-2 px-2 space-y-2 shadow-lg w-full max-w-xs mt-4 lg:mt-0 lg:ml-20">
    {/* ...feature items... */}
    <div className="flex items-start gap-2">
      <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center flex-shrink-0">
        <ShieldCheck className="w-5 h-5 text-orange-600" />
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 mb-1 text-sm">Trusted Vendors</h3>
        <p className="text-xs text-gray-600 leading-relaxed">We partner only with verified sellers</p>
      </div>
    </div>
    <div className="flex items-start gap-2">
      <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center flex-shrink-0">
        <BadgeCheck className="w-5 h-5 text-orange-600" />
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 mb-1 text-sm">Genuine products with warranty</h3>
        <p className="text-xs text-gray-600 leading-relaxed">All products are sourced from official channels and covered by warranty</p>
      </div>
    </div>
    <div className="flex items-start gap-2">
      <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center flex-shrink-0">
        <RotateCcw className="w-5 h-5 text-orange-600" />
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 mb-1 text-sm">7 days return</h3>
        <p className="text-xs text-gray-600 leading-relaxed mb-1">Return in seven days if you are not satisfied</p>
        <a href="#" className="text-xs text-blue-600 hover:underline">Terms & Conditions</a>
      </div>
    </div>
    <div className="flex items-start gap-2">
      <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center flex-shrink-0">
        <Package2 className="w-5 h-5 text-orange-600" />
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 mb-1 text-sm">Ready for Pickup</h3>
        <p className="text-xs text-gray-600 leading-relaxed">Fast processing for smooth handover</p>
      </div>
    </div>
  </div>
</div>

          {/* Product Specifications - Right Side */}
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="space-y-3">
              <div className="border-b border-gray-200 pb-2">
                <span className="font-medium text-gray-700">- Brand</span>
              </div>
              <p className="text-gray-900">Brembo Premium Quality</p>
              <p className="text-gray-900">Disc Size: 320mm ventilated design</p>
              <p className="text-gray-900">Material: High-carbon steel alloy</p>
              <p className="text-gray-900">Compatibility: BMW 3 Series, 5 Series</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
