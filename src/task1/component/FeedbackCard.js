function FeedbackCard({ feedback }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "20px",
        width: "350px",
        margin: "20px auto",
        borderRadius: "8px",
      }}
    >
      <h3>Feedback Details</h3>

      <p>
        <strong>Name:</strong> {feedback.name}
      </p>

      <p>
        <strong>Email:</strong> {feedback.email}
      </p>

      <p>
        <strong>Feedback:</strong> {feedback.feedback}
      </p>
    </div>
  );
}

export default FeedbackCard;