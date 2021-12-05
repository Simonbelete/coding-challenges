import React, { ReactElement } from "react";

const SubTitle: React.FC<{ children: string }> = ({
  children,
}): ReactElement => {
  return (
    <h2 className="uppercase text-[#0a1734] text-lg font-bold">{children}</h2>
  );
};

export default SubTitle;
