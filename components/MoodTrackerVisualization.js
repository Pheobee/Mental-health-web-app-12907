import React from "react";
import "../css/MoodTracker.css";

const MoodTrackerVisualization = ({ moodLogs }) => {
  return (
    <div className="chart-section">
      <h3>Mood Tracker</h3>
      <p className="MoodHeadline">
        Logging your emotions daily helps to better manage your life.
      </p>
      <div className="chart">
        {moodLogs.slice(0, 7).map((log, index) => (
          <div
            key={index}
            className="bar"
            style={{
              height: `${log.moodCount * 15}px`, // Adjust the height multiplier for better visualization
              backgroundColor: log.moodCount > 5 ? "#FE828C" : "#666", // Example conditional styling
            }}
          >
            <span>{new Date(log.date).toLocaleDateString()}</span>
          </div>
        ))}
      </div>
      <p className="overviewMood">Your recent mood logs overview</p>
    </div>
  );
};

export default MoodTrackerVisualization;
