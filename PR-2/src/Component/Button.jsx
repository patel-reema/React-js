const Button = ({ name, count, handleClick }) => {
    return (
        <button
            onClick={handleClick}
            disabled={
                (count <= 0 && name === "Dec") ||
                (count === 0 && name === "Reset")
            }>
            {name}
        </button>
    )
};

export default Button;