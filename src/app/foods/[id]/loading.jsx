const Loading = () => {
  return (
    <main className="min-h-screen animate-pulse bg-orange-50/40">
      <section className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">

        {/* Back Button Skeleton */}
        <div className="mb-6 h-5 w-32 rounded-md bg-gray-200 sm:mb-8"></div>

        {/* Details Card */}
        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl bg-white shadow-lg">

          <div className="grid grid-cols-1">

            {/* Food Image Skeleton */}
            <div className="h-64 w-full bg-gray-200 sm:h-80 md:h-96"></div>

            {/* Food Information */}
            <div className="p-5 sm:p-7 md:p-9">

              {/* Small Label Skeleton */}
              <div className="mb-3 h-4 w-40 rounded bg-gray-200"></div>

              {/* Title Skeleton */}
              <div className="mb-3 h-9 w-3/4 rounded-md bg-gray-200 sm:h-10"></div>

              {/* Description Skeleton */}
              <div className="mb-2 h-4 w-full rounded bg-gray-200"></div>

              <div className="mb-2 h-4 w-full rounded bg-gray-200"></div>

              <div className="mb-6 h-4 w-2/3 rounded bg-gray-200"></div>

              {/* Price Label */}
              <div className="mb-2 h-4 w-14 rounded bg-gray-200"></div>

              {/* Price */}
              <div className="mb-6 h-9 w-24 rounded-md bg-gray-200"></div>

              {/* Food Info */}
              <div className="mb-7 grid grid-cols-2 gap-3 sm:gap-4">

                {/* Category */}
                <div className="h-[72px] rounded-xl bg-gray-200 sm:h-[76px]"></div>

                {/* Cuisine */}
                <div className="h-[72px] rounded-xl bg-gray-200 sm:h-[76px]"></div>

                {/* Food ID */}
                <div className="h-[72px] rounded-xl bg-gray-200 sm:h-[76px]"></div>

                {/* Availability */}
                <div className="h-[72px] rounded-xl bg-gray-200 sm:h-[76px]"></div>

              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-3 sm:flex-row">

                <div className="h-12 flex-1 rounded-xl bg-gray-200"></div>

                <div className="h-12 flex-1 rounded-xl bg-gray-200"></div>

              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Loading;
