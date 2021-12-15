import React, { ReactElement } from "react";

const AlpacaImage: React.FC<{
  imageUrl: string;
  hair: string;
  ear: string;
  eye: string;
  mouth: string;
  neck: string;
  leg: string;
  accessorie: string;
}> = ({
  imageUrl,
  hair,
  ear,
  eye,
  mouth,
  neck,
  leg,
  accessorie,
}): ReactElement => {
  return (
    <div
      id="alpaca-image-container"
      style={{
        backgroundImage: `url("${imageUrl}")`,
        minWidth: "400px",
        height: "400px",
        maxHeight: "400px",
        maxWidth: "400px",
      }}
      className="flex flex-col items-center justify-center"
    >
      <div className="w-4/5 flex items-center mt-2 justify-center h-full relative">
        <img
          src={ear}
          alt="ear"
          className="absolute top-5 left-2 bottom-0 z-0"
          height="50px"
        />
        <img
          src={accessorie}
          alt="accesorie"
          height="250px"
          className="absolute top-6 left-1 bottom-0 z-50"
        />
        <img
          src={hair}
          alt="hair"
          height="100px"
          className="absolute top-[21px] bottom-0 z-40"
        />
        <img
          src={eye}
          alt="eye"
          height="100px"
          className="absolute top-5 left-1 bottom-0 z-50"
        />
        <img
          src={"/nose.png"}
          alt="mouth"
          height="100px"
          className="absolute top-4 left-4 bottom-0 z-10"
        />
        <img
          src={mouth}
          alt="mouth"
          height="50px"
          className="absolute top-4 left-3 bottom-0 z-10"
        />
        <img
          src={neck}
          alt="neck"
          width="350px"
          className="absolute h-full left-0 top-0 bottom-0 z-0"
        />
        <img
          src={leg}
          alt="leg"
          height="200px"
          className="absolute bottom-0 right-0 z-0"
        />
      </div>
    </div>
  );
};

export default AlpacaImage;
