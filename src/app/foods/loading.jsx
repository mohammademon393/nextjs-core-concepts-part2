import React from 'react';
import FoodCardSkeleton from '../components/skeleton/FoodCardSkeleton';

const loading = () => {
    return (
      <div className="grid gap-5 grid-cols-1 xl:grid-cols-3 my-5 px-4 ">
        {
            [...Array(12)].map((_, index) => (
                <FoodCardSkeleton key={index} />
            ))
        }
      </div>
    );
};

export default loading;