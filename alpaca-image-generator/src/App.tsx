import React, { ReactElement } from "react";

import { Title, Accessorize, BackgroundImageSelector } from "components";

const App: React.FC = (): ReactElement => {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="space-y-10">
        <Title>Abc</Title>
        <div className="flex flex-row gap-20">
          <BackgroundImageSelector />
          <Accessorize />
        </div>
      </div>
    </div>
  );
};

export default App;
