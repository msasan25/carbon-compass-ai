import Card from "../components/Card";

function Dashboard() {
    return (
        <div style={container}>
            <h1 style={title}>Dashboard</h1>

            <p style={subtitle}>
                Track your carbon impact at a glance
            </p>

            <div style={grid}>
                <Card
                    emoji="🍽"
                    title="Food Impact"
                    description="Monitor emissions from your meals"
                />

                <Card
                    emoji="🚗"
                    title="Transport Impact"
                    description="Track travel-related carbon footprint"
                />

                <Card
                    emoji="📈"
                    title="Weekly Challenge"
                    description="Improve your sustainability score"
                />
            </div>
        </div>
    );
}

const container = {
    padding: "40px",
    fontFamily: "Arial"
};

const title = {
    fontSize: "40px",
    marginBottom: "10px"
};

const subtitle = {
    color: "#555",
    marginBottom: "30px"
};

const grid = {
    display: "flex",
    gap: "20px"
};

export default Dashboard;