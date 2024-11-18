import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addReview, selectReviews } from "../Redux/reviewSlice";

const Rating = () => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();
  const reviews = useSelector(selectReviews);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && comment) {
      dispatch(addReview({ name, rating, comment }));
      setName("");
      setRating("");
      setComment("");
    }
  };

  return (
    <div className=" flex flex-col items-center p-10">
      <h1 className="text-3xl font-bold text-orange-600 mb-8">
        Ratings & Reviews
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl mb-8"
      >
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Rating</label>
          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="w-full border border-gray-300 rounded p-2"
          >
            {[1, 2, 3, 4, 5].map((rate) => (
              <option key={rate} value={rate}>
                {rate} Stars
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Comment</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full border border-gray-300 rounded p-2"
            rows="4"
            placeholder="Enter your comment"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-orange-600 text-white py-2 px-4 rounded"
        >
          Submit Review
        </button>
      </form>

      <div className="w-full max-w-xl space-y-6">
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{review.name}</h3>
              <p>{"⭐".repeat(review.rating)}</p>
              <p className="text-gray-700 mt-2">{review.comment}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">
            No reviews yet. Be the first to leave a review!
          </p>
        )}
      </div>
    </div>
  );
};

export default Rating;
