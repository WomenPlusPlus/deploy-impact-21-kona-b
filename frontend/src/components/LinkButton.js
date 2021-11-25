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
          `border border-blueDark rounded ${uppercase} ${fontSize} ${padding} ${margin}`
        )}
        type="button"
      >
        {description}
      </div>
    </Link>
  );
}
