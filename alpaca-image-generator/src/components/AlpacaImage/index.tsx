import React, { ReactElement } from "react";

const AlpacaImage: React.FC<{ imageUrl: string }> = ({
  imageUrl,
}): ReactElement => {
  return (
    <div
      style={{
        backgroundImage: `url("${imageUrl}")`,
        minWidth: "400px",
        height: "400px",
      }}
      className="w-auto"
    ></div>
  );
};

export default AlpacaImage;
