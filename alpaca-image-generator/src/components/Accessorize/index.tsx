import React, { ReactElement } from "react";

import { Button } from "components";

const Accessorize: React.FC = (): ReactElement => {
  return (
    <div className="grid grid-cols-3 gap-1 auto-cols-max">
      <Button active={true}>Hair</Button>
      <Button>Ears</Button>
      <Button>Eyes</Button>
      <Button>Mouth</Button>
      <Button>Neck</Button>
      <Button>Leg</Button>
      <Button>Accessories</Button>
      <Button>Background</Button>
    </div>
  );
};

export default Accessorize;
