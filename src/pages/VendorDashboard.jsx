import { Plus, Edit, Trash2, Eye, ToggleLeft, ToggleRight } from 'lucide-react';



export default function VendorDashboard() {

    const advert = [
        {
            id: 1,
            image: '/images/parts/brake-pads.jpg',
            title: 'Ceramic Brake Pads',
            brand: 'Bosch',
            category: 'Braking System',
            status: 'In Stock',
            created: '2025-06-01T10:00:00Z',
        },
       

    ];

    return (


        <div className="p-6 bg-cover min-h-screen bg-[url('./assets/images/dashboardbg.jpg')]">
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Vendor Dashboard</h1>
                    <p className="text-gray-800 mt-1">Manage your <span className="text-blue-500">Ads</span></p>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-lg">
                    + Post New Advert
                </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-white p-6 rounded-lg shadow">
                    <p className="text-gray-700 font-semibold mb-2">Total Adverts</p>
                    <p className="text-blue-600 text-4xl font-bold">0</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <p className="text-gray-700 font-semibold mb-2">Active Adverts</p>
                    <p className="text-green-600 text-4xl font-bold">0</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <p className="text-gray-700 font-semibold mb-2">Inactive Adverts</p>
                    <p className="text-gray-600 text-4xl font-bold">0</p>
                </div>
            </div>

            {/* No Adverts Section */}
            <div className="bg-gray-100 opacity-80 rounded-lg shadow p-10 text-center">
                <h2 className="text-xl font-semibold mb-2">Your Adverts</h2>
                <div className="text-gray-400 text-5xl mb-4">+</div>
                <p className="text-gray-700 font-medium mb-1">No adverts yet</p>
                <p className=" mb-4">Post your first Ad, your Customers waiting!!</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg">
                    + Post Your First Advert
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 ">
                <h2 className="text-xl font-semibold mb-4">Your Adverts</h2>
                <table className="w-full text-left">
                    <thead className="text-gray-500 uppercase text-sm border-b">
                        <tr>
                            <th className="py-2">Product</th>
                            <th className="py-2">Price</th>
                            <th className="py-2">Category</th>
                            <th className="py-2">Status</th>
                            <th className="py-2">Created</th>
                            <th className="py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {advert.map((ad) => (
                            <tr key={advert.id} className="border-b last:border-b-0">
                                {/* Product */}
                                <td className="py-3 flex items-center gap-4">
                                    <img
                                        src={advert.image}
                                        alt={advert.title}
                                        className="w-12 h-12 rounded object-cover"
                                    />
                                    <div>
                                        <p className="font-medium text-black">{advert.title}</p>
                                        <p className="text-sm text-black">{advert.brand}</p>
                                    </div>
                                </td>

                                {/* Price */}
                                <td className="py-3 font-semibold text-black">{advert.price}</td>

                                {/* Category */}
                                <td className="py-3">
                                    <span className="bg-blue-100 text-black px-3 py-1 text-sm rounded-full">
                                        {advert.category}
                                    </span>
                                </td>

                                {/* Status */}
                                <td className="py-3 text-green-600 font-medium flex items-center gap-1">
                                    <span className="text-green-500">🟢</span> {advert.status}
                                </td>

                                {/* Created */}
                                <td className="py-3 text-gray-500">{advert.created}</td>

                                {/* Actions */}
                                <td className="py-3 flex gap-3 text-lg">
                                    <button title="View" className="text-blue-600 hover:opacity-75">
                                        <Eye />
                                    </button>
                                    <button title="Edit" className="text-green-600 hover:opacity-75">
                                        <Edit />
                                    </button>
                                    <button title="Delete" className="text-red-600 hover:opacity-75">
                                        <Trash2 />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


        </div>



    );
}
