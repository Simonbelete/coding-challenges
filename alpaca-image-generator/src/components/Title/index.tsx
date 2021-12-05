import React, { ReactElement } from "react";

const Title: React.FC<{ children: string }> = ({ children }): ReactElement => {
  return (
    <h1 className="uppercase self-start text-[#001636] tracking-wide font-black text-5xl">
      {children}
    </h1>
  );
};

export default Title;
