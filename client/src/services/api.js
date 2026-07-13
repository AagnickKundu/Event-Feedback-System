import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/api",
});

export const getEvents = () => API.get("/events");

export const getEventById = (id) =>
    API.get(`/events/${id}`);

export const submitFeedback = (data) =>
    API.post("/feedback", data);

export const getAllFeedback = () =>
    API.get("/feedback");

export const getFeedbackByEvent = (id) =>
    API.get(`/feedback/event/${id}`);

export const deleteFeedback = (id) =>
    API.delete(`/feedback/${id}`);

export default API;