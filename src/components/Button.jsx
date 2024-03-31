import React from "react";

function Button({ buttonText }) {
  return (
    <div>
      <button className="text-primary-green rounded-md underline font-bold w-32 h-8 bg-primary-yellow">
        {buttonText}
      </button>
    </div>
  );
}

export default Button;
