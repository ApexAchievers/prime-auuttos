import Footer from "../components/Footer";
import React from 'react';
import { Mail, Phone, MessageCircle, Info } from 'lucide-react';

export default function Contact() {
    return(
        <>
        <div className="max-w-6xl mx-auto bg-white p-16 sm:p-8 md:p-12 lg:p-16 rounded-lg shadow-lg">
      {/* Header */}
      <div className="text-center mb-12 sm:mb-8 md:mb-10 lg:mb-12">
        <h1 className="text-5xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 mb-6 sm:mb-4 md:mb-5 lg:mb-6">Get In Touch</h1>
        <p className="text-gray-600 text-lg sm:text-base md:text-lg leading-relaxed px-4 sm:px-0">
          We would love to hear from you. Please use any of the methods below to contact us.
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-16 sm:gap-8 md:gap-12 lg:gap-16 mb-8 sm:mb-6 md:mb-7 lg:mb-8">
        {/* Contact Methods */}
        <div>
          <h2 className="text-3xl sm:text-2xl md:text-3xl font-normal text-gray-800 mb-8 sm:mb-6 md:mb-7 lg:mb-8">Contact Methods</h2>
          
          <div className="space-y-6 sm:space-y-4 md:space-y-5 lg:space-y-6">
            <div className="flex items-center">
              <MessageCircle className="w-6 h-6 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-600 mr-4 sm:mr-3 md:mr-4 flex-shrink-0" />
              <span className="text-gray-600 text-base sm:text-sm md:text-base">Facebook Messenger</span>
            </div>
            
            <div className="flex items-center">
              <Mail className="w-6 h-6 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-600 mr-4 sm:mr-3 md:mr-4 flex-shrink-0" />
              <span className="text-gray-600 text-base sm:text-sm md:text-base break-all">info@primeauttos.com</span>
            </div>
          </div>
        </div>

        {/* Office Info */}
        <div>
          <h2 className="text-3xl sm:text-2xl md:text-3xl font-normal text-gray-800 mb-8 sm:mb-6 md:mb-7 lg:mb-8">How To Get Us</h2>
          
          <div className="text-gray-600 text-base sm:text-sm md:text-base leading-relaxed space-y-1">
            <div className="font-bold text-gray-800 mb-3 sm:mb-2 md:mb-3">PRIME AUUTTOS</div>
            <div>28TH High Street</div>
            <div>East Legon</div>
            <div>Accra</div>
            <div>G1-193-997</div>
            
            <div className="flex items-center mt-4 pt-2 sm:mt-3 sm:pt-1 md:mt-4 md:pt-2">
              <Phone className="w-5 h-5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-600 mr-3 sm:mr-2 md:mr-3 flex-shrink-0" />
              <span>050 156 2407</span>
            </div>
          </div>
        </div>
      </div>

      {/* Notice Box */}
      <div className="bg-orange-700 text-white p-6 sm:p-4 md:p-5 lg:p-6 rounded-lg flex sm:flex-col md:flex-row items-start mt-8 sm:mt-6 md:mt-7 lg:mt-8">
        <Info className="w-6 h-6 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white mr-4 sm:mr-0 sm:mb-2 md:mr-4 md:mb-0 flex-shrink-0 mt-0.5 sm:mt-0 md:mt-0.5" />
        <div className="text-base sm:text-sm md:text-base leading-relaxed">
          <strong className="font-semibold">Please note:</strong> This is not pur office location. We do not take orders here or by phone. All orders must be strictly placed through our website.
        </div>
      </div>
    </div>
    <Footer/>
        </>
    )
}
