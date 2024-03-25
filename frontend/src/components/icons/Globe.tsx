interface GlobeProps {
    size?: string;
    href?: string;
}

const Globe: React.FC<GlobeProps> = ({ size, href }) => {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer"  className={`${href ? 'cursor-pointer' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                 className="lucide lucide-globe">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                <path d="M2 12h20"/>
            </svg>
        </a>
    );
}

export default Globe;
