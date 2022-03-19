import React from "react";
import { ChevronRightIcon, PauseIcon, PlayIcon } from '@heroicons/react/solid';
export type IconsType = "chevron_right" | "pause" | "play_circle"

export interface IconsProps {
  icon: IconsType;
  color: 'primary' | 'secondary',
  css?: string;
}

export const Icons = ({ icon, color, css }: IconsProps) => {
  
    const mapper: {[key: string]: JSX.Element} =  {
        "chevron_right": <ChevronRightIcon className={`h-20 w-20 fill-white`}/>,
        // "pause": <PauseIcon className={`h-20 w-20 fill-${color}-600 ${css}`}/>,
        "pause": <PauseIcon className={`h-20 w-20 fill-white`}/>,
        "play_circle": <PlayIcon className={`h-20 w-20 fill-white`}/>
    }
    return mapper[icon];
};