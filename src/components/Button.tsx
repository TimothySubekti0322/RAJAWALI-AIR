interface Props {
    content?: string,
    className?: string,
    type?: "submit" | "button" | "reset",
    onClick?: () => void,
    onSubmit?: () => void
}

function Button({ content, className, type, onClick, onSubmit }: Props) {
    return (
        <button
            onClick={onClick}
            onSubmit={onSubmit}
            className={className}
            type={type}
        >
            {content}
        </button>
    )
}

export default Button
