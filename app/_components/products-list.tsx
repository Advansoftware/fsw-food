import { db } from "../_lib/prisma";
import ProductsItem from "./products-item";

const ProductsList = async () => {
  const products = await db.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
    take: 10,
  });

  return (
    <div className="no-scrollbar flex gap-4 overflow-x-scroll px-5 [&::webkit-scrollbar]:hidden">
      {products.map((product) => (
        <ProductsItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
