import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";


export default function TermsCondition() {
    return (
        <>
            <Navbar />
            <Sidebar />

            <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-10 max-w-7xl mx-auto text-shadow-gray-950 space-y-8">

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Return Terms & Conditions</h1>

                <p className="text-base sm:text-lg md:text-xl font-semibold leading-relaxed">
                    At Prime Auttos, your satisfaction matters. We aim to make your online spare parts purchases reliable and worry-free. That’s why we offer a clear return policy to support you in case of any issues. If a product is defective, misrepresented, or simply no longer needed, you may be eligible for a return — provided the conditions below are met.
                </p>

                <section>
                    <h2 className="text-2xl font-bold mb-2">1. Eligibility for Return & Refund</h2>
                    <p className="text-base sm:text-lg mb-4">You may qualify for a return or refund under the following circumstances:</p>

                    <ul className="list-disc pl-6 text-base sm:text-lg space-y-2">
                        <li>
                            <span className="font-bold">Incorrect Item Description:</span> The item does not match the description, image, or specs.
                        </li>
                        <li>
                            <span className="font-bold">Damaged or Faulty Product:</span> The item is defective, arrives damaged, or does not work as expected.
                        </li>
                        <li>
                            <span className="font-bold">Change of Mind:</span> The following must be true:
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>The product is unused and in sellable condition.</li>
                                <li>It remains sealed in its original packaging.</li>
                                <li>All manuals, labels, and accessories are intact.</li>
                            </ul>
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-2">2. Return Window</h2>
                    <ul className="list-disc pl-6 text-base sm:text-lg space-y-2">
                        <li>All return or refund requests must be made within seven (7) calendar days of receiving the item.</li>
                        <li>Late requests may not be honored.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-2">3. Non-Refundable Items</h2>
                    <p className="text-base sm:text-lg mb-2">These items are not eligible for return due to safety or quality reasons:</p>
                    <ul className="list-disc pl-6 text-base sm:text-lg space-y-2">
                        <li>Electrical parts (e.g., sensors, ECUs)</li>
                        <li>Opened or used lubricants and fluids</li>
                        <li>Custom or special-order items (clearly marked on the product page)</li>
                    </ul>

                    <div className="mt-6">
                        <span className="text-xl">Please note that eligibility for a refund may vary by product, and items not eligible for refund will be explicitly indicated as such on the item description page.<br></br>
                        </span>


                        <div className="mt-6">
                           <span className="text-xl">
                            So you are eligible for a refund, what next?
                            Please contact us through the contact us page and we will process your refund
                            </span> .
                        </div>
                    </div>
                    <div className="mt-6 text-xl font-bold"> I am Done Take Me Back</div>
                </section>

            </div>

            <Footer />

        </>
    )
}