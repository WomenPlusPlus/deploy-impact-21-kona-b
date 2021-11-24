import React from "react";
import classNames from "classnames";

export default function Button({ text, onClick, primary }) {
  return (
    <button
      className={classNames(
        `bg-cream border mt-4 sm:my-12 px-6 sm:px-12 py-1 rounded text-xs center`,
        { "border-blueDark": primary }
      )}
      type="submit"
      onClick={() => onClick()}
    >
      {text}
    </button>
  );
}
