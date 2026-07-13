import { useEffect, useState } from "react";
import API from "../services/api";

function Events() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await API.get("/events");
                setEvents(response.data);
            } catch (err) {
                console.error(err);
                setError("Failed to fetch events.");
            } finally {
                setLoading(false);
            }
        };
        fetchEvents();
    }, []);
    if (loading) return <h2>Loading events...</h2>;
    if (error) return <h2>{error}</h2>;
    return (
        <div className="container">
            <h1>Upcoming Events</h1>
            <hr />
            {events.length === 0 ? (
                <p>No events available.</p>
            ) : (
                events.map((event) => (
                    <div key={event._id}>
                        <h2>{event.title}</h2>
                        <p>{event.description}</p>
                        <p>{event.venue}</p>
                        <hr />
                    </div>
                ))
            )}
        </div>
    );
}

export default Events;