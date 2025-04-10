// SelfAssessmentTests.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/SelfAssessmentTests.css';

const SelfAssessmentTests = () => {
  return (
    <div className="self-assessment-container">
      <h1>Self-Assessment Tests</h1>
      <p>Select a test below to begin:</p>
      <div className="test-options">
        <Link className="test-card" to="/userDashboard/self-assessment/depression">
          <h2>Depression Test</h2>
          <p>Assess your mood and outlook</p>
        </Link>
        <Link className="test-card" to="/userDashboard/self-assessment/anxiety">
          <h2>Anxiety Test</h2>
          <p>Evaluate your anxiety symptoms</p>
        </Link>
        <Link className="test-card" to="/userDashboard/self-assessment/adhd">
          <h2>ADHD Test</h2>
          <p>Check for signs of ADHD</p>
        </Link>
      </div>
    </div>
  );
};

export default SelfAssessmentTests;
