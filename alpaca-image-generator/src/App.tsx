import React, { ReactElement, useEffect } from "react";
import { Title, RandomButton, DownloadButton } from "components";
import {
  AlpacaImageContainer,
  AccessorizeContainer,
  StyleListContainer,
} from "container";
import store from "store";
import { SET_BLUE_50, SET_EYES } from "actions";

const App: React.FC = (): ReactElement => {
  // useEffect(() => {
  //   store.dispatch(SET_BLUE_50);
  //   store.dispatch(SET_EYES);
  // }, []);
  return (
    <div className="flex flex-col md:h-screen justify-center items-center">
      <div className="space-y-10">
        <Title>Alpaca Generator</Title>
        <div className="flex flex-col gap-20 md:flex-row">
          <div className="flex flex-col gap-5">
            <AlpacaImageContainer />
            <div className="flex flex-row justify-between gap-5">
              <RandomButton />
              <DownloadButton />
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
