import React, { ReactElement } from "react";

const RandomButton: React.FC = (): ReactElement => {
  return (
    <button
      type="button"
      className="bg-white py-3 px-6 font-bold text-[#2d2f35] w-full"
    >
      Random
    </button>
  );
};

export default RandomButton;
