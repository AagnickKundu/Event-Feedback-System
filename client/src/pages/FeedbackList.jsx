import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  getAllFeedback,
  deleteFeedback,
} from "../services/api";

import FeedbackCard from "../components/FeedbackCard";

function FeedbackList() {

  const [feedbacks, setFeedbacks] = useState([]);

  const fetchFeedback = async () => {
    try {

      const res = await getAllFeedback();

      setFeedbacks(res.data);

    } catch (error) {

      console.log(error);

      toast.error("Unable to load feedback.");

    }
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

  const handleDelete = async (id) => {

    if (!window.confirm("Delete this feedback?"))
      return;

    try {

      await deleteFeedback(id);

      toast.success("Feedback deleted.");

      fetchFeedback();

    } catch (error) {

      toast.error("Delete failed.");

    }

  };

  return (

    <div className="container">

      <h1 className="section-title">

        All Feedback

      </h1>

      {feedbacks.length === 0 ? (

        <p>No feedback available.</p>

      ) : (

        feedbacks.map((feedback) => (

          <FeedbackCard
            key={feedback._id}
            feedback={feedback}
            onDelete={handleDelete}
          />

        ))

      )}

    </div>

  );

}

export default FeedbackList;