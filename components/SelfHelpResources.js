import React from "react";
import { Link } from "react-router-dom";
import "../css/SelfHelpResources.css";
import '../css/Header.css';
import logo from '../img/logo.jpg'

import resource1pic from "../img/Anxiety-amico.svg";
import resource2pic from "../img/Alone-amico.svg";
import resource3pic from "../img/Depression-rafiki.svg";

const resources = [
  {
    id: "coping-with-stress",
    title: "Coping with stress in college",
    author: "J. Rowling",
    date: "March, 2024",
    image: resource1pic,
  },
  {
    id: "stress-management",
    title: "Stress Management Techniques",
    author: "A. Smith",
    date: "May, 2023",
    image: resource2pic,
  },
  {
    id: "work-stress",
    title: "Work stress management",
    author: "E. Nolan",
    date: "Jan, 2024",
    image: resource3pic,
  },
];

const SelfHelpResources = () => {
  return (
   
    <div className="self-help-resources">
    
      <h3>Self-help Resources</h3>
      <div className="resource-cards">
        {resources.map((resource) => (
          <Link to={`/resources/${resource.id}`} key={resource.id} className="resource-link">
            <div className="resource-card">
              <img
                src={resource.image}
                alt={resource.title}
                className="resource-image"
              />
              <h5>{resource.title}</h5>
              <div className="resource-author">
                <p>{resource.author}</p>
                <p>{resource.date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SelfHelpResources;
