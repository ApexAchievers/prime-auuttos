import React from 'react';
import { Mail, MapPin, Package, Briefcase, Facebook, Twitter, Youtube, Instagram, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      {/* Newsletter Section */}
      <div className="bg-gray-700 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Mail className="w-6 h-6 text-orange-700" />
            <div>
              <h3 className="text-lg font-bold">GET IN THE ZONE</h3>
              <p className="text-sm text-gray-300">SignUp Now to get the latest deals, Best Offers, and original products.</p>
            </div>
          </div>
          <div className="flex gap-2 w-full md:w-auto max-w-md">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-4 py-2 bg-white text-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-orange-700"
            />
            <button className="bg-gray-600 hover:bg-gray-500 px-4 py-2 rounded transition-colors">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Quick Actions Bar */}
      <div className="bg-gray-800 py-4 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-3">
            <MapPin className="w-6 h-6 text-orange-700" />
            <span className="text-white font-medium">Locate A Store</span>
          </div>
          <div className="flex items-center gap-3">
            <Package className="w-6 h-6 text-orange-700" />
            <span className="text-white font-medium">Track Your Order</span>
          </div>
          <div className="flex items-center justify-between">
            {/* <div className="flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-orange-700" />
              <span className="text-white font-medium">We're Hiring!</span>
            </div> */}
            <div className="flex gap-4">
              <Facebook className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* SHOP */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">SHOP</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Prime Auuttos Locations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Vehicle Make</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Vehicle Model</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shop All Brands</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Vehicle VIN Lookup</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gift Cards</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Discounts & Coupons</a></li>
            </ul>
          </div>

          {/* PRODUCTS */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">CATEGORIES</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Body & Exterior</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Interior Components</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bike Parts &  Accessories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Suspension & Steering</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Braking System</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Fluid and Lubricants</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cycling Essentials</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Climate & Comfort</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Electrical & Battery System</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lights & Indicators</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Transmission & Drivetrain</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Engine & Mechanical Components</a></li>
            </ul>
          </div>

          {/* HELP */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">HELP</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/contact" className="hover:text-white transition-colors">Track My Order</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">My Account</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">FAQs</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Return Policies</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Product Recalls</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Product Ingredient</Link></li>
            </ul>
          </div>

          {/* ABOUT US */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">ABOUT US</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li> <Link to="/vendor-dashboard" className="hover:text-white transition-colors">Vendor Information</Link></li>
              <li><Link to={"/"} className="hover:text-white transition-colors">User Information</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">National Account/Fleet</Link></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">SERVICES</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/vendor-dashboard" className="hover:text-white transition-colors">
                  Buy Online, Pick Up in Store
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Loan-A-Tool
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Repair Help
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Mobile App
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Find a Repair Shop
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-900 py-4">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Prime Auuttos. All rights reserved.
        </div>
      </div>
    </footer>
  );
}