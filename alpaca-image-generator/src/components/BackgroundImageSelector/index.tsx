import React, { ReactElement } from "react";

const BackgroundImageSelector: React.FC = (): ReactElement => {
  return (
    <div
      style={{
        backgroundImage: 'url("/backgrounds/darkblue70.png")',
        width: "400px",
        height: "400px",
      }}
    ></div>
  );
};

export default BackgroundImageSelector;
