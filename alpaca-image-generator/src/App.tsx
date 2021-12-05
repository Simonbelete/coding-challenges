import React, { ReactElement } from "react";

import {
  Title,
  Accessorize,
  BackgroundImageSelector,
  RandomButton,
  DownloadButton,
} from "components";

const App: React.FC = (): ReactElement => {
  return (
    <div className="flex flex-col md:h-screen justify-center items-center">
      <div className="space-y-10">
        <Title>Alpaca Generator</Title>
        <div className="flex flex-col gap-20 md:flex-row">
          <div className="flex flex-col gap-5">
            <BackgroundImageSelector />
            <div className="flex flex-row justify-between gap-5">
              <RandomButton />
              <DownloadButton />
            </div>
          </div>
          <Accessorize />
        </div>
      </div>
    </div>
  );
};

export default App;
