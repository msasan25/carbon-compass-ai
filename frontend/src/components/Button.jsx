function Button({ text, onClick }) {
    return (
        <button style={buttonStyle} onClick={onClick}>
            {text}
        </button>
    );
}

const buttonStyle = {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "8px",
    border: "none",
};

export default Button;