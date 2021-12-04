import React, { ReactElement } from "react";

import { Button } from "components";

const Accessorize: React.FC = (): ReactElement => {
  return (
    <div className="space-y-2">
      <div className="space-x-1">
        <Button>Hair</Button>
        <Button>Ears</Button>
        <Button>Eyes</Button>
      </div>
      <div className="space-x-1">
        <Button>Mouth</Button>
        <Button>Neck</Button>
        <Button>Leg</Button>
      </div>
      <div className="space-x-1">
        <Button>Accessories</Button>
        <Button>Background</Button>
      </div>
    </div>
  );
};

export default Accessorize;
