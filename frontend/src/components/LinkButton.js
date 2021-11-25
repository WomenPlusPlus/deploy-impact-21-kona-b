import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

export default function Button({
  description,
  url,
  fontSize,
  padding,
  margin,
  uppercase,
}) {
  return (
    <Link to={`/${url}`}>
      <div
        className={classNames(
          `border border-konaInspiredDark rounded hover:bg-gray-100 ${uppercase} ${fontSize} ${padding} ${margin}`
        )}
        type="button"
      >
        {description}
      </div>
    </Link>
  );
}
