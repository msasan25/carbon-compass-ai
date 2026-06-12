import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

function UploadMeal() {
    const [fileName, setFileName] = useState("No file selected");
    const [imageUrl, setImageUrl] = useState(null);
    const [impact, setImpact] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            setFileName(file.name);
            setImageUrl(URL.createObjectURL(file));

            // Mock AI result
            setImpact({
                carbon: "4.2 kg CO₂",
                recommendation: "Try a plant-based meal once this week."
            });
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

            <p style={{ marginTop: "15px" }}>
                Selected file: {fileName}
            </p>

            {imageUrl && (
                <div style={{ marginTop: "20px" }}>
                    <img
                        src={imageUrl}
                        alt="Meal Preview"
                        style={{
                            maxWidth: "300px",
                            borderRadius: "10px",
                            border: "1px solid #ddd"
                        }}
                    />
                </div>
            )}

            {impact && (
                <div
                    style={{
                        marginTop: "20px",
                        padding: "20px",
                        border: "1px solid #ddd",
                        borderRadius: "10px",
                        maxWidth: "400px"
                    }}
                >
                    <h3>Estimated Impact</h3>

                    <p>
                        <strong>Carbon Footprint:</strong> {impact.carbon}
                    </p>

                    <p>
                        <strong>Recommendation:</strong> {impact.recommendation}
                    </p>
                </div>
            )}

            <div style={{ marginTop: "20px" }}>
                <Link to="/progress">
                    <Button text="View Progress" />
                </Link>
            </div>
        </div>
    );
}

export default UploadMeal;