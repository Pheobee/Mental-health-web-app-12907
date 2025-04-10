
import MoodTrackerVisualization from "./MoodTrackerVisualization";

import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/MoodTracker.css";

const moods = [
  "Anxious", "Happy", "Irritated", "Depressed", "Energetic", "Sad",
  "Disappointed", "Confused", "Self-critical", "Overwhelmed", "Calm",
  "Stressed", "Mood swings", "Feeling guilty", "Excited", "Content",
  "Lonely", "Motivated", "Hopeful", "Angry", "Optimistic", "Fearful",
  "Nostalgic", "Grateful", "Bored", "Relieved", "Surprised", "Tired",
  "Embarrassed", "Peaceful", "Jealous", "Proud", "Loved", "Confident",
];

const MoodTracker = () => {
  const [selectedMoods, setSelectedMoods] = useState([]);
  const [moodLogs, setMoodLogs] = useState([]);
  const userId = 1;

  const positiveMoods = [
    "Happy", "Energetic", "Calm", "Excited", "Content", "Motivated",
    "Hopeful", "Optimistic", "Grateful", "Relieved", "Surprised",
    "Proud", "Loved", "Confident", "Peaceful",
  ];

  const negativeMoods = [
    "Anxious", "Irritated", "Depressed", "Sad", "Disappointed", "Confused",
    "Self-critical", "Overwhelmed", "Stressed", "Mood swings", "Feeling guilty",
    "Angry", "Fearful", "Nostalgic", "Bored", "Tired", "Embarrassed", "Jealous",
  ];

  const fetchMoodLogs = async () => {
    try {
      const response = await axios.get(`/api/MoodLogs/${userId}`);
      setMoodLogs(response.data);
    } catch (error) {
      console.error("Error fetching mood logs:", error);
    }
  };

  useEffect(() => {
    fetchMoodLogs();
  }, [userId]);

  const handleMoodSelect = (mood) => {
    if (selectedMoods.includes(mood)) {
      setSelectedMoods(selectedMoods.filter((selectedMood) => selectedMood !== mood));
    } else {
      setSelectedMoods([...selectedMoods, mood]);
    }
  };
  const getBarColor = (moods) => {
    if (!moods) return "#999"; // Default color for undefined or empty moods
  
    const moodList = moods.split(", ");
    const hasPositive = moodList.some((mood) => positiveMoods.includes(mood));
    const hasNegative = moodList.some((mood) => negativeMoods.includes(mood));
  
    if (hasPositive && hasNegative) return "linear-gradient(to top, #FFB6C1, #333)";
    if (hasPositive) return "#FE828C"; // Pink shade
    if (hasNegative) return "#333333"; // Black shade
  
    return "#999"; // Default for uncategorized moods
  };
  
  const getBarHeight = (mood) => {
    const moodIntensity = {
      Happy: 150,
      Sad: 120,
      Calm: 130,
      Anxious: 100,
      Excited: 160,
    };
  
    return moodIntensity[mood] || 80; // Default height if mood is not in the mapping
  };

  
  const handleSubmitMoodLog = async () => {
    if (selectedMoods.length === 0) {
      console.log("Submit button clicked!")
      alert("Please select at least one mood before submitting.");
      return;
    }

    try {
      const moodLog = {
        userId,
        moods: selectedMoods.join(", "),
        date: new Date().toISOString(),
      };

      await axios.post("/api/MoodLogs", moodLog);
      alert("Mood log submitted successfully!");
      setSelectedMoods([]);
      fetchMoodLogs();
    } catch (error) {
      console.error("Error submitting mood log:", error);
    }
  };


  return (
    <div className="mood-tracker">
      {/* Weekly Mood Chart */}
      <div className="chart-section">
        <h3>Mood Tracker</h3>
        <p className="MoodHeadline">Logging your emotions daily helps to better manage your life.</p>
        <div className="chart">
        {moodLogs.slice(0, 7).map((log, index) => (
          <div
            key={index}
            className="bar"
            style={{
              height: `${getBarHeight(log.mood)}px`,
              background: getBarColor(log.mood), 
      }}
    >
      <span>{new Date(log.date).toLocaleDateString()}</span>
    </div>
  ))}
        </div>


        <p className="overviewMood">Your recent mood logs overview</p>
      </div>

      {/* Mood Logging Section */}
      <div className="log-section">
        <h3>How are you feeling today?</h3>
        <div className="mood-buttons">
          {moods.map((mood) => (
            <button
              key={mood}
              className={`mood-button ${selectedMoods.includes(mood) ? "selected" : ""}`}
              onClick={() => handleMoodSelect(mood)}
            >
              {mood}
            </button>
          ))}
        </div>
        <button className="submitMoodLog" onClick={handleSubmitMoodLog}>
          Submit Log
        </button>
      </div>
    </div>
  );
};

export default MoodTracker;
