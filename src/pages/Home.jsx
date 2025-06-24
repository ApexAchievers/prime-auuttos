import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import tyres from '../assets/images/tyres.JPG';
import wheel2 from '../assets/images/wheel2.JPG';
import bike2 from '../assets/images/bike2.JPG';
import truck from '../assets/images/truck.JPG';
import carfix from '../assets/images/carfix.JPG';
import pc1 from '../assets/images/pc1.PNG';
import pc2 from '../assets/images/pc2.PNG';
import pc3 from '../assets/images/pc3.PNG';
import pc4 from '../assets/images/pc4.PNG';
import pc5 from '../assets/images/pc5.PNG';
import pc6 from '../assets/images/pc6.PNG';
import pc7 from '../assets/images/pc7.PNG';
import pc8 from '../assets/images/pc8.PNG';
import pc9 from '../assets/images/pc9.PNG';
import pc10 from '../assets/images/pc10.PNG';
import pc11 from '../assets/images/pc11.JPG';
import pc12 from '../assets/images/pc12.PNG';
import pc13 from '../assets/images/pc13.PNG'

const heroImages = [
  {
    url: wheel2,
    title: 'Take Control of the Road',
    subtitle: 'Precision, Power, and Performance',
    textColor: 'text-yellow-400'
  },
  {
    url: tyres,
    title: 'Gain Momentum',
    subtitle: 'Reliable grip, safer journeys — Stay grounded',
    textColor: 'text-orange-500'
  },
  {
    url: bike2,
    title: 'Ride with Freedom',
    subtitle: 'Two wheels, endless adventure — built for speed',
    textColor: 'text-gray-300'
  },
  {
    url: truck,
    title: 'Built tough, Hauls heavy',
    subtitle: 'Heavy-duty power, smooth performance',
    textColor: 'text-white'

  },
  {
    url: carfix,
    title: 'Keep your Engine alive',
    subtitle: 'Premium oils and lasting engine health',
    textColor: 'text-[#04FB04]'
  }
];

