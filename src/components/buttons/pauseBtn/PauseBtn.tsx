import React from 'react';
import { Icons } from '../../icons/Icons';

export interface PauseBtnProps {
    onClick?: () => void;
}

export const PauseBtn = ({ onClick }: PauseBtnProps) => {
  // const [icon, setIcon] = React.useState<Extract<IconsType, "play_circle" | "pause">>("play_circle");
  const onClickStart = React.useCallback(() => {
      // setIcon(prev => prev === "play_circle" ? "pause" : "play_circle");
      onClick?.();
  }, [onClick]);
    
  return (
    <div className="border-solid border-2 bg-primary-400  border-primary-600 rounded-md max-w-min content-center flex shadow-lg hover:scale-125 hover:bg-primary-600 hover:cursor-pointer transition delay-150 duration-300 ease-in-out" onClick={onClickStart}>
      <Icons icon="pause" color="primary" css="hover:fill-primary-400 hover:cursor-pointer transition delay-150 duration-300 ease-in-out" />
    </div>
  );
};

PauseBtn.displayName = "PauseBtn";