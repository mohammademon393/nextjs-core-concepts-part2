"use client"
import React, { useEffect, useState } from 'react';
import ReviewsCard from '../components/cards/ReviewsCard';
import ReviewsLoading from './ReviewLoading';

const ReviewsPage = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch(" https://taxi-kitchen-api.vercel.app/api/v1/reviews")
            .then(res => res.json())
            .then(data => {
                setReviews(data.reviews || []);
                setLoading(false);
            });
    },[]);

    if(loading){
        return <ReviewsLoading />;
    }
    return (
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold mt-5">
          Total <span className="text-orange-600">{reviews.length}</span>{" "}
          reviews
        </h2>

          <div className="grid gap-6 px-4 py-12 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((rev) => (
            <ReviewsCard key={rev._id} review={rev} />
          ))}
        </div>
      </div>
    );
};

export default ReviewsPage;