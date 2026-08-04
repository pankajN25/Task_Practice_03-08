import { useLocation, useNavigate } from "react-router-dom";
import FeedbackCard from "./FeedbackCard";

function FeedbackList() {
  const location = useLocation();
  const navigate = useNavigate();

  const feedback = location.state;

  // If user opens this page directly
  if (!feedback) {
    return (
      <div>
        <h2>No Feedback Found!</h2>
        <button onClick={() => navigate("/")}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Submitted Feedback</h2>

      <FeedbackCard feedback={feedback} />

      <br />

      <button onClick={() => navigate("/")}>
        Back to Form
      </button>
    </div>
  );
}

export default FeedbackList;