import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ConfirmModal from "../components/ConfirmModal";

import {
  getAllFeedback,
  deleteFeedback,
} from "../services/api";

import FeedbackCard from "../components/FeedbackCard";

function FeedbackList() {

  const [feedbacks, setFeedbacks] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [selectedId, setSelectedId] = useState(null);

  const [isDeleting, setIsDeleting] = useState(false);

  const fetchFeedback = async () => {
    try {

      const res = await getAllFeedback();

      setFeedbacks(res.data);

    } catch (error) {

      console.error(error);

      toast.error("Unable to load feedback.");

    }
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

  const openDeleteModal = (id) => {

    setSelectedId(id);

    setShowModal(true);

  };

  // const confirmDelete = async () => {

  //   // if (!window.confirm("Delete this feedback?"))
  //   //   return;

  //   const openDeleteModal = (id) => {

  //     setSelectedId(id);

  //     setShowModal(true);

  //   };
  //   try {

  //     await deleteFeedback(id);

  //     toast.success("Feedback deleted.");

  //     fetchFeedback();

  //   } catch (error) {

  //     toast.error("Delete failed.");

  //   }

  // };

  const confirmDelete = async () => {

    try {

      setIsDeleting(true);

      await deleteFeedback(selectedId);

      toast.success("Feedback deleted.");

      fetchFeedback();

      setShowModal(false);

      setSelectedId(null);

    } catch (error) {

      toast.error("Delete failed.");

    } finally {

      setIsDeleting(false);

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
            onDelete={openDeleteModal}
          />

        ))


      )}
      <ConfirmModal

        isOpen={showModal}

        title="Delete Feedback"

        message="Are you sure you want to delete this feedback? This action cannot be undone."
        isDeleting={isDeleting}
        onCancel={() => {

          setShowModal(false);

          setSelectedId(null);

        }}

        onConfirm={confirmDelete}

      />

    </div>

  );

}

export default FeedbackList;