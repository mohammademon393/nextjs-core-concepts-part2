"use client"
import React, { useEffect, useState } from 'react';
import ReviewsCard from '../components/cards/ReviewsCard';

const ReviewsPage = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch(" https://taxi-kitchen-api.vercel.app/api/v1/reviews")
            .then(res => res.json())
            .then(data => setReviews(data.reviews || []));
    },[]);
    return (
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((rev) => (
          <ReviewsCard key={rev._id} review={rev} />
        ))}
      </div>
    );
};

export default ReviewsPage;