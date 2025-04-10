import React, { useState, useEffect } from "react";
import "../css/TherapistBookingSystem.css";
import { Link } from 'react-router-dom';
import '../css/Header.css';
import logo from '../img/logo.jpg'
import user1 from '../img/doctor1.jpg'
import user2 from '../img/doctor2.jpg'
import user3 from '../img/doctor3.jpg'
import user4 from '../img/doctor4.jpg'
import user5 from '../img/doctor5.jpg'
import user6 from '../img/doctor6.jpg'
import axios from "axios";

const TherapistBookingSystem = () => {
  const [therapists, setTherapists] = useState([
    {
      id: 1,
      name: "Dr. Tyler Petrov",
      specialty: "Clinical Psychologist",
      price: 20,
      image: user1,
      about: "Dr. Tyler Petrov is a seasoned clinical psychologist with over a decade of experience in assisting individuals overcome a wide range of psychological challenges. He is dedicated to fostering a safe and supportive environment where clients feel empowered to confront their issues and develop meaningful coping strategies.",
      experience: "Dr. Petrov has specialized in cognitive-behavioral therapy (CBT) and mindfulness techniques for over 10 years. His expertise also includes working with patients suffering from anxiety, depression, and trauma-related disorders, helping them build resilience and a positive outlook on life.",
    },
    {
      id: 2,
      name: "Dr. Arlene Lane",
      specialty: "Licensed Professional Counselor",
      price: 30,
      image: user5, 
      about: "Dr. Arlene Lane has spent her career helping clients navigate personal and emotional challenges to enhance their mental well-being. She focuses on providing individualized care and ensuring that her clients feel heard and understood as they work towards a healthier, more balanced life.",
      experience: "With 8 years of experience in family counseling and relationship therapy, Dr. Lane has worked extensively with individuals and families facing difficult transitions. She employs evidence-based methods to guide her clients toward improved communication, stronger relationships, and overall emotional health.",
    },
    {
      id: 3,
      name: "Dr. John Smith",
      specialty: "Couples Counselor",
      price: 50,
      image: user3, 
      about: "Dr. John Smith specializes in helping couples rebuild trust, improve communication, and strengthen their relationships. His approach focuses on creating a safe space for partners to express their feelings and work together to resolve conflicts effectively.",
      experience: "With over 12 years of experience in relationship and couples counseling, Dr. Smith has guided countless couples through challenges such as infidelity, financial stress, and parenting disagreements. He integrates therapeutic techniques that foster empathy and mutual respect between partners.",
    },
    {
      id: 4,
      name: "Dr. Emily Nolan",
      specialty: "Stress Management Specialist",
      price: 25,
      image: user4, 
      about: "Dr. Emily Nolan is an expert in stress management techniques, helping clients achieve a healthier work-life balance. Her compassionate and practical approach equips individuals with tools to identify stressors and adopt strategies for lasting peace of mind.",
      experience: "Dr. Nolan has over 7 years of experience providing stress management training to individuals and groups. Her expertise includes time management, relaxation techniques, and behavioral changes, helping clients lead more productive and fulfilling lives.",
    },
    {
      id: 5,
      name: "Dr. Robert Brown",
      specialty: "Depression Specialist",
      price: 40,
      image: user2, 
      about: "Dr. Robert Brown is deeply committed to helping clients overcome depression and regain hope in their lives. His empathetic and results-driven approach allows clients to navigate their emotions and develop effective coping mechanisms.",
      experience: "With 15 years of experience in depression therapy, Dr. Brown specializes in mindfulness-based approaches and evidence-backed treatments. He has supported countless clients in their journey toward improved mental health and emotional resilience.",
    },
  ]);
  const [selectedTherapist, setSelectedTherapist] = useState(null);
  const [filters, setFilters] = useState({
    city: "Tashkent",
    district: "",
    specialty: "",
  });

  const handleSearchClick = async () => {
    try {
      // Build search params dynamically
      const searchParams = {
        city: filters.city,
        district: filters.district,
        specialty: filters.specialty,
        keyword: searchKeyword,
      };
  
      // Filter non-empty values to avoid unnecessary query params
      const params = Object.fromEntries(
        Object.entries(searchParams).filter(([_, value]) => value.trim() !== "")
      );
  
      // Fetch filtered therapists
      const response = await axios.get("/api/Therapists", { params });
      setTherapists(response.data); // Update therapists based on filter results
    } catch (error) {
      console.error("Error fetching filtered therapists:", error);
    }
  };

  const [searchKeyword, setSearchKeyword] = useState("");
  const [activeTab, setActiveTab] = useState("About");

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleTherapistClick = (therapist) => {
    setSelectedTherapist(therapist);
  };

  const handleBookAppointment = () => {
    if (!selectedTherapist) return;
    alert(`Appointment booked with ${selectedTherapist.name}`);
  };

  return (
    <div className="therapist-booking-system">
 
      {/* Sidebar Filter Section */}
      <div className="filter-section">
  <h3>Filter therapists</h3>
  <input
    type="text"
    placeholder="Search by name or keyword"
    value={searchKeyword}
    onChange={(e) => setSearchKeyword(e.target.value)}
  />
  <h4>City</h4>
  <select name="city" value={filters.city} onChange={handleFilterChange}>
    <option value="Tashkent">Tashkent</option>
  </select>
  <h4>District</h4>
  <select name="district" value={filters.district} onChange={handleFilterChange}>
    <option value="">All</option>
    <option value="Yunusobod">Yunusobod</option>
    <option value="Chilanzar">Chilanzar</option>
    <option value="Mirzo Ulugbek">Mirzo Ulugbek</option>
  </select>
  <h4>Specialty</h4>
  <select name="specialty" value={filters.specialty} onChange={handleFilterChange}>
    <option value="">All</option>
    <option value="Couples Counseling">Couples Counseling</option>
    <option value="Anxiety Disorder">Anxiety Disorder</option>
    <option value="Depression">Depression</option>
    <option value="Eating Disorders">Eating Disorders</option>
    <option value="Bipolar Disorders">Bipolar Disorders</option>
  </select>
  
  {/* Search Button */}
  <button onClick={handleSearchClick} className="search-button">
    Search
  </button>
</div>

      {/* Therapists List */}
      <div className="therapists-list">
        {therapists.map((therapist) => (
          <div
            key={therapist.id}
            className="therapist-card"
            onClick={() => handleTherapistClick(therapist)}
          >
            <img src={therapist.image} alt={therapist.name} />
            <h4>{therapist.name}</h4>
            <p>{therapist.specialty}</p>
            <p>${therapist.price}/hour</p>
          </div>
        ))}
      </div>

      {/* Therapist Details */}
      {selectedTherapist && (
        <div className="therapist-details">
          <img src={selectedTherapist.image} alt={selectedTherapist.name} />
          <h3>{selectedTherapist.name} | {selectedTherapist.specialty}</h3>
          <div className="tab-buttons">
            {["About", "Schedules", "Experience", "Review"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={activeTab === tab ? "active-tab" : ""}
              >
                {tab}
              </button>
            ))}
          </div>
            {activeTab === "About" && <p className="detailSec">{selectedTherapist.about}</p>}
            {activeTab === "Schedules" && <p className="detailSec">Schedules will go here...</p>}
            {activeTab === "Experience" && <p className="detailSec">{selectedTherapist.experience}</p>}
            {activeTab === "Review" && <p className="detailSec">Reviews will go here...</p>}
            <button onClick={handleBookAppointment} className="bookAppt">Book an appointment</button>
        </div>
      )}
    </div>
  );
};

export default TherapistBookingSystem;
