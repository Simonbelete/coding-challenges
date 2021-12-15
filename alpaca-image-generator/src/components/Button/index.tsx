import React, { ReactElement } from "react";

const Button: React.FC<{
  active?: boolean;
  children: string | ReactElement;
  className?: string;
  onClick?: () => void;
}> = ({ active = false, children, className, onClick }): ReactElement => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`${className} font-bold border-light_purple rounded-full py-2 px-7  ${
        active
          ? "bg-purple text-white"
          : "text-light_purple border-2 hover:border-purple hover:text-purple"
      }`}
    >
      <>{children}</>
    </button>
  );
};

export default Button;
