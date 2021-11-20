import React from "react";
import classNames from "classnames";

export default function Button({ text, onClick, primary }) {
  return (
    <button
      className={classNames(
        `border border-gray-200 my-6 px-4 py-2 rounded uppercase`,
        { "border-kona": primary }
      )}
      type="submit"
      onClick={() => onClick()}
    >
      {text}
    </button>
  );
}
