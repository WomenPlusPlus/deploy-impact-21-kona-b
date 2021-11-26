import React from "react";
import { useTranslation } from "react-i18next";

import RatingStars from "./ratingStars";

export default function RatingForm() {
  const { t } = useTranslation("organisation");

  return (
    <>
      <h2 className="font-bold mt-6 tracking-wide uppercase">
        {t("yourOpinionMatters")}
      </h2>
      <RatingStars />
      <div className="bg-gray-200 flex flex-wrap h-28 my-2 place-content-center">
        RATING FORM
      </div>
    </>
  );
}
