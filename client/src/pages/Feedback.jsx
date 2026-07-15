import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getEventById } from "../services/api";
import "../styles/Feedback.css";
import { FaStar } from "react-icons/fa";
import toast from "react-hot-toast";
import { submitFeedback } from "../services/api";
import { useForm } from "react-hook-form";

function Feedback() {

  const { id } = useParams();

  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   rating: 5,
  //   comment: "",
  // });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
    watch
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      rating: 5,
      comment: ""
    }
  });
  const [hover, setHover] = useState(0);

  useEffect(() => {

    const fetchEvent = async () => {

      try {

        const res = await getEventById(id);

        setEvent(res.data);

      } catch (err) {

        console.log(err);

      } finally {

        setLoading(false);

      }

    };

    fetchEvent();

  }, [id]);

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  if (loading) return <h2>Loading...</h2>;

  if (!event) return <h2>Event not found.</h2>;

  // const onSubmit = async (data) => {
  //   e.preventDefault();

  //   try {
  //     await submitFeedback({
  //       eventId: event._id,
  //       name: formData.name,
  //       email: formData.email,
  //       rating: Number(formData.rating),
  //       comment: formData.comment,
  //     });

  //     toast.success("Feedback submitted successfully!");

  //     setFormData({
  //       name: "",
  //       email: "",
  //       rating: 5,
  //       comment: "",
  //     });

  //   } catch (error) {

  //     console.error(error);

  //     toast.error("Failed to submit feedback.");
  //   }
  // };

  const onSubmit = async (data) => {
    try {
      await submitFeedback({
        eventId: event._id,
        name: data.name,
        email: data.email,
        rating: Number(data.rating),
        comment: data.comment,
      });

      toast.success("Feedback submitted successfully!");

      reset();

      setValue("rating", 5);

    } catch (error) {
      console.error(error);
      toast.error("Failed to submit feedback.");
    }
  };

  return (
    <div>
      <div className="container">

        <h1>{event.title}</h1>

        <p>{event.description}</p>

        <p>📅 {new Date(event.date).toLocaleDateString()}</p>

        <p>⏰ {event.time}</p>

        <p>📍 {event.venue}</p>

      </div>

      <div className="feedback-form">

        <h2>Submit Your Feedback</h2>

        <form onSubmit={handleSubmit(onSubmit)}>

          {/* <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          /> */}

          <input
            type="text"
            placeholder="Your Name"
            {...register("name", {
              required: "Name is required"
            })}
          />

          {errors.name && (
            <p className="error">{errors.name.message}</p>
          )}

          {/* <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          /> */}

          <input
            type="email"
            placeholder="Email Address"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Enter a valid email"
              }
            })}
          />

          {errors.email && (
            <p className="error">{errors.email.message}</p>
          )}

          <div className="rating-stars">

            {[1, 2, 3, 4, 5].map((star) => (

              <FaStar

                key={star}

                size={34}

                className={
                  star <= (hover || watch("rating"))
                    ? "star active-star"
                    : "star"
                }

                onClick={() =>
                  setValue("rating", star)

                }


                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}


              />

            ))}
            <input
              type="hidden"
              {...register("rating", {
                required: "Rating is required"
              })}
            />

          </div>

          {/* <textarea
            rows="5"
            name="comment"
            placeholder="Write your feedback..."
            value={formData.comment}
            onChange={handleChange}
          /> */}

          <textarea
            rows="5"
            placeholder="Write your feedback..."
            {...register("comment", {
              required: "Comment is required",
              minLength: {
                value: 10,
                message: "Comment should be at least 10 characters"
              }
            })}
          />

          {errors.comment && (
            <p className="error">{errors.comment.message}</p>
          )}

          <button type="submit">
            Submit Feedback
          </button>

        </form>

      </div>
    </div>

  );

}

export default Feedback;