import { useEffect, useState } from "react";
import API from "../services/api";
import EventCard from "../components/EventCard";

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
        <section className="container">

            <h1 className="section-title">
                Upcoming Events
            </h1>

            {loading && <h2>Loading Events...</h2>}

            {error && <h2>{error}</h2>}

            {!loading && !error && events.length === 0 && (
                <p>No events available.</p>
            )}

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit,minmax(330px,1fr))",
                    justifyContent: "center",
                    gap: "30px",
                    marginBottom: "80px",
                }}
            >
                {events.map((event) => (
                    <EventCard
                        key={event._id}
                        event={event}
                    />
                ))}
            </div>

        </section>
    );

}

export default Events;