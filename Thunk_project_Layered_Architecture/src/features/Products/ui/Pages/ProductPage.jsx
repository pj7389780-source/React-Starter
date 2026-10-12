
import { getProductviaCategory, useAllProducts } from '../../hook/useProducts'
import ProductLoading from '../../../../Shared/ui/Pages/ProductsLoading'
import ProductCard from '../components/ProductCard'
import ProductFilter from '../components/ProductFilter'

const ProductPage = () => {

const { data, isPending, search, setSearch } = useAllProducts();
const { setCategroy, data:categroyData } = getProductviaCategory();
 if(isPending)return <ProductLoading/>

  return (
    <div>
      <ProductFilter
        search={search}
        setSearch={setSearch}
        setCategroy={setCategroy}
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categroyData?.products.length
          ? categroyData?.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          : data.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
}

export default ProductPage
