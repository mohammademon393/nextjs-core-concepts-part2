import ReviewsCardSkeleton from "../components/skeleton/ReviewsCardSkeleton";


const ReviewsLoading = () => {
  return (
    <main className="min-h-screen bg-orange-50/40 px-4 py-12 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-7xl">

        {/* Reviews Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {[...Array(12)].map((_, index) => (
            <ReviewsCardSkeleton key={index} />
          ))}

        </div>

      </div>

    </main>
  );
};

export default ReviewsLoading;