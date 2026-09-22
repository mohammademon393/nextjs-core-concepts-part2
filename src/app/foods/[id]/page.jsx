import Link from "next/link";

const singleFood = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`
  );

  if (!res.ok) {
    return null;
  }

  const data = await res.json();

  return data.details || null;
};

const Page = async ({ params }) => {
  const { id } = await params;

  const food = await singleFood(id);

  // Food not found
  if (!food) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center px-4">
        <div className="text-center">
          <h1 className="mb-3 text-3xl font-bold text-gray-800 sm:text-4xl">
            Food Not Found
          </h1>

          <p className="mb-6 text-sm text-gray-500 sm:text-base">
            Sorry, we couldn't find the food you're looking for.
          </p>

          <Link
            href="/foods"
            className="inline-block rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            ← Back to Foods
          </Link>
        </div>
      </section>
    );
  }

  const {
    id: foodId,
    title,
    foodImg,
    price,
    video,
    category,
    area,
  } = food;

  return (
    <main className="min-h-screen bg-orange-50/40">
      <section className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">

        {/* Back Button */}
        <Link
          href="/foods"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-orange-600 transition hover:text-orange-700 sm:mb-8"
        >
          ← Back to Foods
        </Link>

        {/* Details Card */}
        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl bg-white shadow-lg">

          <div className="grid grid-cols-1">

            {/* Food Image */}
            <div className="relative h-64 w-full overflow-hidden sm:h-80 md:h-96">
              <img
                src={foodImg}
                alt={title}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />

              {/* Category Badge */}
              <div className="absolute left-4 top-4 sm:left-5 sm:top-5">
                <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-orange-600 shadow-md backdrop-blur-sm sm:px-4 sm:py-2 sm:text-sm">
                  {category}
                </span>
              </div>
            </div>

            {/* Food Information */}
            <div className="p-5 sm:p-7 md:p-9">

              {/* Small Label */}
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-orange-500 sm:text-sm">
                Bhojonbilash Special
              </p>

              {/* Title */}
              <h1 className="mb-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                {title}
              </h1>

              {/* Description */}
              <p className="mb-6 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
                Experience the delicious taste of our carefully selected{" "}
                {title.toLowerCase()}. Prepared with quality ingredients and
                served with the authentic flavor you love.
              </p>

              {/* Price */}
              <div className="mb-6">
                <p className="mb-1 text-sm font-medium text-gray-500">
                  Price
                </p>

                <p className="text-2xl font-bold text-orange-600">
                  ৳{price}
                </p>
              </div>

              {/* Food Info */}
              <div className="mb-7 grid grid-cols-2 gap-3 sm:gap-4">

                {/* Category */}
                <div className="rounded-xl bg-orange-50 p-3 sm:p-4">
                  <p className="text-xs text-gray-500 sm:text-sm">
                    Category
                  </p>

                  <p className="mt-1 text-sm font-semibold text-gray-800 sm:text-base">
                    {category}
                  </p>
                </div>

                {/* Cuisine */}
                <div className="rounded-xl bg-orange-50 p-3 sm:p-4">
                  <p className="text-xs text-gray-500 sm:text-sm">
                    Cuisine
                  </p>

                  <p className="mt-1 text-sm font-semibold text-gray-800 sm:text-base">
                    {area}
                  </p>
                </div>

                {/* Food ID */}
                <div className="rounded-xl bg-orange-50 p-3 sm:p-4">
                  <p className="text-xs text-gray-500 sm:text-sm">
                    Food ID
                  </p>

                  <p className="mt-1 text-sm font-semibold text-gray-800 sm:text-base">
                    #{foodId}
                  </p>
                </div>

                {/* Availability */}
                <div className="rounded-xl bg-orange-50 p-3 sm:p-4">
                  <p className="text-xs text-gray-500 sm:text-sm">
                    Availability
                  </p>

                  <p className="mt-1 text-sm font-semibold text-green-600 sm:text-base">
                    Available
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-3 sm:flex-row">

                {/* Add To Cart */}
                <button
                  type="button"
                  className="flex-1 rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white transition duration-300 hover:bg-orange-600 active:scale-95"
                >
                  Add to Cart
                </button>

                {/* Watch Video */}
                <a
                  href={video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-xl px-5 py-3 text-center font-semibold bg-blue-600 text-white transition duration-300 hover:bg-blue-700 active:scale-95 "
                >
                  Watch Video
                </a>

              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
