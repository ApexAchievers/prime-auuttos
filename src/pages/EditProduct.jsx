import { SquarePen } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Moon } from 'lucide-react';
import { useSearchParams, useNavigate } from 'react-router';
import Footer from '../components/Footer';
import { apiClient } from '../api/client';






export default function EditProduct() {

    const navigate = useNavigate();

    const [SearchParams] = useSearchParams();
    const id = SearchParams.get("id");

    const [product, setProduct] = useState({});

    const getProduct = () => {
        apiClient
            .get(`/adverts/685b0b86f6f4ccaabeef3a85${id}`)
            .then((response) => {
                console.log(response.data);
                setBook(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(getProduct, []);

    const putProduct = async (data) => {
        // Post Data To Api
        try {
            const response = await apiClient
                .put(`/adverts/685b391a64084798adbc254b${id}`, data, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
            console.log(response);
            navigate(-1);

        } catch (error) {
            console.log(error);
        }
    };

    return (

        <>
            <button

                className="fixed top-4 right-4 z-50 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md border border-gray-300 dark:border-gray-600 hover:scale-105 transition-transform"
                aria-label="Toggle dark mode"
            >
                <Moon className="w-5 h-5 text-black dark:text-white" />
            </button>

            <div className="min-h-screen bg-gray-100 p-4">
                <div className="max-w-2xl mx-auto">
                    {/* Header */}


                    {/* Form */}
                    <form action={putProduct} className="bg-white rounded-lg shadow-sm p-8">
                        <div className="mb-6">
                            <h1 className="bg-gray-700 text-3xl font-bold text-white p-6 text-center rounded-md">Edit Advert</h1>

                        </div>
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
                                        name="title"

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

                                        className="w-full px-4 py-2 border-1 text-gray-700 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                                        required
                                    >
                                        <option selected>select your category</option>
                                        <option >Engine & Mechanical Components</option>
                                        <option>Suspension and Steering</option>
                                        <option>Braking System</option>
                                        <option>Electrical & Battery System</option>
                                        <option>Lights & Indicators</option>
                                        <option>Climate & Comfort</option>
                                        <option>Body & Exterior</option>
                                        <option>Interior Components</option>

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

                                        className="w-full px-4 py-3 border text-gray-700 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                                        required
                                    >

                                        <option> New </option>
                                        <option> Used </option>

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

                                    placeholder="Provide detailed information about the part, compatibility, features, and any other relevant details..."
                                    rows={5}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                    required
                                />
                            </div>

                            {/* Product Image Upload */}
                            <div className="flex flex-col">
                                <div className="flex items-center gap-2 mb-2">
                                    <SquarePen className="w-4 h-4 text-black" />
                                    <label className="text-sm font-medium text-black">Product Image</label>
                                </div>
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 flex flex-col items-center text-center">
                                    <div className="text-blue-600 mb-2">
                                        <SquarePen className="w-8 h-8 mx-auto mb-2" />
                                    </div>
                                    <input name='images' type="file" className='flex justify-center items-center ml-10 border rounded-md bg-gray-100' />

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
                                    <SquarePen className="w-4 h-4" />
                                    Edit
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