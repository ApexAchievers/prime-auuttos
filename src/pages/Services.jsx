import React from 'react';
import Footer from "../components/Footer";
import { Settings, Wrench, ScanLine } from "lucide-react";
import ss1 from '../assets/images/ss1.jpg';
import ss2 from '../assets/images/ss2.jpg';
import ss3 from '../assets/images/ss3.jpg';
import file1 from '../assets/images/file1.png';
import file2 from '../assets/images/file2.jpg'; 
import file3 from '../assets/images/file3.png';
import file4 from '../assets/images/file4.jpg';
import file5 from '../assets/images/file5.jpg';

export default function Services() {
    const products = [
  {
    id: 1,
    image: file1, 
    title: "Engine lights on?",
    description: "Free check engine light diagnostics.",
  },
  {
    id: 2,
    image: file3,
    title: "Oil Recycling",
    description: "Recycle your used oil safely with us.",
  },
  {
    id: 3,
    image: file2,
    title: "Battery Testing",
    description: "Test your car battery for free in-store.",
  },
  {
    id: 4,
    image: file4,
    title: "Get it Fast",
    description: "Pick up in-store today.",
  },
  {
    id: 5,
    image: file5,
    title: "Shop Referral",
    description: "Get referred to trusted local shops.",
  },
];


  const articles = [
    {
      id: 1,
      image: ss3,
      title: 'Stay Cool: Easy Ways to Keep Your Car Comfortable in Hot Weather',
      description: 'Summer heat can take a toll on both your car and your comfort. Learn practical tips to reduce interior heat, protect your dashboard, and ensure your AC system works efficiently.',
      category: 'Cooling'
    },
    {
      id: 2,
      image: ss2,
      title: 'What to Do If Your Car Tire Comes Loose While Driving',
      description: 'A loose or wobbly tire on the road can be dangerous. Learn how to recognize early warning signs, what immediate steps to take if it happens, and how to prevent it with proper tire maintenance and tightening practices.',
      category: 'Grip'
    },
    {
      id: 3,
      image: ss1,
      title: 'Smart Maintenance Tips to Keep Your Car in Top Condition.',
      description: 'Regular car maintenance doesn’t have to be complicated. From checking fluids and belts to scheduling timely services, here’s how to keep your car running smoothly and avoid costly repairs.',
      category: 'Maintenance'
    }
  ];

  return (
    <>
      {/* OUR SERVICES Banner (looks like a navbar) */}
      <div className="w-full bg-gray-700 text-white text-center py-4 px-2.5 z-20 shadow-md flex flex-wrap justify-center items-center">
        <span className="text-2xl md:text-4xl font-extrabold tracking-wide mr-4 md:mr-8 mb-2 md:mb-0">OUR SERVICES</span>
      </div>
      {/* Services Links Bar */}
      <div className="w-full bg-gray-600 text-white text-center py-2 px-1 z-10 shadow flex flex-nowrap justify-center items-center text-xs sm:text-sm md:text-lg font-semibold">
        <a href="#" className="hover:underline px-1 sm:px-2 md:px-3">CHECK ENGINE LIGHT TESTING</a>
        <span className="mx-1 text-base md:text-2xl font-light">/</span>
        <a href="#" className="hover:underline px-1 sm:px-2 md:px-3">BATTERY TESTING &amp; CHARGING </a>
        <span className="mx-1 text-base md:text-2xl font-light">/</span>
        <a href="#" className="hover:underline px-1 sm:px-2 md:px-3">LOAN-A-TOOL</a>
        <span className="mx-1 text-base md:text-2xl font-light">/</span>
        <a href="#" className="hover:underline px-1 sm:px-2 md:px-3">RECYCLING</a>
        <span className="mx-1 text-base md:text-2xl font-light">/</span>
        <a href="#" className="hover:underline px-1 sm:px-2 md:px-3">SHOP REFERRAL</a>
      </div>

      {/* SUMMER SAVINGS Section */}
      <div className="relative text-white text-center pt-10 mt-2 overflow-visible">
        {/* Background Image with blur */}
        <div className="absolute inset-0 bg-[url('./assets/images/BgVendor-dashboard.jpg')] bg-cover bg-center blur-sm"></div>
        {/* Black overlay for opacity */}
        <div className="absolute inset-0 bg-black/50 blur-sm"></div>
        {/* Content */}
        <div className="relative z-10">
          <div className="mx-auto bg-black/60 rounded-lg px-4 py-4 flex flex-col items-center justify-center"
               style={{ maxWidth: "520px", minHeight: "220px" }}>
            <h2 className="text-lg md:text-2xl font-extrabold mb-2 tracking-wide text-center">ABOUT</h2>
            <p className="mb-1 text-xs md:text-sm text-center">
              At Prime Auuttos, we connect trusted auto part vendors with car owners who need reliable parts — fast. Our platform makes it easy for sellers to showcase their products while giving buyers a simple way to browse, compare, and find exactly what they need.
            </p>
            <p className="mb-2 text-xs md:text-sm text-center">
              We also offer helpful tips, expert advice, and car care resources to keep your vehicle running smoothly — because we believe great service goes beyond just selling parts.
            </p>
          </div>
          {/* Cards Row */}
          <div
            className="flex justify-start md:justify-center gap-4 md:gap-6 mt-10 -mb-32 overflow-x-auto px-2 scrollbar-thin scrollbar-thumb-gray-400"
            style={{ position: "relative", top: "64px" }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg border-2 border-orange-500 shadow-2xl w-44 h-60 md:w-48 md:h-64 flex-shrink-0 flex flex-col overflow-hidden"
              >
                <div className="flex-1 flex flex-col justify-center px-2 md:px-3 text-center mt-3">
                  <h3 className="font-bold text-gray-800 uppercase text-base md:text-lg mb-1">{product.title}</h3>
                  <p className="text-gray-500 text-xs">{product.description}</p>
                </div>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-28 md:h-32 object-cover"
                  style={{ marginTop: 0, marginBottom: 0, display: 'block' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Services Section */}
      <section className="flex flex-col md:flex-row justify-around gap-6 md:gap-0 p-5 bg-white mt-48">
        <div className="text-center mb-6 md:mb-0 flex flex-col items-center">
          <Settings size={40} className="text-orange-500 mb-2" />
          <p className="font-semibold text-sm md:text-base">
            FREE IN-STORE PARTS TESTING<br />
            <span className="font-normal">We'll check your alternator, starter, battery and more.</span>
          </p>
        </div>
        <div className="text-center mb-6 md:mb-0 flex flex-col items-center">
          <Wrench size={40} className="text-orange-500 mb-2" />
          <p className="font-semibold text-sm md:text-base">
            LOAN-A-TOOL®<br />
            <span className="font-normal">Need a tool? Borrow one of ours.</span>
          </p>
        </div>
        <div className="text-center flex flex-col items-center">
          <ScanLine size={40} className="text-orange-500 mb-2" />
          <p className="font-semibold text-sm md:text-base">
            FREE FIX FINDER SERVICE<br />
            <span className="font-normal">Check engine light on?</span>
          </p>
        </div>
      </section>

      {/* Trending Articles Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">TRENDING ARTICLES</h2>
            <div className="w-26 h-1 bg-orange-500"></div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <div key={article.id} className="bg-gray-50 rounded-sm shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                {/* Article Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Article Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {article.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Future Plans Section */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Coming Soon!</h2>
          <p className="text-gray-700 mb-8 text-sm md:text-base">
            At Prime Auuttos, we're always working to make your automotive experience better. Here’s a sneak peek at what we’re planning for the future:
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="bg-white rounded-lg shadow p-6 flex-1">
              <h3 className="text-lg font-semibold text-orange-600 mb-2">Rent a Car</h3>
              <p className="text-gray-600 text-sm">Easily rent a car for your trips, errands, or special occasions—right from our platform.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 flex-1">
              <h3 className="text-lg font-semibold text-orange-600 mb-2">Buy a Car</h3>
              <p className="text-gray-600 text-sm">Browse and purchase quality vehicles from trusted sellers, with full transparency and support.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 flex-1">
              <h3 className="text-lg font-semibold text-orange-600 mb-2">Book a Driver</h3>
              <p className="text-gray-600 text-sm">Need a professional driver? Book one for your next journey, event, or business trip.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}