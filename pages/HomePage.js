import React from 'react';
import '../css/HomePage.css';
import pic1 from '../img/Mental health-bro.png';
import featurePic1 from '../img/Feeling Blue-amico.svg';
import featurePic2 from '../img/Questions-pana.svg';
import featurePic3 from '../img/Book lover-bro.svg';
import featurePic4 from '../img/Robot face-pana.svg';
import user1 from '../img/user1.jpg';
import user2 from '../img/user2.jpg';
import user3 from '../img/user3.jpg';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="homepage">
      <section className="hero">
        <h1>Your Journey to <span>Better Mental Health</span> Starts Here</h1>
        <img src={pic1} alt="pic" />
      </section>

      <h1 className="featuresHeader">How We Help You Thrive</h1>
      <section className="features">
        <div className="feature">
          <img src={featurePic1} alt="pic" />
          <h2>Mood Tracker</h2>
          <p>Log your daily emotions, track patterns over time, and gain valuable insights through charts and AI-driven tips.</p>
        </div>
        <div className="feature">
          <img src={featurePic2} alt="pic" />
          <h2>Therapist Directory</h2>
          <p>Find licensed therapists that suit your needs. Filter by location, specialization, and book appointments seamlessly.</p>
        </div>
        <div className="feature">
          <img src={featurePic3} alt="pic" />
          <h2>Self-Help Resources</h2>
          <p>Access a variety of articles and resources to support your mental health journey.</p>
        </div>
        <div className="feature">
          <img src={featurePic4} alt="pic" />
          <h2>AI-Powered Chat Support</h2>
          <p>Talk to our chatbot for quick answers, crisis tips, or guidance tailored to your needs.</p>
        </div>
      </section>

      <h1 className="pricingHeader">Pricing</h1>
      <section className="pricing">
        <div className="pricing-item">
          <h2>Freemium Model</h2>
          <p><strong>Details:</strong> Basic features such as mood tracker, limited chatbot responses, and some resources.</p>
          <p><strong>Pricing:</strong> Free</p>
        </div>
        <div className="pricing-item">
          <h2>Premium Model</h2>
          <p><strong>Details:</strong> Advanced analysis, personalized recommendations, full access to self-help resources.</p>
          <p><strong>Pricing:</strong>  $100/year</p>
          <p><strong>Pricing:</strong> $10/month</p>
        </div>
        <div className="pricing-item">
          <h2>Family Plan</h2>
          <p><strong>Details:</strong> Multi-user subscription for families or groups.</p>
          <p><strong>Pricing:</strong> $150/year</p>
        </div>
      </section>

      <h1 className="whyheader">Why Our App is Right for You</h1>
      <section className="why">
        <ul>
          <li>Easy-to-Use Platform</li>
          <li>Secure and Confidential</li>
          <li>Connect Anytime</li>
          <li>Personalized Insights</li>
        </ul>
      </section>


      <h1 className="testimonialsHeader">Hear from Our Users</h1>
      <section className="testimonials">
        <div className="user">
          <Link to="./"><img src={user1} alt="pic" /></Link>
          <div className="overlay"></div>
        </div>
        <div className="user">
          <Link to="./"><img src={user2} alt="pic" /></Link>
          <div className="overlay"></div>
        </div>
        <div className="user user3">
          <p>This app has helped me track my moods and understand my mental health better. The therapist booking feature is a lifesaver! <span>(John, 21 y.o.)</span></p>
        </div>
        <div className="user">
          <Link to="./"><img src={user3} alt="pic" /></Link>
          <div className="overlay"></div>
        </div>
      </section>

      <section className="security-section">
        <h1 className="section-header">Your Security Matters</h1>
        <p>
          We take your privacy seriously. All your personal details and mental health data are encrypted and stored securely. Our platform adheres to the highest industry standards, ensuring confidentiality and integrity of your information.
        </p>
      </section>
    </div>
  );
};

export default HomePage;
