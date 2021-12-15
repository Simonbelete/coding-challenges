import React, { ReactElement } from "react";
import { DownloadButton } from "components";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

const DownloadButtonContainer: React.FC = (): ReactElement => {
  const downloadAlpacaImage = () => {
    var node = document.getElementById("alpaca-image-container");
    console.log(node);
    if (node != null)
      domtoimage.toBlob(node).then(function (blob) {
        saveAs(blob, "alpaca.png");
      });
  };
  return <DownloadButton onClick={downloadAlpacaImage} />;
};

export default DownloadButtonContainer;
