import React, { ReactElement } from "react";

import { Title, Accessorize } from "components";

const App: React.FC = (): ReactElement => {
  return (
    <div className="flex flex-col">
      <Title>Abc</Title>
      <div className="flex flex-row justify-between">
        <p>a</p>
        <Accessorize />
      </div>
    </div>
  );
};

export default App;
