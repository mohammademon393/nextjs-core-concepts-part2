const ReviewsCardSkeleton = () => {
  return (
    <div className="animate-pulse rounded-2xl border border-orange-100 bg-white p-6 shadow-sm">

      {/* User Info */}
      <div className="mb-5 flex items-center gap-4">
        {/* Profile Image */}
        <div className="h-14 w-14 shrink-0 rounded-full bg-gray-200"></div>

        <div className="flex-1">
          {/* Name */}
          <div className="mb-2 h-5 w-32 rounded-md bg-gray-200"></div>

          {/* Email */}
          <div className="h-4 w-40 rounded-md bg-gray-200"></div>
        </div>
      </div>

      {/* Rating */}
      <div className="mb-4 flex items-center gap-1">
        <div className="h-6 w-6 rounded bg-gray-200"></div>
        <div className="h-6 w-6 rounded bg-gray-200"></div>
        <div className="h-6 w-6 rounded bg-gray-200"></div>
        <div className="h-6 w-6 rounded bg-gray-200"></div>
        <div className="h-6 w-6 rounded bg-gray-200"></div>

        <div className="ml-2 h-4 w-8 rounded bg-gray-200"></div>
      </div>

      {/* Review Text */}
      <div className="mb-2 h-4 w-full rounded bg-gray-200"></div>
      <div className="mb-2 h-4 w-full rounded bg-gray-200"></div>
      <div className="mb-6 h-4 w-4/5 rounded bg-gray-200"></div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-gray-100 pt-4">

        {/* Likes */}
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded bg-gray-200"></div>
          <div className="h-4 w-16 rounded bg-gray-200"></div>
        </div>

        {/* Date */}
        <div className="h-4 w-24 rounded bg-gray-200"></div>

      </div>
    </div>
  );
};

export default ReviewsCardSkeleton;
