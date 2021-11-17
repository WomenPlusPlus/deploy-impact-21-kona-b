import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

export default function Button({
  description,
  url,
  fontSize,
  padding,
  margin,
}) {
  return (
    <Link to={`/${url}`}>
      <div
        className={classNames(
          `border border-kona rounded uppercase ${fontSize} ${padding} ${margin}`
        )}
        type="button"
      >
        {description}
      </div>
    </Link>
  );
}
