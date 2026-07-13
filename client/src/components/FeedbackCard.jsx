import "../styles/FeedbackCard.css";

function FeedbackCard({ feedback, onDelete }) {
  return (
    <div className="feedback-card">

      <div className="feedback-header">
        <h3>{feedback.eventId?.title}</h3>

        <span>{"⭐".repeat(feedback.rating)}</span>
      </div>

      <p className="feedback-comment">
        {feedback.comment}
      </p>

      <div className="feedback-info">
        <p><strong>Name:</strong> {feedback.name}</p>
        <p><strong>Email:</strong> {feedback.email}</p>
        <p>
          <strong>Date:</strong>{" "}
          {new Date(feedback.createdAt).toLocaleDateString()}
        </p>
      </div>

      <button
        className="delete-btn"
        onClick={() => onDelete(feedback._id)}
      >
        Delete
      </button>

    </div>
  );
}

export default FeedbackCard;