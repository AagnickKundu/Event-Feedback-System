import "../styles/ConfirmModal.css";
import { FaTrashAlt } from "react-icons/fa";

function ConfirmModal({
    isOpen,
    title,
    message,
    onConfirm,
    onCancel,
    isDeleting,
}) {

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2 className="modal-title">
                    <FaTrashAlt className="modal-icon" />
                    {title}
                </h2>
                <p>{message}</p>
                <div className="modal-buttons">
                    <button
                        className="cancel-btn"
                        onClick={onCancel}
                    >
                        Cancel
                    </button>
                    <button
                        className="delete-btn"
                        onClick={onConfirm}
                        disabled={isDeleting}
                    >
                        {isDeleting ? "Deleting..." : "Delete"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmModal;