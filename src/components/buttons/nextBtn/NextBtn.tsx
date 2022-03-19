import * as React from 'react';
import { Icons } from '../../icons/Icons';

export interface NextBtnProps {
    onClick?: () => void;
}

export const NextBtn = ({ onClick }: NextBtnProps) => {
    return <div className="border-solid border-2 bg-primary-400 border-primary-600 rounded-md max-w-min content-center flex shadow-lg hover:scale-125 hover:bg-primary-600 hover:cursor-pointer transition delay-150 duration-300 ease-in-out" onClick={onClick}>
        <Icons icon='chevron_right' color='primary' css="fill-primary-600 hover:fill-white hover:cursor-pointer transition delay-150 duration-300 ease-in-out"/>
    </div>;
};

NextBtn.displayName = "NextBtn";