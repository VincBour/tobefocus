import * as React from "react";

export interface ButtonProps {
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      className="hover:fill-white border-solid border-2 border-primary-600 rounded-md max-w-min content-center flex shadow-lg hover:scale-125 hover:bg-primary-600 hover:cursor-pointer transition delay-150 duration-300 ease-in-out"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
Button.displayName = "Button";
