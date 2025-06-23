import SimilarProducts from "../components/SimilarProduct";
import { ArrowDown } from "lucide-react"; 
import IMG_4766 from '../assets/images/IMG_4766.JPG';
import Footer from "../components/Footer";

export default function ViewProduct() {
    return (
        <>
            <div className="min-h-screen bg-white">
                <div className="relative bg-orange-500 text-white py-6 overflow-hidden">
                    <div className="container mx-auto px-4 flex items-center justify-between relative z-10">
                        <div className="max-w-md z-10">
                            <h2 className="text-2xl font-bold mb-2">KEEP COOL IN HOT WEATHER</h2>
                            <p className="text-sm mb-4">We've got what you need to stay cool and beat the heat!</p>
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
                <SimilarProducts />
            </div>
            <Footer />
        </>
    );
}