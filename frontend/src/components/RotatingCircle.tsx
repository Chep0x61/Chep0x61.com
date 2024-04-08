"use client"

import ArrowDown from "@/components/icons/ArrowDown";

interface RotatingTextCircleProps {
    text: string;
}

const RotatingTextCircle: React.FC<RotatingTextCircleProps> = ({ text }) => {
    return (
        <div className="">
            <svg className="w-[300px] h-[300px]" viewBox="0 0 500 500">
                <defs>
                    <path
                        d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"
                        id="textcircle_top"
                    >
                        <animateTransform
                            attributeName="transform"
                            begin="0s"
                            dur="20s"
                            type="rotate"
                            from="0 250 250"
                            to="360 250 250"
                            repeatCount="indefinite"
                        />
                    </path>
                </defs>
                <text className={`font-poppins tracking-[12px] text-[18px] font-semibold uppercase fill-[#1a1a1a] dark:fill-[#ffffff]`} dy="80" textLength="1250">
                    <textPath className="font-poppins" xlinkHref="#textcircle_top">&nbsp;{text} - </textPath>
                </text>
                <g transform="translate(233, 300)">
                    <g className="animate-bounce">
                        <ArrowDown/>
                    </g>
                </g>
            </svg>
        </div>
    );
};

export default RotatingTextCircle;
