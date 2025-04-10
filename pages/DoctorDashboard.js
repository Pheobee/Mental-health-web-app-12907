import React, { useState, useEffect } from "react";
import "../css/DoctorDashboard.css";
import user5 from '../img/doctor3.jpg'

const DoctorDashboard = () => {
  const [appointments, setAppointments] = useState([
    { id: 1, patient: "Arlene Lane", specialty: "Depression", date: "March 30th, 2024", time: "2:00 PM EST" },
    { id: 2, patient: "Sitora Aaron", specialty: "Psychotherapy", date: "April 20th, 2024", time: "8:00 AM EST" },
  ]);

  const [schedule, setSchedule] = useState([
    { id: 1, time: "10:00", date: "12/05/2024", patientName: "Nick Johnson", status: "Ongoing" },
    { id: 2, time: "10:00", date: "15/05/2024", patientName: "Nick Johnson", status: "Start-off" },
    { id: 3, time: "10:00", date: "15/05/2024", patientName: "Nick Johnson", status: "Start-off" },
    { id: 4, time: "10:00", date: "15/05/2024", patientName: "Nick Johnson", status: "Start-off" },
    { id: 5, time: "10:00", date: "15/05/2024", patientName: "Nick Johnson", status: "Start-off" },
  ]);

  const handleCancelAppointment = (id) => {
    const confirmCancel = window.confirm("Are you sure you want to cancel this appointment?");
    if (confirmCancel) {
      setAppointments((prev) => prev.filter((appointment) => appointment.id !== id));
      alert("Appointment has been cancelled.");
    }
  };

  return (
    <div className="doctor-dashboard">
      <header className="dashboard-header">
        <h2>Welcome back, Dr. Johnny!</h2>
      </header>

      <div className="dashboard-content">
        {/* Profile Section */}
        <div className="profile-section">
          <img src={user5} alt="Dr. Johnny Whiteman" className="profile-image" />
          <h3>Dr. Johnny Whiteman</h3>
          <p>Clinical Psychologist</p>
          <div className="action-buttons">
            <button className="call-button">Call</button>
            <button className="videochat-button">Videochat</button>
          </div>
        </div>

        {/* Today's Schedule Section */}
        <div className="schedule-section">
          <h3>Today's Schedule</h3>
          {appointments.map((appointment) => (
            <div className="appointment-card" key={appointment.id}>
              <p>
                <strong>Patient:</strong> {appointment.patient} | {appointment.specialty}
              </p>
              <p>
                <strong>Date:</strong> {appointment.date} | <strong>Time:</strong> {appointment.time}
              </p>
              <button onClick={() => handleCancelAppointment(appointment.id)} className="cancel-button">
                Cancel
              </button>
            </div>
          ))}
          <button className="view-all-button">View all appointments</button>
        </div>

        {/* Calendar Section */}
        <div className="calendar-section">
          <h3>Calendar</h3>
          <div className="calendar-grid">
            {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((day) => (
              <div className="calendar-day" key={day}>
                <p>{day}</p>
                <span className="calendar-mark">X</span>
              </div>
            ))}
          </div>
          <button className="edit-schedule-button">Edit Schedule</button>
          <button className="add-slot-button">Add New Slot</button>
        </div>
      </div>

      {/* Table Section */}
      <div className="table-section">
        <h3>Upcoming Appointments</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Time</th>
              <th>Date</th>
              <th>Patient Name</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((slot) => (
              <tr key={slot.id}>
                <td>{slot.id}</td>
                <td>{slot.time}</td>
                <td>{slot.date}</td>
                <td>{slot.patientName}</td>
                <td>{slot.status}</td>
                <td>
                  <button className="view-button">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoctorDashboard;
