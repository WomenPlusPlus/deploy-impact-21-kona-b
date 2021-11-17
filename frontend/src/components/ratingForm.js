import React from "react";

import RatingStars from "./ratingStars";

export default function RatingForm() {
  return (
    <>
      <h2 className="font-bold mt-4 tracking-wide uppercase">
        Your opinion matters to us
      </h2>
      <RatingStars />
      <div className="bg-gray-200 flex flex-wrap h-28 my-2 place-content-center">
        RATING FORM
      </div>
    </>
  );
}
