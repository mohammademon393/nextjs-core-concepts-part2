import React from 'react';
import FoodCard from '../components/FoodCard';

const getFoods = async () => {
    const res = await fetch(
      "https://taxi-kitchen-api.vercel.app/api/v1/foods/random");
      const data = await res.json();
      return data.foods || [];
}

const FoodsPage = async () => {
    const foods = await getFoods();
    return (
      <div className="max-w-7xl mx-auto mt-6">
        <h1 className="font-bold text-4xl px-3">
          Total <span className="text-orange-600">{foods.length}</span> found
        </h1>
        <div className="grid gap-5 grid-cols-1 xl:grid-cols-3 my-5 px-4 md:p-0">
          {foods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
      </div>
    );
};

export default FoodsPage;