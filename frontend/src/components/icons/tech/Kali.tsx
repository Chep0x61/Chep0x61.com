interface KaliProps {
    size?: string;
}

const Kali: React.FC<KaliProps> = ({ size }) => {
    return (
        <div className={`w-${size} h-${size}`}>
            <img src="/icons/tech/kali.png" alt="Kali Linux Logo" />
        </div>
    )
}

export default Kali;