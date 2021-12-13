import React, { ReactElement } from "react";

import { Button, SubTitle } from "components";

const Accessorize: React.FC<{ selected: string }> = ({
  selected,
}): ReactElement => {
  return (
    <div className="space-y-4">
      <SubTitle>Accessorize The Alpacas</SubTitle>
      <div className="space-y-2">
        <div className="space-x-1">
          <Button active={selected === "HAIR"}>Hair</Button>
          <Button active={selected === "EARS"}>Ears</Button>
          <Button active={selected === "EYES"}>Eyes</Button>
        </div>
        <div className="space-x-1">
          <Button active={selected === "MOUTH"}>Mouth</Button>
          <Button active={selected === "NECK"}>Neck</Button>
          <Button active={selected === "LEG"}>Leg</Button>
        </div>
        <div className="space-x-1">
          <Button active={selected === "ACCESSORIES"}>Accessories</Button>
          <Button active={selected === "BACKGROUND"}>Background</Button>
        </div>
      </div>
    </div>
  );
};

export default Accessorize;
