function Button ({content, className, type}: any) {
    return (
        <button
            className={className}
            type={type}
        >
            {content}
        </button>
    )
}

export default Button
