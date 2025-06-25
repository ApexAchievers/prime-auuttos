import ProductCard from "./ProductCard";

export default function SimilarProducts({ viewMode }) {
    return (
        <section className="mt-4 w-[80%] mx-auto">
            <div className={
                viewMode === 'grid'
                    ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'
                    : 'flex flex-col gap-5'
            }>
                {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                    <ProductCard key={n} viewMode={viewMode} />
                ))}
            </div>
        </section>
    );
}