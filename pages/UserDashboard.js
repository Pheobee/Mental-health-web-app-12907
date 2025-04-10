import React from "react";
import MoodTracker from "../components/MoodTracker";
import SelfHelpResources from "../components/SelfHelpResources";
import Appointments from "../components/Appointments";
import "../css/UserDashboard.css";
import Chatbot from "../components/Chatbot";
import { Link } from 'react-router-dom';
import '../css/Header.css';
import logo from '../img/logo.jpg'
import user1 from '../img/user1.jpg'
import SelfAssessmentTests from "../pages/SelfAssessmentTests";


const UserDashboard = () => {
  return (
    <div className="user-dashboard">       
      {/* Sidebar */}
        <header className="header header1">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
          </div>
          <div className="user-profile">
              <img
              src={user1}
              alt="User Profile"
              className="profile-pic"
            />
                <div className="user-info">
                <span>Sam Johnson</span>
                <p>Active</p>
              </div>
          </div>
        </header>
      <aside className="sidebar">
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#therapist-directory">Therapist Directory</a>
            </li>
            <li>
              <a href="#resources-library">Resources Library</a>
            </li>
            <li>
              <a href="#mood-tracker">Mood Tracker</a>
            </li>
            <li>
              <a href="#community-support">Community Support</a>
            </li>
            <li>
              <a href="#appointments">Appointments</a>
            </li>
            <li>
              <a href="#settings">Settings</a>
            </li>
            <li>
              <a href="#logout">Log Out</a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Sections */}
        <div id="mood-tracker">
          <MoodTracker />
        </div>
        <div id="resources-library">
          <SelfHelpResources />
        </div>
        <div id="appointments">
          <Appointments />
        </div>
        <div>
          <Chatbot />
        </div>
        <div>
          <SelfAssessmentTests />
        </div>
        
      </main>
    </div>
  );
};

export default UserDashboard;
