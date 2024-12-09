import { IProps } from " ../../../cartItem";
import { useState } from "react";
function ProductCart({ imageUrl, name, price, description }: IProps) {
  const [count, setcount] = useState(0);
  

  return (
    <div>
      <div className="flex flex-col min-h-20 col-span-1  shadow-lg bg-white p-4  rounded-md">
        <img
          src={imageUrl}
          alt={name}
          className="w-full aspect-video  object-cover "
        />
        <h2 className="mt-4 text-right"> {name}</h2>
        <h4 className="mt-2 text-right  text-[#727171]  ">{description}</h4>
        <div className="flex justify-between">
          <p className="mt-5 pb-5"> {price} تومان </p>
          <div className="flex flex-row ">
            <button
              className="w-6 h-6 bg-gray-300 rounded-md ml-2"
              onClick={() => {
                if (count > 0) setcount(count - 1);
              }}
            >
              -
            </button>
            <span>{count}</span>
            <button
              className="w-6 h-6 bg-orange-500 rounded-md mr-2"
              onClick={() => setcount(count + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCart;
