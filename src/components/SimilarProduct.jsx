import ProductCard from "./ProductCard";

export default function SimilarProducts() {
    return (
        <section className="mt-20 w-[80%] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {[1, 2, 3, 4, 5, 6, 7, 8].map(n => <ProductCard key={n} />)}
            </div>
        </section>
    );
}