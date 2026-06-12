function Button({ text }) {
    return (
        <button style={buttonStyle}>
            {text}
        </button>
    );
}

const buttonStyle = {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "8px",
    border: "none"
};

export default Button;