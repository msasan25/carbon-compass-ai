const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

app.get("/", (req, res) => {
    res.send("Carbon Compass AI Backend Running");
});

app.post("/analyze-meal", (req, res) => {
    const { mealName } = req.body;

    console.log("Meal received:", mealName);

    res.json({
        meal: mealName,
        carbon: "Analysis pending AI integration",
        recommendation: "AI recommendation pending",
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});