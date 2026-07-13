import { Link } from "react-router-dom";
import "../styles/EventCard.css";

function EventCard({ event }) {
    return (
        <div className="event-card">

            <div className="event-image">
                <img
                    src={
                        event.image && event.image.trim() !== ""
                            ? event.image
                            : "https://placehold.co/600x350/e2e8f0/475569?text=Event+Image"
                    }
                    alt={event.title}
                />
            </div>

            <div className="event-content">

                <span className="category">
                    {event.category}
                </span>

                <h2>{event.title}</h2>

                <p className="description">
                    {event.description}
                </p>

                <div className="event-info">

                    <p>
                        📅 {new Date(event.date).toLocaleDateString()}
                    </p>

                    <p>
                        ⏰ {event.time}
                    </p>

                    <p>
                        📍 {event.venue}
                    </p>

                </div>

                <Link to={`/feedback/${event._id}`}>
                    <button>
                        Give Feedback
                    </button>
                </Link>

            </div>

        </div>
    );
}

export default EventCard;