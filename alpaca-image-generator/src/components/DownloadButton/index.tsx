import React, { ReactElement } from "react";

const DownloadButton: React.FC<{ onClick: () => void }> = ({
  onClick,
}): ReactElement => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="bg-white py-3 px-6 font-bold text-[#2d2f35] w-full"
    >
      Download
    </button>
  );
};

export default DownloadButton;
