import React, { ReactElement } from "react";

const BackgroundImageSelector: React.FC<{ imageUrl: string }> = ({
  imageUrl,
}): ReactElement => {
  return (
    <div
      style={{
        backgroundImage: `url("/backgrounds/${imageUrl}")`,
        minWidth: "400px",
        height: "400px",
      }}
      className="w-auto"
    ></div>
  );
};

export default BackgroundImageSelector;
