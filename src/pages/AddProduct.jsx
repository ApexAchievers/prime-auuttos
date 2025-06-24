import { useState } from 'react';
import { Upload, File } from 'lucide-react';
import Navbar from '../components/Navbar';      
import Footer from '../components/Footer';


export default function PostAdvert() {
    const [formData, setFormData] = useState({
        productTitle: '',
        price: '',
        category: '',
        brand: '',
        partNumber: '',
        condition: 'New',
        description: '',
        images: []
    });

    const categories = [
        'Select Category',
        'Braking System',
        'Engine Parts',
        'Transmission',
        'Suspension',
        'Electrical',
        'Body Parts',
        'Interior',
        'Tires & Wheels',
        'Filters',
        'Lighting'
    ];

    const conditions = ['New', 'Used', 'Refurbished'];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission logic here
    };

  

    return (

        <>
        

        <div className="min-h-screen bg-gray-100 p-4">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Post New Advert</h1>
                    <p className="text-gray-600">List your auto parts for sale</p>
                </div>

                {/* Form */}
                <form className="bg-white rounded-lg shadow-sm p-8">
                    <div className="flex flex-col gap-4">
                        {/* Product Title */}
                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-gray-700 mb-2">
                                Product Title <span className="text-red-500">*</span>
                            </label>
                            <div className="relative flex items-center">
                                <span className="absolute left-3 text-gray-400">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                    </svg>
                                </span>
                                <input
                                    type="text"
                                    name="productTitle"
                                    value={formData.productTitle}
                                    onChange={handleInputChange}
                                    placeholder="e.g., Premium Brake Pads Set - Front"
                                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                />
                            </div>
                        </div>

                        {/* Price and Category Row */}
                        <div className="flex flex-col md:flex-row gap-6">
                            {/* Price */}
                            <div className="flex flex-col flex-1">
                                <label className="text-sm font-medium text-gray-700 mb-2">
                                    Price (GHc) <span className="text-red-500">*</span>
                                </label>
                                <div className="relative flex items-center">
                                    <span className="absolute left-3 text-gray-500 font-medium">
                                        Ghc
                                    </span>
                                    <input
                                        type="number"
                                        name="price"
                                        value={formData.price}
                                        onChange={handleInputChange}
                                        placeholder="49.99"
                                        className=" pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        required
                                        min="0"
                                        step="0.01"
                                    />
                                </div>
                            </div>

                            {/* Category */}
                            <div className="flex flex-col flex-1">
                                <label className="text-sm font-medium text-gray-700 mb-2">
                                    Category <span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                                    required
                                >
                                    {categories.map((category, index) => (
                                        <option key={index} value={index === 0 ? '' : category} disabled={index === 0}>
                                            {category}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Brand, Part Number, and Condition Row */}
                        <div className="flex flex-col lg:flex-row gap-6">
                            {/* Brand */}
                            <div className="flex flex-col flex-1">
                                <label className="text-sm font-medium text-gray-700 mb-2">
                                    Brand <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="brand"
                                    value={formData.brand}
                                    onChange={handleInputChange}
                                    placeholder="e.g., Brembo"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                />
                            </div>

                            {/* Part Number */}
                            <div className="flex flex-col flex-1">
                                <label className="text-sm font-medium text-gray-700 mb-2">
                                    Part Number
                                </label>
                                <input
                                    type="text"
                                    name="partNumber"
                                    value={formData.partNumber}
                                    onChange={handleInputChange}
                                    placeholder="e.g., BP-HC18-F"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            {/* Condition */}
                            <div className="flex flex-col flex-1">
                                <label className="text-sm font-medium text-gray-700 mb-2">
                                    Condition <span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="condition"
                                    value={formData.condition}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                                    required
                                >
                                    {conditions.map((condition, index) => (
                                        <option key={index} value={condition}>
                                            {condition}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-gray-700 mb-2">
                                Description <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                placeholder="Provide detailed information about the part, compatibility, features, and any other relevant details..."
                                rows={5}
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                required
                            />
                        </div>

                        {/* Product Image Upload */}
                        <div className="flex flex-col">
                            <div className="flex items-center gap-2 mb-2">
                                <Upload className="w-4 h-4 text-black" />
                                <label className="text-sm font-medium text-black">Product Image</label>
                            </div>
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 flex flex-col items-center text-center">
                                <div className="text-blue-600 mb-2">
                                    <Upload className="w-8 h-8 mx-auto mb-2" />
                                </div>
                                <input type="file" className='flex justify-center items-center ml-10 border rounded-md bg-gray-100' />

                                <p className="text-sm text-blue-700 mb-1">
                                    Upload an image of your product,
                                </p>
                                <p className="text-sm text-blue-700">
                                    you would be able to upload your own product images here.
                                </p>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row justify-end gap-4 pt-6">
                            <button
                                type="button"
                              
                                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition-colors flex items-center justify-center"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-400 font-medium transition-colors flex items-center justify-center gap-2"
                            >
                                <Upload className="w-4 h-4" />
                                Post Advert
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <Footer />
        </>



    );
}