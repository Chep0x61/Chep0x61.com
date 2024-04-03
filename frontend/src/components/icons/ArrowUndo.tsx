import { useTheme } from "next-themes";

const ArrowUndo = () => {
    const { theme } = useTheme();

    const lightColor = "#0f0f0f";
    const darkColor = "#f8f8f8";

    const currentColor = theme === "light" ? lightColor : darkColor;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
             stroke={currentColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
             className="lucide lucide-undo">
            <path d="M3 7v6h6"/>
            <path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"/>
        </svg>
    );
}

export default ArrowUndo;


