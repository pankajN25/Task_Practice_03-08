import { useState } from "react";
import { useNavigate } from "react-router-dom";

function FeedbackForm() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // Navigate to FeedbackList and send data
    navigate("/feedbacklist", {
      state: {
        name,
        email,
        feedback,
      },
    });
  }

  return (
    <div className="container">
      <h2>Feedback Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <br />
        <br />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <br />
        <br />

        <textarea
          placeholder="Enter your feedback"
          rows="5"
          cols="40"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
        ></textarea>

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FeedbackForm;