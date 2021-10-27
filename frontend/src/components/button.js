import React from "react";
import { Link } from "react-router-dom";

export default function Button({ description, url }) {
  return (
    <button
      className="border border-kona px-4 py-2 rounded uppercase"
      type="button"
    >
      <Link to={`/${url}`}>{description}</Link>
    </button>
  );
}
