import React, { useState } from "react";
import SimilarProducts from "../components/SimilarProduct";
import { ArrowDown, Grid, List } from "lucide-react";
import IMG_4766 from '../assets/images/IMG_4766.JPG';
import Footer from "../components/Footer";

export default function ViewProduct() {
    const [viewMode, setViewMode] = useState('grid');
    const [page, setPage] = useState(1);
    const totalPages = 5; // Set this to your actual total pages

    const handlePrev = () => setPage((p) => Math.max(1, p - 1));
    const handleNext = () => setPage((p) => Math.min(totalPages, p + 1));

    return (
        <>
            <div className="min-h-screen bg-white">
                <div className="relative bg-orange-500 text-white py-6 overflow-hidden shadow-2xl">
                    <div className="container mx-auto px-4 flex items-center justify-between relative z-10">
                        <div className="max-w-md z-10">
                            <h2 className="text-2xl font-bold mb-2">GET YOUR RIDE ROAD-READY</h2>
                            <p className="mb-4">Shop trusted parts and gear for cars, bikes, and more!</p>
                            <button className="inline-flex items-center gap-2 bg-white text-orange-700 font-semibold py-2 px-4 rounded transition-colors animate-bounce">
                                SHOP NOW
                                <ArrowDown className="h-5 w-4" />
                            </button>
                        </div>
                    </div>
                    <div className="hidden sm:block absolute inset-y-0 right-0 w-1/2 z-0">
                        <img
                            src={IMG_4766}
                            alt="Overheated Car"
                            className="w-full h-full object-cover"
                            style={{
                                clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0 100%)"
                            }}
                        />
                    </div>
                </div>
                <div className="max-w-5xl mx-auto px-3 mt-8">
                    <div className="flex justify-end">
                        <div className="flex items-center space-x-2">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-orange-100 text-orange-700' : 'text-gray-400 hover:text-gray-600'}`}
                                aria-label="Grid view"
                            >
                                <Grid className="h-5 w-5" />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-orange-100 text-orange-700' : 'text-gray-400 hover:text-gray-600'}`}
                                aria-label="List view"
                            >
                                <List className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>
                <SimilarProducts viewMode={viewMode} />
                {/* Pagination buttons */}
                <div className="max-w-5xl mx-auto px-3 mt-6 flex justify-center items-center gap-4">
                    <button
                        onClick={handlePrev}
                        disabled={page === 1}
                        className="px-4 py-2 bg-gray-800 text-white rounded disabled:opacity-50"
                    >
                        Previous
                    </button>
                    <span className="font-semibold">{page} / {totalPages}</span>
                    <button
                        onClick={handleNext}
                        disabled={page === totalPages}
                        className="px-4 py-2 bg-gray-800 text-white rounded disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>
            <Footer />
        </>
    );
}