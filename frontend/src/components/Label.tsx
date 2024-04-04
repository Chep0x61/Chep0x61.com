import React from 'react';

interface TechLabelProps {
    text: string;
    w?: string;
    href?: string;
    icon?: React.ReactNode;
}

const Label: React.FC<TechLabelProps> = ({ text = "", w = "80px", href, icon}) => {
    return (
        <a href={href} target="_blank" rel="noreferrer"  className={`flex gap-2 items-center text-center w-[180px] ml-8 text-base font-bold border rounded-lg border border-[#f8f8f8] dark:border-[#1a1a1a] hover:cursor-pointer hover:border-[#1a1a1a] hover:dark:border-gray-300`}>
            {icon && (
                <i className={`bg-gray-200 dark:bg-gray-100 rounded-lg p-1`}>
                    {icon}
                </i>
            )}
            <span>{text}</span>
        </a>
    );
}

export default Label;
