import React, { ReactElement } from "react";

const BackgroundImageSelector: React.FC = (): ReactElement => {
  return (
    <div
      style={{
        backgroundImage: 'url("/backgrounds/darkblue70.png")',
        minWidth: "400px",
        height: "400px",
      }}
      className="w-auto"
    ></div>
  );
};

export default BackgroundImageSelector;
