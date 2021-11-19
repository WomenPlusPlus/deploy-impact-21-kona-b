import React from "react";

export default function SubmitButton({
  text,
  textLast,
  step,
  onClick,
  numberQuestions,
}) {
  return (
    <button
      className="border border-kona hover:bg-gray-200 my-6 px-4 py-2 rounded uppercase"
      type="submit"
      onClick={() => onClick()}
    >
      {/* on the last question the button message will be 'next' otherwise it will be 'submit */}
      {step >= numberQuestions - 1 ? textLast : text}
    </button>
  );
}
