import React from "react";

export default function Button({ text, onClick }) {
  return (
    <button
      className="border border-kona hover:bg-gray-200 my-6 px-4 py-2 rounded uppercase"
      type="submit"
      onClick={() => onClick()}
    >
      {text}
    </button>
  );
}
