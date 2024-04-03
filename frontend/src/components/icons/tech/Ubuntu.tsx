interface UbuntuProps {
    size?: string;
}

const Ubuntu: React.FC<UbuntuProps> = ({ size }) => {
    return (
        <div className={`w-${size} h-${size}`}>
            <img src="/icons/tech/ubuntu.png" alt="Ubuntu Logo" />
        </div>
    )
}

export default Ubuntu;