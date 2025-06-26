import { useState } from 'react';
import { Upload, File } from 'lucide-react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { apiClient } from '../api/client';
import { toast } from 'react-toastify';





export default function PostAdvert() {

    const postAdvert = async (data) => {
        const token = localStorage.getItem('token');
        try {
            const response = await apiClient.post('/adverts', data, {
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`
                } 
            });;

            console.log(response);
            if(response.success === 200 || 201) {
                toast.success("Ad added successfully")
            }
            // Navigate("/");
        } catch (error) {
            console.log(error);
        if (error) {
            toast.success(error.message);
        }
        }
    };

    return (

        <>

            <div className="min-h-screen bg-gray-100 p-4 bg-[url('./assets/images/dashboardbg.jpg')] bg-cover bg-center rounded-md">
                <div className="max-w-2xl mx-auto">
                    {/* Heade acr */}


                    {/* Form */}
                    <form action={postAdvert} className="bg-white rounded-lg shadow-sm p-8">

                        <div className="mb-8">
                            <h1 className="bg-gray-700 text-3xl font-bold text-white p-6 text-center rounded-md">Post New Advert</h1>

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

                            {/* Make, Model and Price */}
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex flex-col flex-1">
                                    <label className="text-sm font-medium text-gray-700 mb-2">
                                        Make <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="Make"

                                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                                        required
                                    >
                                        <option> Toyota </option>
                                        <option> Nissan </option>
                                        <option> Honda </option>
                                        <option> Mitsubishi </option>
                                        <option> Mazda </option>
                                        <option> Suzuki </option>
                                        <option> Subaru </option>
                                        <option> Isuzu </option>
                                        <option> Hyundai </option>
                                        <option> Kia </option>
                                        <option> Daewoo </option>
                                        <option> Benz </option>
                                        <option> BMW </option>
                                        <option> VW </option>
                                        <option> Audi </option>
                                        <option> Opel </option>
                                        <option> Ford </option>
                                        <option> Chevrolet </option>
                                        <option> Chrysler </option>
                                        <option> Cadillac </option>
                                        <option> GMC </option>
                                        <option> Dodge </option>
                                        <option> Peugeot </option>
                                        <option> Renault </option>
                                        <option> Citroen </option>
                                        <option> Land Rover </option>
                                        <option> Range Rover </option>
                                        <option> MG </option>
                                        <option> Jaguar </option>
                                        <option> Mini </option>
                                        <option> Changan </option>
                                        <option> Geely </option>
                                        <option> JAC </option>
                                        <option> Mahindra </option>
                                        <option> Lexus </option>
                                        <option> Infiniti </option>
                                        <option> Hummer </option>
                                        <option> Porsche </option>
                                        <option> Tesla </option>

                                    </select>
                                </div>

                                <div className="flex flex-col flex-1">
                                    <label className="text-sm font-medium text-gray-700 mb-2">
                                        Model <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="Model"

                                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                                        required
                                    >

                                        <option>Camry</option>
                                        <option>Corolla</option>
                                        <option>Yaris/Vitz</option>
                                        <option>Rav4</option>
                                        <option>Land Cruiser</option>
                                        <option>Prado</option>
                                        <option>Avensis</option>
                                        <option>Highlander</option>
                                        <option>Matrix</option>
                                        <option>Fortuner</option>
                                        <option>Altima</option>
                                        <option>Agyo</option>
                                        <option>Sentra</option>
                                        <option>Rogue</option>
                                        <option>Pathfinder</option>
                                        <option>Patrol</option>
                                        <option>X-trail</option>
                                        <option>Versa</option>
                                        <option>Hardbody</option>
                                        <option>Frontier</option>
                                        <option>Civic</option>
                                        <option>Accord</option>
                                        <option>CR-V</option>
                                        <option>Passport</option>
                                        <option>Pilot</option>
                                        <option>City</option>
                                        <option>Insight</option>
                                        <option>Fit</option>
                                        <option>L200</option>
                                        <option>Pajero</option>
                                        <option>Outlander</option>
                                        <option>Galant</option>
                                        <option>ASX</option>
                                        <option>Eclipse Cross</option>
                                        <option>Mazda 3</option>
                                        <option>Mazda 6</option>
                                        <option>CX-5</option>
                                        <option>CX-9</option>
                                        <option>Bongo</option>
                                        <option>BT-50</option>
                                        <option>Alto</option>
                                        <option>Swift</option>
                                        <option>Vitara</option>
                                        <option>Jimny</option>
                                        <option>Celerio</option>
                                        <option>Forester</option>
                                        <option>Legacy</option>
                                        <option>Impreza</option>
                                        <option>Outback</option>
                                        <option>Crosstrek</option>
                                        <option>Elantra</option>
                                        <option>Accent</option>
                                        <option>Elantra</option>
                                        <option>i10</option>
                                        <option>i20</option>
                                        <option>i30</option>
                                        <option>ix35/Tucson</option>
                                        <option>Sonata</option>
                                        <option>Creta</option>
                                        <option>Santa Fe</option>
                                        <option>Palisade</option>
                                        <option>Picanto</option>
                                        <option>Cerato</option>
                                        <option>Rio</option>
                                        <option>sportage</option>
                                        <option>Sorento</option>
                                        <option>Optima</option>
                                        <option>Carens</option>
                                        <option>Morning</option>
                                        <option>Odyssey</option>
                                        <option>Serena</option>
                                        <option>Sierra</option>
                                        <option>E-Class</option>
                                        <option>S-Class</option>
                                        <option>GLE</option>
                                        <option>ML</option>
                                        <option>GLS</option>
                                        <option>C-Class</option>
                                        <option>Sprinter</option>
                                        <option>E46</option>
                                        <option>E90</option>
                                        <option>F30</option>
                                        <option>E60</option>
                                        <option>F10</option>
                                        <option>X3</option>
                                        <option>X5</option>
                                        <option>X6</option>
                                        <option>X7</option>
                                        <option>7series</option>
                                        <option>Golf</option>
                                        <option>Passat</option>
                                        <option>Polo</option>
                                        <option>Jetta</option>
                                        <option>Tiguan</option>
                                        <option>Toureg</option>
                                        <option>A4</option>
                                        <option>A6</option>
                                        <option>Q5</option>
                                        <option>q7</option>
                                        <option>A3</option>
                                        <option>RS4</option>
                                        <option>RS7</option>
                                        <option>Edge</option>
                                        <option>Explorer</option>
                                        <option>F-150</option>
                                        <option>F-350</option>
                                        <option>Focus</option>
                                        <option>Fusion</option>
                                        <option>Ranger</option>
                                        <option>Cruze</option>
                                        <option>Aveo</option>
                                        <option>Equinox</option>
                                        <option>Spark</option>
                                        <option>Malibu</option>
                                        <option>Spark</option>
                                        <option>Silverado</option>
                                        <option>Camaro</option>
                                        <option>Colorado</option>
                                        <option>Sierra</option>
                                        <option>Yukon</option>
                                        <option>CTS</option>
                                        <option>206</option>
                                        <option>207</option>
                                        <option>301</option>
                                        <option>307</option>
                                        <option>508</option>
                                        <option>Logan</option>
                                        <option>Koleos</option>
                                        <option>Duster</option>
                                        <option>Sandero</option>
                                        <option>Kangoo</option>
                                        <option>Evoque</option>
                                        <option>Defender</option>
                                        <option>Velar</option>
                                        <option>Voque</option>
                                        <option>Freelander</option>
                                        <option>HSE</option>
                                        <option>Sports</option>
                                        <option>MG3</option>
                                        <option>MG ZS</option>
                                        <option>Alsvin</option>
                                        <option>CS35</option>
                                        <option>CS75</option>
                                        <option>Emgrand</option>
                                        <option>Coolray</option>
                                        <option>Vision</option>
                                        <option>Scorpio</option>
                                        <option>Bolero</option>
                                        <option>S2</option>
                                        <option>T6 pickup</option>
                                        <option>Model S</option>
                                        <option>Model 3</option>
                                        <option>Model Xr</option>
                                        <option>Model Y</option>
                                        <option>Astra</option>
                                        <option>Corsa</option>
                                        <option>Vectra</option>
                                        <option>Chrysler 300 / 300C </option>
                                        <option>Sebring </option>
                                        <option>Omega </option>
                                        <option>Omega </option>
                                        <option>Omega </option>
                                        <option>Omega </option>


                                    </select>
                                </div>


                                Year
                                <div className="flex flex-col flex-1">
                                    <label className="text-sm font-medium text-gray-700 mb-2 ">
                                        Location <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative flex items-center">

                                        <input
                                            type="text"
                                            name="location"

                                            placeholder="eg; 1995"
                                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                                            required
                                            min="1985"
                                            max="2025"
                                        />
                                    </div>
                                </div>

                            </div>

                            {/* Brand, Part Number, and Condition Row */}
                            <div className="flex flex-col lg:flex-row gap-6">
                                {/* Brand */}
                                <div className="flex flex-col flex-1">
                                    <label className="text-sm font-medium text-gray-700 mb-2">
                                        Item <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="item"

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
                                    <Upload className="w-4 h-4 text-black" />
                                    <label className="text-sm font-medium text-black">Product Image</label>
                                </div>
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 flex flex-col items-center text-center">
                                    <div className="text-blue-600 mb-2">
                                        <Upload className="w-8 h-8 mx-auto mb-2" />
                                    </div>
                                    <input type="file" name='images' className='flex justify-center items-center ml-10 border rounded-md bg-gray-100' />

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