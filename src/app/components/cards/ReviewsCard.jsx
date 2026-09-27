import React from "react";

const ReviewsCard = ({ review }) => {
  const {
    user,
    email,
    photo,
    rating,
    review: reviewText,
    likes,
    date,
  } = review;

  return (
    <div className="group rounded-2xl border border-orange-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* User Info */}
      <div className="mb-5 flex items-center gap-4">
        <img
          src={photo}
          alt={user}
          className="h-14 w-14 rounded-full object-cover ring-2 ring-orange-100"
        />

        <div className="min-w-0">
          <h2 className="truncate text-lg font-bold text-gray-900">
            {user}
          </h2>

          <p className="truncate text-sm text-gray-500">
            {email}
          </p>
        </div>
      </div>

      {/* Rating */}
      <div className="mb-4 flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <span
            key={index}
            className={`text-xl ${
              index < rating ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            ★
          </span>
        ))}

        <span className="ml-2 text-sm font-semibold text-gray-600">
          {rating}.0
        </span>
      </div>

      {/* Review */}
      <p className="mb-6 text-sm leading-7 text-gray-600">
        “{reviewText}”
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-gray-100 pt-4">

        {/* Likes */}
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span className="text-lg text-red-500">♥</span>

          <span>
            {likes?.length || 0}{" "}
            {likes?.length === 1 ? "Like" : "Likes"}
          </span>
        </div>

        {/* Date */}
        <time
          dateTime={date}
          className="text-xs text-gray-400"
        >
          {new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </time>

      </div>
    </div>
  );
};

export default ReviewsCard;
