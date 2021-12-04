import React, { ReactElement } from "react";

const Button: React.FC<{
  active?: boolean;
  children: string | ReactElement;
  className?: string;
}> = ({ active = false, children, className }): ReactElement => {
  return (
    <button
      type="button"
      className={`${className} font-bold border-light_purple rounded-full py-2 px-7 hover:border-purple hover:text-purple ${
        active ? "bg-purple text-white" : "text-light_purple border-2"
      }`}
    >
      <>{children}</>
    </button>
  );
};

export default Button;
