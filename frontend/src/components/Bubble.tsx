import React, { useState } from 'react';

interface BubbleLabelProps {
    text: string;
    href?: string;
    hover?: boolean;
    icon?: React.ReactNode;
}

const Bubble: React.FC<BubbleLabelProps> = ({ text = "", href, hover = false, icon }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    const handleHover = () => {
            setShowTooltip(true);
    };

    const handleLeave = () => {
            setShowTooltip(false);
    };

    const handleClick = () => {
        if (!hover) {
            setShowTooltip(!showTooltip);
        }
    };

    return (
        <div className="relative inline-block">
            <a
                href={href}
                className={`flex justify-center items-center text-center w-8 h-8 text-base font-bold rounded-full`}
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
                onClick={handleClick}
            >
                {icon && (
                    <i className={``}>
                        {icon}
                    </i>
                )}
            </a>
            {showTooltip && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded-md text-sm">
                    {text}
                </div>
            )}
        </div>
    );
}

export default Bubble;
