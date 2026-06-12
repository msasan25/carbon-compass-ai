function Card({ title, description, emoji }) {
    return (
        <div style={card}>
            <h3>
                {emoji} {title}
            </h3>
            <p>{description}</p>
        </div>
    );
}

const card = {
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    flex: 1
};

export default Card;