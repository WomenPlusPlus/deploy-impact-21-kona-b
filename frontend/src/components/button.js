import React from "react";
import classNames from "classnames";

export default function Button({ text, onClick, primary }) {
  return (
    <button
      className={classNames(
        `bg-white border border-black mt-4 sm:my-12 px-6 sm:px-12 py-1 rounded text-xs center`,
        { "border-kona": primary }
      )}
      type="submit"
      onClick={() => onClick()}
    >
      {text}
    </button>
  );
}
