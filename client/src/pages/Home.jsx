import "../styles/Home.css";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero.png";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-wrapper">
          <div className="hero-left">
            <h1>Event Feedback<span> Made Simple</span></h1>
            <p>Collect valuable feedback, improve your events,
              and analyze attendee responses with ease.</p>
            <div className="hero-buttons">
              <Link to="/events">
                <button className="primary-btn">
                  Explore Events
                </button>
              </Link>
              <Link to="/feedbacks">
                <button className="secondary-btn">
                  View Feedback
                </button>
              </Link>
            </div>
          </div>
          <div className="hero-right">
            <img src={heroImage} alt="Hero" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose Our Platform?</h2>
          <div className="feature-cards">
            <div className="feature-card">
              <h3>📅 Event Management</h3>
              <p>Create and manage events effortlessly with a clean dashboard.</p>
            </div>
            <div className="feature-card">
              <h3>⭐ Feedback Collection</h3>
              <p>
                Gather attendee feedback securely and efficiently after every event.
              </p>
            </div>
            <div className="feature-card">
              <h3>📊 Analytics</h3>
              <p>Analyze responses to improve future events and attendee satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="stats">
        <div className="container stats-container">
          <div>
            <h2>100+</h2>
            <p>Events Hosted</p>
          </div>
          <div>
            <h2>500+</h2>
            <p>Feedback Received</p>
          </div>
          <div>
            <h2>98%</h2>
            <p>User Satisfaction</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2>Ready to collect valuable feedback?</h2>
          <p>Join us today and improve every event with meaningful insights.</p>
          <button>Get Started</button>
        </div>
      </section>
    </>
  );
}

export default Home;