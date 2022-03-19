import React from 'react';

interface TitleBtnProps {
    label: string;
    isSelected: boolean;
}

export const TitleBtn = ({ label, isSelected }:TitleBtnProps) => {
    return <button id={label} className={`px-4 py-2 text-3xl tracking-wide rounded-lg font-bold text-white ${isSelected ? "bg-primary-400" : ""}`}>{label}</button>
};
