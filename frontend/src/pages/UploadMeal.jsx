import { Link } from "react-router-dom";
import Button from "../components/Button";

function UploadMeal() {
    return (
        <div style={{ padding: "40px" }}>
            <h1>Upload Meal</h1>

            <input type="file" />

            <div style={{ marginTop: "20px" }}>
                <Link to="/progress">
                    <Button text="View Progress" />
                </Link>
            </div>
        </div>
    );
}

export default UploadMeal;