import * as React from "react";
import { Icons } from "../../icons/Icons";

export interface StartBtnProps {
    onClick?: () => void;
}

export const StartBtn = ({ onClick }: StartBtnProps) => {
  const onClickStart = React.useCallback(() => {
      onClick?.();
  }, [onClick]);
    
  return (
    <div className="border-solid border-2 bg-primary-400  border-primary-600 rounded-md max-w-min content-center flex shadow-lg hover:scale-125 hover:bg-primary-600 hover:cursor-pointer transition delay-150 duration-300 ease-in-out" onClick={onClickStart}>
      <Icons icon="play_circle" color="primary" css="hover:fill-primary-400 hover:cursor-pointer transition delay-150 duration-300 ease-in-out" />
    </div>
  );
};
StartBtn.displayName = "StartBtn";
