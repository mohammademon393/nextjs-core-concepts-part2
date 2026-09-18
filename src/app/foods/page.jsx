import React from 'react';

const getFoods = async () => {
    const res = await fetch(
      "https://taxi-kitchen-api.vercel.app/api/v1/foods/random");
      const data = await res.json();
      return data.foods || [];
}

const FoodsPage = async () => {
    const foods = await getFoods();
    return (
      <div className="max-w-7xl mx-auto mt-4">
        <h1 className='font-bold text-4xl'>
          Total <span className='text-orange-600'>{foods.length}</span> found
        </h1>
      </div>
    );
};

export default FoodsPage;