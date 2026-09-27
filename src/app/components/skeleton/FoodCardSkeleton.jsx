const FoodCardSkeleton = () => {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md">
      {/* Image Skeleton */}
      <div className="h-56 w-full animate-pulse bg-gray-200"></div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <div className="mb-3 h-6 w-3/4 animate-pulse rounded-md bg-gray-200"></div>

        {/* Price + ID */}
        <div className="mb-5 flex items-center justify-between">
          <div className="h-8 w-24 animate-pulse rounded-md bg-gray-200"></div>
          <div className="h-4 w-20 animate-pulse rounded-md bg-gray-200"></div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <div className="h-11 flex-1 animate-pulse rounded-lg bg-gray-200"></div>
          <div className="h-11 flex-1 animate-pulse rounded-lg bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};

export default FoodCardSkeleton;
