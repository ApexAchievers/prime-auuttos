import { useEffect, useState } from 'react';
import { Plus, Edit, Trash2, Eye, ToggleLeft, ToggleRight, ChevronLeft, ChevronRight, LogOut, User, X, Settings, Search, Filter, Camera, Upload } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import PostAdvert from './AddProduct';
import Footer from '../components/Footer';
import useSWR from 'swr';
import { apiFetcher } from '../api/client';



export default function VendorDashboard() {
    const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : false;
    const roleChecker = user.role == 'vendor' ? true : false;

    const [currentPage, setCurrentPage] = useState(1);
    const [showProfileModal, setShowProfileModal] = useState(false);
    const navigate = useNavigate();
    const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
    const [showFilters, setShowFilters] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({ category: '', status: '', brand: '' });
    const [profileData, setProfileData] = useState({
        name: 'Kojo Oppong',
        email: 'princedarf1@gmail.com',
        phone: '+233 24 123 4567',
        company: 'Auto Parts Ghana',
        address: 'Accra, Ghana'
    });


    const itemsPerPage = 10;

    const [advert, setAdvert] = useState([]);
    const { data, error, isLoading } = useSWR("/adverts/my-adverts", apiFetcher);
    // useEffect(() => {

        console.log(data);
        
        

    // }, []);


    // Get unique values for filter Monastero Maggiorefilter options
    const categories = [...new Set(advert.map(ad => ad.category))];
    const brands = [...new Set(advert.map(ad => ad.brand))];
    const statuses = [...new Set(advert.map(ad => ad.status))];

    // Filter and search logic
    const filteredAdverts = advert.filter(ad => {
        const matchesSearch = ad.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            ad.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
            ad.category.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesCategory = !filters.category || ad.category === filters.category;
        const matchesStatus = !filters.status || ad.status === filters.status;
        const matchesBrand = !filters.brand || ad.brand === filters.brand;

        return matchesSearch && matchesCategory && matchesStatus && matchesBrand;
    });

    // Pagination logic
    const totalPages = Math.ceil(filteredAdverts.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentAdverts = filteredAdverts.slice(startIndex, startIndex + itemsPerPage);

    const goToPage = (page) => {
        setCurrentPage(page);
    };

    const handleFilterChange = (filterType, value) => {
        setFilters(prev => ({
            ...prev,
            [filterType]: value
        }));
        setCurrentPage(1);
    };

    const clearFilters = () => {
        setFilters({
            category: '',
            status: '',
            brand: ''
        });
        setSearchTerm('');
        setCurrentPage(1);
    };

    const handleProfileUpdate = () => {
        console.log('Profile updated:',);
        setShowProfileModal(false);
    };

    const handleLogout = () => {
        console.log('Logging out...');
        localStorage.clear();
        navigate('/login')
        setShowLogoutConfirm(false);
    };

    const handleInputChange = (field, value) => {
        setProfileData(prev => ({
            ...prev,
            [field]: value
        }));
    };
    useEffect(() => {
        if (!user) {
            navigate('/login')
            return;
        }
        !roleChecker ? navigate('/') : true;
    }, []);

    const renderAdverts = () => {
        return currentAdverts.map((ad) => (
            <tr key={ad.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-150">
                <td className="py-2 px-4 sm:px-3">
                    <div className="flex items-center gap-2">
                        <img
                            src={ad.image}
                            alt={ad.title}
                            className="w-8 h-8 rounded object-cover flex-shrink-0"
                        />
                        <span className="text-xs sm:text-sm font-medium text-gray-900">{ad.title}</span>
                    </div>
                </td>
                <td className="py-2 px-4 sm:px-3 text-xs sm:text-sm font-semibold text-gray-900">{ad.price}</td>
                <td className="py-2 px-4 sm:px-3 text-xs sm:text-sm text-gray-600 hidden sm:table-cell">{ad.category}</td>
                <td className="py-2 px-4 sm:px-3 text-xs sm:text-sm text-gray-600 hidden sm:table-cell">{ad.brand}</td>
                <td className="py-2 px-4 sm:px-3">
                    <span className={`inline-flex px-2 py-0.5 text-xs sm:text-sm font-medium rounded-full ${ad.status === 'Available'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-800'
                        }`}>
                        {ad.status}
                    </span>
                </td>
                <td className="py-2 px-4 sm:px-3 text-xs sm:text-sm text-gray-600 hidden md:table-cell">
                    {new Date(ad.created).toDateString()}
                </td>

                {/*Table icons */}
                <td className="py-2 px-4 sm:px-3">
                    <div className="flex gap-1 justify-center">
                        <Link to="/view-product">
                            <button
                                className="w-6 h-6 flex items-center justify-center rounded bg-blue-50 text-blue-600 hover:bg-blue-100 hover:scale-110 transition-all duration-200"
                                title="View"
                            >
                                <Eye size={12} />
                            </button>
                        </Link>
                        <Link to="/edit-product">
                            <button
                                className="w-6 h-6 flex items-center justify-center rounded bg-green-50 text-green-600 hover:bg-green-100 hover:scale-110 transition-all duration-200"
                                title="Edit"
                            >
                                <Edit size={12} />
                            </button>
                        </Link>
                        <Link>
                            <button
                                className="w-6 h-6 flex items-center justify-center rounded bg-red-50 text-red-600 hover:bg-red-100 hover:scale-110 transition-all duration-200"
                                title="Delete"
                            >
                                <Trash2 size={12} />
                            </button>
                        </Link>
                    </div>
                </td>
            </tr>
        ));
    };



    return (

        <>



            <div className="p-4 sm:p-6 bg-white min-h-screen">



                {/* Header with Profile and Logout */}
                <div className="flex flex-col sm:flex-row justify-between items-start mb-6 gap-4">
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Vendor Dashboard</h1>
                        <p className="text-gray-800 mt-1 text-sm sm:text-base">
                            Welcome back, <span className="text-blue-500">{profileData.name}</span>
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">

                        {/* Profile image placeholder */}
                        <div className="relative group w-12 h-12 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-gray-300 flex items-center justify-center cursor-pointer transition-all duration-200 hover:border-blue-500 hover:scale-105 overflow-hidden">


                            <img
                                src=""
                                alt="Profile"
                                className="w-full h-full object-cover rounded-full"
                            />

                            <User className="w-5 h-5 text-gray-500" />


                            {/* Upload Overlay */}
                            <div className="absolute inset-0 bg-blue-500 bg-opacity-90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                <span className="text-white text-xs font-medium">Upload</span>
                            </div>

                            {/* Hidden File Input */}
                            <input
                                type="file"
                                accept="image/*"

                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                title="Upload Profile Picture"
                            />
                        </div>

                        <button
                            onClick={() => setShowProfileModal(true)}
                            className="flex items-center gap-2 bg-black hover:bg-gray-700 text-white font-medium px-4 py-2 rounded-lg transition-colors w-full sm:w-auto"
                        >
                            <Settings size={16} />
                            Profile
                        </button>

                        <Link to="/add-product">
                            <button className="bg-black hover:bg-gray-700 text-white font-medium px-4 sm:px-5 py-2 rounded-lg w-full sm:w-auto"> + Post New Advert</button>
                        </Link>

                        <button
                            onClick={() => setShowLogoutConfirm(true)}
                            className="flex items-center gap-2 bg-red-100 hover:bg-red-200 text-red-700 font-medium px-4 py-2 rounded-lg transition-colors w-full sm:w-auto"
                        >
                            <LogOut size={16} />
                            Logout
                        </button>

                    </div>


                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                    <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
                        <p className="text-gray-700 font-semibold mb-2 text-sm sm:text-base">Total Adverts</p>
                        <p className="text-orange-700 text-3xl sm:text-4xl font-bold">{advert.length}</p>
                    </div>
                    <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
                        <p className="text-gray-700 font-semibold mb-2 text-sm sm:text-base">Active Adverts</p>
                        <p className="text-green-600 text-3xl sm:text-4xl font-bold">
                            {advert.filter((ad) => ad.status === 'Available').length}
                        </p>
                    </div>
                    <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
                        <p className="text-gray-700 font-semibold mb-2 text-sm sm:text-base">Inactive Adverts</p>
                        <p className="text-gray-600 text-3xl sm:text-4xl font-bold">
                            {advert.filter((ad) => ad.status !== 'Available').length}
                        </p>
                    </div>
                </div>

                {/* Search and Filter Section */}
                <div className="bg-white rounded-lg shadow mb-6 p-4 sm:p-5">
                    <div className="flex flex-col sm:flex-row gap-4 items-center">
                        <div className="relative flex-1 w-full">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                            <input
                                type="text"
                                placeholder="Search products, brands, or categories..."
                                value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                    setCurrentPage(1);
                                }}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                            />
                        </div>
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors text-sm sm:text-base ${showFilters ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            <Filter size={16} />
                            Filters
                            {(filters.category || filters.status || filters.brand) && (
                                <span className="bg-blue-600 text-white text-xs rounded-full px-2 py-0.5 ml-1">
                                    {[filters.category, filters.status, filters.brand].filter(Boolean).length}
                                </span>
                            )}
                        </button>
                    </div>

                    {showFilters && (
                        <div className="mt-4 pt-4 border-t border-gray-200">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                                    <select
                                        value={filters.category}
                                        onChange={(e) => handleFilterChange('category', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                                    >
                                        <option value="">All Categories</option>
                                        {categories.map(category => (
                                            <option key={category} value={category}>{category}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Brand</label>
                                    <select
                                        value={filters.brand}
                                        onChange={(e) => handleFilterChange('brand', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                                    >
                                        <option value="">All Brands</option>
                                        {brands.map(brand => (
                                            <option key={brand} value={brand}>{brand}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                                    <select
                                        value={filters.status}
                                        onChange={(e) => handleFilterChange('status', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                                    >
                                        <option value="">All Statuses</option>
                                        {statuses.map(status => (
                                            <option key={status} value={status}>{status}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <button
                                        onClick={clearFilters}
                                        className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded-md transition-colors text-sm sm:text-base"
                                    >
                                        Clear All
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {(filters.category || filters.status || filters.brand || searchTerm) && (
                        <div className="mt-3 flex flex-wrap gap-2">
                            {searchTerm && (
                                <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 text-xs sm:text-sm px-3 py-1 rounded-full">
                                    Search: "{searchTerm}"
                                    <button onClick={() => { setSearchTerm(''); setCurrentPage(1); }}>
                                        <X size={14} />
                                    </button>
                                </span>
                            )}
                            {filters.category && (
                                <span className="inline-flex items-center gap-1 bg-green-100 text-green-800 text-xs sm:text-sm px-3 py-1 rounded-full">
                                    Category: {filters.category}
                                    <button onClick={() => handleFilterChange('category', '')}>
                                        <X size={14} />
                                    </button>
                                </span>
                            )}
                            {filters.brand && (
                                <span className="inline-flex items-center gap-1 bg-purple-100 text-purple-800 text-xs sm:text-sm px-3 py-1 rounded-full">
                                    Brand: {filters.brand}
                                    <button onClick={() => handleFilterChange('brand', '')}>
                                        <X size={14} />
                                    </button>
                                </span>
                            )}
                            {filters.status && (
                                <span className="inline-flex items-center gap-1 bg-orange-100 text-orange-800 text-xs sm:text-sm px-3 py-1 rounded-full">
                                    Status: {filters.status}
                                    <button onClick={() => handleFilterChange('status', '')}>
                                        <X size={14} />
                                    </button>
                                </span>
                            )}
                        </div>
                    )}
                </div>

                {filteredAdverts.length !== advert.length && (
                    <div className="mb-4">
                        <p className="text-gray-600 text-sm sm:text-base">
                            Showing {filteredAdverts.length} of {advert.length} adverts
                            {searchTerm && ` for "${searchTerm}"`}
                        </p>
                    </div>
                )}

                {advert.length === 0 && (
                    <div className="bg-gray-100 opacity-80 rounded-lg shadow p-6 sm:p-10 text-center">
                        <h2 className="text-lg sm:text-xl font-semibold mb-2">Your Adverts</h2>
                        <div className="text-gray-400 text-4xl sm:text-5xl mb-4">+</div>
                        <p className="text-gray-700 font-medium mb-1 text-sm sm:text-base">No adverts yet</p>
                        <p className="mb-4 text-sm sm:text-base">Post your first Ad, your Customers are waiting!</p>
                        <button className="bg-black hover:bg-gray-700 text-white font-medium px-4 sm:px-6 py-2 rounded-lg"
                        >
                            + Post Your First Advert
                        </button>
                    </div>
                )}

                {advert.length > 0 && filteredAdverts.length === 0 && (
                    <div className="bg-white rounded-lg shadow p-6 sm:p-10 text-center">
                        <div className="text-gray-400 text-4xl sm:text-5xl mb-4">🔍</div>
                        <h2 className="text-lg sm:text-xl font-semibold mb-2">No Results Found</h2>
                        <p className="text-gray-600 mb-4 text-sm sm:text-base">
                            No adverts match your current search and filter criteria.
                        </p>
                        <button
                            onClick={clearFilters}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 sm:px-6 py-2 rounded-lg"
                        >
                            Clear Filters
                        </button>
                    </div>
                )}

                {filteredAdverts.length > 0 && (
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="p-4 border-b border-gray-200">
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Your Posts</h2>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full table-auto">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="py-2 px-4 text-left text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider">
                                            Product
                                        </th>
                                        <th className="py-2 px-4 text-left text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider">
                                            Price
                                        </th>
                                        <th className="py-2 px-4 text-left text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                                            Category
                                        </th>
                                        <th className="py-2 px-4 text-left text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                                            Brand
                                        </th>
                                        <th className="py-2 px-4 text-left text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th className="py-2 px-4 text-left text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider hidden md:table-cell">
                                            Created
                                        </th>
                                        <th className="py-2 px-4 text-center text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-100">
                                    {renderAdverts()}
                                </tbody>
                            </table>
                        </div>

                        {totalPages > 1 && (
                            <div className="px-4 py-3 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                                <span className="text-sm text-gray-600">
                                    Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredAdverts.length)} of {filteredAdverts.length} items
                                </span>
                                <div className="flex items-center space-x-1">
                                    <button
                                        onClick={() => goToPage(currentPage - 1)}
                                        disabled={currentPage === 1}
                                        className="px-2 py-1 text-sm border border-gray-300 rounded bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                                    >
                                        <ChevronLeft size={14} className="mr-1" />
                                        Previous
                                    </button>
                                    {[...Array(totalPages)].map((_, i) => (
                                        <button
                                            key={i + 1}
                                            onClick={() => goToPage(i + 1)}
                                            className={`px-2 py-1 text-sm border rounded ${currentPage === i + 1
                                                ? 'bg-blue-600 text-white border-blue-600'
                                                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                                                }`}
                                        >
                                            {i + 1}
                                        </button>
                                    ))}
                                    <button
                                        onClick={() => goToPage(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                        className="px-2 py-1 text-sm border border-gray-300 rounded bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                                    >
                                        Next
                                        <ChevronRight size={14} className="ml-1" />
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                )}



                {showProfileModal && (
                    <div className="fixed inset-0 backdrop-blur-sm bg-opacity-10 flex items-center justify-center z-50 p-4">
                        <div className="bg-white rounded-lg w-full max-w-md sm:max-w-lg max-h-[90vh] overflow-y-auto">
                            <div className="p-4 sm:p-6">
                                <div className="flex justify-between items-center mb-4 sm:mb-6">
                                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Edit Profile</h2>
                                    <button
                                        onClick={() => setShowProfileModal(false)}
                                        className="text-gray-400 hover:text-gray-600 transition-colors"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            value={profileData.name}
                                            onChange={(e) => handleInputChange('name', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            value={profileData.email}
                                            onChange={(e) => handleInputChange('email', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            value={profileData.phone}
                                            onChange={(e) => handleInputChange('phone', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Business Name
                                        </label>
                                        <input
                                            type="text"
                                            value={profileData.company}
                                            onChange={(e) => handleInputChange('company', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Business Address
                                        </label>
                                        <textarea
                                            value={profileData.address}
                                            onChange={(e) => handleInputChange('address', e.target.value)}
                                            rows={3}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                                            required
                                        />
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                                        <button
                                            onClick={handleProfileUpdate}
                                            className="flex-1 bg-black hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-md transition-colors text-sm sm:text-base"
                                        >
                                            Save Changes
                                        </button>
                                        <button
                                            onClick={() => setShowProfileModal(false)}
                                            className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 font-medium py-2 px-4 rounded-md transition-colors text-sm sm:text-base"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {showLogoutConfirm && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                        <div className="bg-white rounded-lg w-full max-w-sm">
                            <div className="p-4 sm:p-6">
                                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-red-100 rounded-full">
                                    <LogOut className="w-6 h-6 text-red-600" />
                                </div>
                                <h2 className="text-lg sm:text-xl font-bold text-gray-900 text-center mb-2">
                                    Confirm Logout
                                </h2>
                                <p className="text-gray-600 text-center mb-4 sm:mb-6 text-sm sm:text-base">
                                    Are you sure you want to logout? You'll need to sign in again to access your dashboard.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <button
                                        onClick={handleLogout}
                                        className="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors text-sm sm:text-base"
                                    >
                                        Yes, Logout
                                    </button>
                                    <button
                                        onClick={() => setShowLogoutConfirm(false)}
                                        className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 font-medium py-2 px-4 rounded-md transition-colors text-sm sm:text-base"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>


        </>


    );
}