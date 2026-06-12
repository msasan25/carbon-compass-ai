import { useState } from "react";
import Button from "../components/Button";

function UploadMeal() {
    const [mealName, setMealName] = useState("");
    const [imageUrl, setImageUrl] = useState(null);
    const [impact, setImpact] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            setImageUrl(URL.createObjectURL(file));
        }
    };

    const analyzeMeal = async () => {
        try {
            const response = await fetch(
                "http://localhost:5000/analyze-meal",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        mealName,
                    }),
                }
            );

            const data = await response.json();
            setImpact(data);
        } catch (error) {
            console.error("Error analyzing meal:", error);
        }
    };

    return (
        <div style={{ padding: "40px" }}>
            <h1>Upload Meal</h1>

            <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
            />

            {imageUrl && (
                <div style={{ marginTop: "20px" }}>
                    <img
                        src={imageUrl}
                        alt="Meal Preview"
                        style={{
                            maxWidth: "300px",
                            borderRadius: "10px",
                        }}
                    />
                </div>
            )}

            <div style={{ marginTop: "20px" }}>
                <input
                    type="text"
                    placeholder="Enter meal name"
                    value={mealName}
                    onChange={(e) => setMealName(e.target.value)}
                />
            </div>

            <div style={{ marginTop: "20px" }}>
                <Button
                    text="Analyze Meal"
                    onClick={analyzeMeal}
                />
            </div>

            {impact && (
                <div style={{ marginTop: "20px" }}>
                    <h3>Estimated Impact</h3>

                    <p>
                        <strong>Meal:</strong> {impact.meal}
                    </p>

                    <p>
                        <strong>Carbon Footprint:</strong> {impact.carbon}
                    </p>

                    <p>
                        <strong>Recommendation:</strong> {impact.recommendation}
                    </p>
                </div>
            )}
        </div>
    );
}

export default UploadMeal;