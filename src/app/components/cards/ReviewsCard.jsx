"use client";

import React, { useState } from "react";

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

  // Initial like count
  const [likeCount, setLikeCount] = useState(likes?.length || 0);

  // Like state
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount((prev) => prev - 1);
      setIsLiked(false);
    } else {
      setLikeCount((prev) => prev + 1);
      setIsLiked(true);
    }
  };

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

        {/* Like Button */}
        <button
          onClick={handleLike}
          type="button"
          className={`group/like flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium transition duration-300 ${
            isLiked
              ? "bg-red-50 text-red-500"
              : "text-gray-500 hover:bg-red-50 hover:text-red-500"
          }`}
        >
          <span
            className={`text-xl transition duration-300 ${
              isLiked
                ? "scale-110 text-red-500"
                : "text-gray-400 group-hover/like:text-red-500"
            }`}
          >
            {isLiked ? "♥" : "♡"}
          </span>

          <span>
            {likeCount} {likeCount === 1 ? "Like" : "Likes"}
          </span>
        </button>

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
