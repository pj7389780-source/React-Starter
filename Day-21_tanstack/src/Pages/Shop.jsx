import ProductCard from "../Components/ProductCard";
import ProductCardSkeleton from "../Components/ProductCardSkeleton";
import { useProductApi } from "../CustomHooks/productApi";
const Shop = () => {
  const {data,isPending,error} = useProductApi()
  if(error) return <h1>{error.message}</h1>
  return (
    <div className="flex flex-col gap-8">
      {/* Products */}
      <div className="flex flex-wrap gap-8 px-16 py-4">
        {isPending
          ? Array.from({ length: 12 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))
          : data.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
      </div>

    </div>
  );
};

export default Shop;
