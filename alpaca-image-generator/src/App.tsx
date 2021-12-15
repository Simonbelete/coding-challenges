import React, { ReactElement, useEffect } from "react";
import { Title, RandomButton, DownloadButton } from "components";
import {
  AlpacaImageContainer,
  AccessorizeContainer,
  StyleListContainer,
  DownloadButtonContainer,
} from "container";

const App: React.FC = (): ReactElement => {
  return (
    <div className="flex flex-col md:h-screen justify-center items-center">
      <div className="space-y-10">
        <Title>Alpaca Generator</Title>
        <div className="flex flex-col gap-20 md:flex-row">
          <div className="flex flex-col gap-5">
            <AlpacaImageContainer />
            <div className="flex flex-row justify-between gap-5">
              <RandomButton />
              <DownloadButtonContainer />
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <AccessorizeContainer />
            <StyleListContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
