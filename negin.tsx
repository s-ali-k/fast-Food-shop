
function Food() {
  return (
    <div className="flex flex-wrap gap-10 p-4 md:flex mx-auto">
      {products.map((product) => (
        <div
          key={product.id}
          className="w-52 min-h-10 bg-gray-500 flex flex-col items-start p-2 rounded-lg shadow-xl "
        >
          <img
            src={product.imageUrl}
            className="w-64 h-52 object-cover"
            alt={product.name}
          />
          <h3 className="font-semibold text-lg mt-2">{product.name}</h3>
          <h6 className="font-semibold text-md text-gray-300 mt-2">
            {product.description}
          </h6>
          <div className="flex justify-between w-full items-center mt-3">
            <p className="font-semibold text-2xl">{product.price} تومان</p>
            <button
              className="font-semibold text-lg bg-orange-500 text-white p-2 rounded-md"
            >
              افزودن به سبد خرید
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Food;
