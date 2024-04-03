interface ArchProps {
    size?: string;
}

const Arch: React.FC<ArchProps> = ({ size }) => {
    return (
        <div className={`w-${size} h-${size}`}>
            <img src="/icons/tech/arch.png" alt="Arch Linux Logo" />
        </div>
    )
}

export default Arch;