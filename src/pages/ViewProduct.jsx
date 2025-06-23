import SimilarProducts from "../components/SimilarProduct";
import IMG_4765 from '../assets/images/IMG_4765.JPG';
import Footer from "../components/Footer";

export default function ViewProduct() {
    return (
        <>
            <div className="min-h-screen bg-white">

                <section className="relative bg-orange-500 text-white py-6">
                    <div className="container mx-auto px-4 flex items-center justify-between">
                        <div className="max-w-md">
                            <h2 className="text-2xl font-bold mb-2">KEEP COOL IN HOT WEATHER</h2>
                            <p className="text-sm mb-4">We've got what you need to stay cool and beat the heat!</p>
                            <a href="#" className="inline-block bg-white text-orange-500 font-semibold py-2 px-4 rounded hover:bg-gray-100 transition-colors">
                                SHOP NOW →
                            </a>
                        </div>
                        <div className="hidden md:block">
                            <img
                                src={IMG_4765}
                                alt="Man and Woman in Hot Weather"
                                className="h-32 object-cover"
                            />
                        </div>
                    </div>
                </section>
                <SimilarProducts />

            </div>
            <Footer />
        </>
    );
}