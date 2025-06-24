import React, { useState } from "react";
import SimilarProducts from "../components/SimilarProduct";

import Footer from "../components/Footer";

export default function ViewProduct() {
    const viewMode = 'list';
    const [page, setPage] = useState(1);
    const totalPages = 5; 

    const handlePrev = () => setPage((p) => Math.max(1, p - 1));
    const handleNext = () => setPage((p) => Math.min(totalPages, p + 1));

    return (
        <>
            <div className="min-h-screen bg-white">
                <div className="max-w-5xl mx-auto px-3 mt-8">
                    <h1 className="text-2xl md:text-3xl text-gray-900 font-bold mb-2 text-left">
                    Electrical & Battery System
                </h1>
                <hr className="border-t-1 border-gray-700 w-full mb-4" />

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