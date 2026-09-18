import Link from "next/link";

const FoodCard = ({ food }) => {
  const { id, title, foodImg, price, category } = food;

  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Food Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={foodImg}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-orange-600 backdrop-blur-sm">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h2 className="mb-2 text-xl font-bold text-gray-800">{title}</h2>

        <div className="mb-5 flex items-center justify-between">
          <span className="text-2xl font-bold text-orange-600">৳{price}</span>

          <span className="text-sm text-gray-500">ID: {id}</span>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          {/* Add to Cart */}
          <button
            type="button"
            className="flex-1 rounded-lg bg-orange-500 px-4 py-2.5 font-semibold text-white transition duration-300 hover:bg-orange-600 active:scale-95"
          >
            Add to Cart
          </button>

          {/* View Details */}
          <Link
            href={`/foods/${id}`}
            className="flex-1 rounded-lg border-2 border-orange-500 px-4 py-2.5 text-center font-semibold text-orange-600 transition duration-300 hover:bg-orange-500 hover:text-white"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
