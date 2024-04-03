interface CompassProps {
    size?: string;
}


const Compass: React.FC<CompassProps> = ({ size }) => {
    return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="black"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-drafting-compass">
        <circle cx="12" cy="5" r="2"/>
        <path d="m3 21 8.02-14.26"/>
        <path d="m12.99 6.74 1.93 3.44"/>
        <path d="M19 12c-3.87 4-10.13 4-14 0"/>
        <path d="m21 21-2.16-3.84"/>
    </svg>
    );
}

export default Compass;


