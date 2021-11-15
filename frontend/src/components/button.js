import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

export default function Button({ description, url, height, width }) {
  return (
    <button
      className={classNames(
        `border border-kona px-4 py-2 rounded uppercase ${height} ${width}`
      )}
      type="button"
    >
      <Link to={`/${url}`}>{description}</Link>
    </button>
  );
}
