import React from "react";

export interface TimerProps {
    minutes: string,
    secondes: string;
}

export const Timer = ({minutes, secondes}: TimerProps) => {
  return (
    <div className="flex flex-row max-w-min bg-primary-400 font-bold text-8xl border-solid border-2 border-indigo-600 rounded-md shadow-lg ">
      <div className="mr-2 py-4 pl-4 text-white">{minutes}</div>
      <div className="py-4 text-white">:</div>
      <div className="ml-2 py-4 pr-4 text-white">{secondes}</div>
    </div>
  );
};
