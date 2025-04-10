
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../css/TestPage.css';
import testData from '../testQuestions.json';

import { Link } from 'react-router-dom';

const TestPage = () => {
    const { testType } = useParams();
    const test = testData[testType];
  
    // Always call hooks unconditionally
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [result, setResult] = useState(null);
  
    // If no valid test is found, render an error message.
    if (!test) {
      return <div>Invalid test selection.</div>;
    }
  
    const currentQuestion = test.questions[currentQuestionIndex];
  
    const handleOptionChange = (e) => {
      setAnswers({
        ...answers,
        [currentQuestion.id]: Number(e.target.value)
      });
    };
  
    // Advanced analysis function based on testType and total score
    const analyzeResults = (testType, totalScore) => {
      let analysisText = '';
      // Example thresholds & analysis logic. Adjust the ranges as needed.
      if (testType === 'depression') {
        if (totalScore < 10) {
          analysisText =
            "Your score suggests minimal or no depression symptoms. Keep maintaining a healthy lifestyle and continue monitoring your mood.";
        } else if (totalScore >= 10 && totalScore <= 20) {
          analysisText =
            "Your score indicates moderate depression symptoms. It may be helpful to discuss your feelings with someone you trust and consider professional guidance.";
        } else {
          analysisText =
            "Your score suggests severe depression symptoms. We strongly recommend booking an appointment with a mental health professional as soon as possible.";
        }
      } else if (testType === 'anxiety') {
        if (totalScore < 10) {
          analysisText =
            "Your anxiety levels appear to be within a normal range. Continue practicing stress management techniques.";
        } else if (totalScore >= 10 && totalScore <= 20) {
          analysisText =
            "Your score indicates moderate anxiety symptoms. Consider seeking professional advice and exploring relaxation strategies.";
        } else {
          analysisText =
            "Your score suggests high levels of anxiety. We strongly recommend scheduling an appointment with a therapist to discuss your symptoms.";
        }
      } else if (testType === 'adhd') {
        if (totalScore < 10) {
          analysisText =
            "Your score suggests minimal ADHD symptoms. However, if you have concerns, consider monitoring your behavior and discussing it with a professional.";
        } else if (totalScore >= 10 && totalScore <= 20) {
          analysisText =
            "Your score indicates moderate ADHD symptoms. You might benefit from further evaluation and possibly professional guidance.";
        } else {
          analysisText =
            "Your score suggests significant ADHD symptoms. We recommend booking an appointment with a healthcare professional for a comprehensive evaluation.";
        }
      } else {
        analysisText = "Your results have been recorded.";
      }
      return analysisText;
    };
  
    const handleNext = () => {
      if (answers[currentQuestion.id] === undefined) {
        alert("Please select an answer before continuing.");
        return;
      }
      if (currentQuestionIndex < test.questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        // Calculate total score and analyze results
        const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
        const analysisText = analyzeResults(testType, totalScore);
        setResult({
          totalScore,
          analysisText
        });
      }
    };
  
    const handleRestart = () => {
      setAnswers({});
      setCurrentQuestionIndex(0);
      setResult(null);
    };
  
    return (
      <div className="test-page">
        <h1>{test.title}</h1>
        {result ? (
          <div className="result-section">
            <p><strong>Your total score:</strong> {result.totalScore}</p>
            <p>{result.analysisText}</p>
            {/* Show a suggestion to book an appointment if severe symptoms are detected */}
            {result.totalScore > (testType === 'depression' ? 20 : testType === 'anxiety' ? 20 : testType === 'adhd' ? 20 : 0) && (
              <p>
                <strong>Tip:</strong> It might be a good idea to{' '}
                <Link to="/userDashboard/therapistBookingSystem">book an appointment with a therapist</Link> for further evaluation.
              </p>
            )}
            <button onClick={handleRestart}>Restart Test</button>
          </div>
        ) : (
          <div className="question-section">
            <p>
              Question {currentQuestionIndex + 1} of {test.questions.length}
            </p>
            <h2>{currentQuestion.text}</h2>
            <form>
              {currentQuestion.options.map((option, idx) => (
                <div key={idx} className="option">
                  <input
                    type="radio"
                    id={`q${currentQuestion.id}_option${idx}`}
                    name={`question_${currentQuestion.id}`}
                    value={option.value}
                    checked={answers[currentQuestion.id] === option.value}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor={`q${currentQuestion.id}_option${idx}`}>
                    {option.label}
                  </label>
                </div>
              ))}
            </form>
            <button onClick={handleNext}>
              {currentQuestionIndex === test.questions.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        )}
      </div>
    );
  };
  
  export default TestPage;