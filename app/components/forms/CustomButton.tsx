interface CustomButtonProps {
    label: string
    className?: string
    onClick: () => void
}

const CustomButton: React.FC<CustomButtonProps> = ({ label, className, onClick }) => {
    return (
        <div 
            onClick={onClick}
            className={`w-full py-4 bg-purple-600 hover:bg-purple-700 text-center text-white rounded-xl transition cursor-pointer ${className}`}>
            {label}
        </div>
    )
}

export default CustomButton