interface RainbowButtonProps {
    redirection: string;
    text: string;
}

const RainbowButton: React.FC<RainbowButtonProps> = ({ redirection, text }) => {
    return (
        <div className="relative inline-flex group">
            <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r bg-[#1f2937] from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
            </div>
            <a href={redirection} target="_blank" rel="noopener noreferrer"
               className="hover:pointer-click relative inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-bold text-white transition-all duration-200 bg-gray-800 dark:bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">{text}
            </a>
        </div>
    );
};

export default RainbowButton;
