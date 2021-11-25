import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

export default function Button({
  description,
  url,
  fontSize,
  padding,
  margin,
  border,
}) {
  return (
    <Link to={`/${url}`}>
      <div
        className={classNames(
          `rounded hover:bg-gray-100 ${border} ${fontSize} ${padding} ${margin}`
        )}
        type="button"
      >
        {description}
      </div>
    </Link>
  );
}
