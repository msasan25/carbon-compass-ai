function LandingPage() {
    return (
        <div style={container}>

            <div style={hero}>
                <h1 style={title}>Carbon Compass AI</h1>

                <p style={subtitle}>
                    Understand your food and transport impact in seconds.
                </p>

                <button style={button}>Get Started</button>
            </div>

            <div style={section}>
                <h2>Why Carbon Compass?</h2>

                <div style={grid}>
                    <div style={card}>
                        <h3>🍽 Food Tracking</h3>
                        <p>Estimate carbon footprint of your meals</p>
                    </div>

                    <div style={card}>
                        <h3>🚗 Transport Impact</h3>
                        <p>Track emissions from daily travel</p>
                    </div>

                    <div style={card}>
                        <h3>📊 Progress Insights</h3>
                        <p>See how your habits improve over time</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

const container = {
    fontFamily: "Arial",
    padding: "40px"
};

const hero = {
    textAlign: "center",
    marginBottom: "50px"
};

const title = {
    fontSize: "48px",
    marginBottom: "10px"
};

const subtitle = {
    fontSize: "18px",
    color: "#555"
};

const button = {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer"
};

const section = {
    marginTop: "60px"
};

const grid = {
    display: "flex",
    gap: "20px",
    marginTop: "20px"
};

const card = {
    flex: 1,
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px"
};

export default LandingPage;