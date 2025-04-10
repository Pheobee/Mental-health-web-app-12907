import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ApptPic from "../img/Calendar-bro.svg";
import "../css/Appointments.css";

const Appointments = () => {
  const [appointments, setAppointments] = useState([
    { id: 1, name: "Dr. Arlene Lane", specialty: "Licensed Professional Counselor", dateTime: "2024-03-30T14:00:00-05:00" },
    { id: 2, name: "Dr. Sitora Aaron", specialty: "Psychotherapist", dateTime: "2024-04-20T08:00:00-05:00" },
    { id: 3, name: "Dr. Tyler Petrov", specialty: "Clinical Psychologist", dateTime: "2024-05-10T11:00:00-05:00" },
    { id: 4, name: "Dr. Emily Nolan", specialty: "Stress Management Specialist", dateTime: "2024-06-05T15:00:00-05:00" },
    { id: 5, name: "Dr. Michael Scott", specialty: "Anxiety Disorder Counselor", dateTime: "2025-01-22T16:00:00-05:00" }, // Today
    { id: 6, name: "Dr. Sarah Smith", specialty: "Couples Counselor", dateTime: "2024-08-22T16:30:00-05:00" },
    { id: 7, name: "Dr. Robert Brown", specialty: "Depression Specialist", dateTime: "2024-09-15T13:00:00-05:00" },
  ]);

  const navigate = useNavigate();

  const handleCancelAppointment = (appointment) => {
    const appointmentDateTime = new Date(appointment.dateTime);
    const currentTime = new Date();
    const timeDifference = (appointmentDateTime - currentTime) / (1000 * 60 * 60); // Difference in hours

    // Validate date
    if (isNaN(appointmentDateTime.getTime())) {
      alert("Invalid appointment date. Please contact support.");
      return;
    }

    // Confirmation dialog
    const confirmCancel = window.confirm(
      `Are you sure you want to cancel your appointment with ${appointment.name}?`
    );

    if (!confirmCancel) {
      return;
    }

    // Check if the time difference is less than 2 hours
    if (timeDifference < 2) {
      alert(
        "You can't cancel the appointment when it is less than 2 hours left. Payment will not be refunded."
      );
      return;
    }

    // Remove the appointment and show success message
    setAppointments((prev) => prev.filter((a) => a.id !== appointment.id));
    alert(
      "Your appointment has been cancelled successfully. Please reschedule for your mental health."
    );
  };

  return (
    <div className="appointments">
      <div className="imageAppt">
        <img src={ApptPic} alt="Appointments Illustration" />
      </div>
      <div className="apptContent">
        <h3>Appointments</h3>
        <div className="appointments-list">
          {appointments.map((appointment) => (
            <div className="appointment-card" key={appointment.id}>
              <p><strong>{appointment.name}</strong></p>
              <p>{appointment.specialty}</p>
              <p>{new Date(appointment.dateTime).toLocaleDateString()}</p>
              <p>{new Date(appointment.dateTime).toLocaleTimeString()}</p>
              <button
                onClick={() => handleCancelAppointment(appointment)}
                className="cancel-button"
              >
                Cancel
              </button>
            </div>
          ))}
        </div>
        <div className="appointment-actions">
          <button className="view-all-button">View All Appointments</button>
          <button
            className="book-therapist-button"
            onClick={() => navigate("/book-therapist")}
          >
            Book a Therapist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
