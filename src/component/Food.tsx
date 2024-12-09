import { products } from "../foods";
import ProductCart from "./ProductCart";

function Food() {
  return (
    <div className="grid grid-cols-3 mt-[24px] gap-4  bg-gray-200 pt-4 px-10 ">
      {products.map((product) => (
        <ProductCart {...product } />
      ))}
    </div>
  );
}

export default Food;
