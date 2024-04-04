"use client"

import { useTheme } from "next-themes";
import ArrowDown from "@/components/icons/ArrowDown";

interface RotatingTextCircleProps {
    text: string;
}

const RotatingTextCircle: React.FC<RotatingTextCircleProps> = ({ text }) => {
    const { theme } = useTheme();
    const backgroundColor = theme === "light" ? "#1a1a1a" : "#f8f8f8";

    return (
        <div className="">
            <svg className="circle-svg" viewBox="0 0 500 500">
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
                <text className="circle-text" dy="80" textLength="1250">
                    <textPath className="font-poppins" xlinkHref="#textcircle_top">&nbsp;{text} - </textPath>
                </text>
                <g transform="translate(233, 300)">
                    <g className="animate-bounce">
                        <ArrowDown/>
                    </g>
                </g>
            </svg>
            <style jsx>{`
            .circle-text {
                font-size: 18px;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 12px;
                fill: ${backgroundColor};
            }

            .circle-svg {
                height: 300px;
                width: 300px;
            }
        `}</style>
        </div>
    );
};

export default RotatingTextCircle;