const featuredProducts = [
  // Row 1 - 4 items
  {
    id: 1,
    name: 'Body & Exterior',
    image: pc1,
  },
  {
    id: 2,
    name: 'Interior Components',
    image: pc7,
  },
  {
    id: 3,
    name: 'Bike Parts & Accessories',
    image: pc3,
  },
  {
    id: 4,
    name: 'Suspension & Steering',
    image: pc4,
  },
  // Row 2 - 2 items
  {
    id: 5,
    name: 'Braking System',
    image: pc5,
  },
  {
    id: 6,
    name: 'Fluid and Lubricants',
    image: pc6,
  },
  // Row 3 - 4 items
  {
    id: 7,
    name: 'Cycling Essentials',
    image: pc2,
  },
  {
    id: 8,
    name: 'Services',
    image: pc8,
  },
  {
    id: 9,
    name: 'Climate & Comfort',
    image: pc9,
  },
  {
    id: 10,
    name: 'Electrical & Battery System',
    image: pc10,
  },
  // Row 4 - 3 items
  {
    id: 11,
    name: 'Lights & Indicators',
    image: pc11,
  },
  {
    id: 12,
    name: 'Transmission & Drivetrain',
    image: pc12,
  },
  {
    id: 13,
    name: 'Engine & Mechanical Components',
    image: pc13,
  }
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentImageIndex === heroImages.length - 1) {
        setIsFading(true);
        setTimeout(() => {
          setCurrentImageIndex(0);
          setIsFading(false);
        }, 700); // match your slide duration
      } else {
        setCurrentImageIndex((prevIndex) => prevIndex + 1);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const row1 = featuredProducts.slice(0, 4);
  const row2 = featuredProducts.slice(4, 6);
  const row3 = featuredProducts.slice(6, 10);
  const row4 = featuredProducts.slice(10, 13);

  return (

    <>
      <div className="min-h-screen bg-white">

        {/* Hero Section with Auto-scrolling Images */}
        <div className="bg-white py-5 md:py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-sm shadow-xl -mt-12">
              {!isFading ? (
                <div
                  className="flex transition-transform duration-700 ease-in-out h-full"
                  style={{
                    width: `${heroImages.length * 100}%`,
                    transform: `translateX(-${currentImageIndex * (100 / heroImages.length)}%)`
                  }}
                >
                  {heroImages.map((image, index) => (
                    <div
                      key={index}
                      className="w-full h-full flex-shrink-0 relative"
                      style={{ width: `${100 / heroImages.length}%` }}
                    >
                      <img
                        src={image.url}
                        alt={image.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-end">
                        <div className={`bg-black/50 rounded-lg px-3 py-1 md:px-8 md:py-3 lg:px-12 lg:py-4 mb-4 max-w-xs md:max-w-2xl ml-2 md:ml-8 lg:ml-12 ${image.textColor}`}>
                          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-4">{image.title}</h1>
                          <p className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-6">{image.subtitle}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                heroImages.map((image, index) =>
                  index === 0 ? (
                    <div key={index} className="absolute inset-0 w-full h-full transition-opacity duration-700 opacity-100 z-10">
                      <img
                        src={image.url}
                        alt={image.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : null
                )
              )}


              {/* Image indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-6 h-1 rounded transition-colors ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="py-5 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-2">
                {/* Row 1 - 4 items */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2">
                  {row1.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white shadow-2xl transition-shadow group cursor-pointer overflow-hidden p-4"
                    >
                      <div className="relative">
                        <div className="mt-2 text-center">
                          <h3 className="text-orange-700 font-semibold hover:font-bold text-base md:text-lg">{product.name}</h3>
                          <p className="text-gray-600 text-sm">{product.description || 'Explore this category'}</p>
                        </div>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-48 md:h-56 object-contain group-hover:scale-105 transition-transform duration-300 mx-auto"
                        />

                      </div>
                    </div>
                  ))}
                </div>

                {/* Row 2 - 2 items */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2">
                  {row2.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white shadow-2xl transition-shadow group cursor-pointer overflow-hidden p-4"
                    >
                      <div className="relative">
                        <div className="mt-2 text-center">
                          <h3 className="text-orange-700 font-semibold hover:font-bold text-base md:text-lg">{product.name}</h3>
                          <p className="text-gray-600 text-sm">{product.description || 'Explore this category'}</p>
                        </div>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-48 md:h-64 object-contain group-hover:scale-105 transition-transform duration-300 mx-auto"
                        />

                      </div>
                    </div>
                  ))}
                </div>

                {/* Row 3 - 4 items */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2">
                  {row3.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white shadow-2xl hover:shadow-xl transition-shadow group cursor-pointer overflow-hidden p-4"
                    >
                      <div className="relative">
                        <div className="mt-2 text-center">
                          <h3 className="text-orange-700 font-semibold hover:font-bold text-base md:text-lg">{product.name}</h3>
                          <p className="text-gray-600 text-sm">{product.description || 'Explore this category'}</p>
                        </div>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-48 md:h-56 object-contain group-hover:scale-105 transition-transform duration-300 mx-auto"
                        />

                      </div>
                    </div>
                  ))}
                </div>

                {/* Row 4 - 3 items */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-2">
                  {row4.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white shadow-2xl hover:shadow-xl transition-shadow group cursor-pointer overflow-hidden p-4"
                    >
                      <div className="relative">
                        <div className="mt-2 text-center">
                          <h3 className="text-orange-700 font-semibold hover:font-bold text-base md:text-lg">{product.name}</h3>
                          <p className="text-gray-600 text-sm">{product.description || 'Explore this category'}</p>
                        </div>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-48 md:h-60 object-contain group-hover:scale-105 transition-transform duration-300 mx-auto"
                        />

                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Link to="/view-product">
                <div className="text-center mt-12">
                  <button className="relative overflow-hidden bg-orange-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-300 group border-1 border-transparent group-hover:border-orange-700 cursor-pointer">
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-orange-700">
                      View All Products
                    </span>
                    <span
                      className="absolute inset-0 bg-white transition-transform duration-300 translate-x-full group-hover:translate-x-0"
                      aria-hidden="true"
                    ></span>
                    <span
                      className="absolute inset-0 bg-orange-700 transition-transform duration-300 group-hover:translate-x-full"
                      aria-hidden="true"
                    ></span>
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}