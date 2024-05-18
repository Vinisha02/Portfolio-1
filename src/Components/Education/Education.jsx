import React from 'react'
import "./Education.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import school_image from "../../assets/school_image.jpeg";
import college_logo from "../../assets/college_logo.jpeg";

const Education = () => {
  return (
    <div id='education' className="Education">
  <div className="education-title">
    <h1>Education</h1>
    <img src={theme_pattern} alt="" />
  </div>
  <div className="education-details">
    <div className="college-details">
      <img src={college_logo} alt="" className="education-logo" />
      <div className="education-info">
        <h1 className="school-name">Banasthali Vidyapith</h1>
        <h3 className="degree">Bachelor's of Technology in Computer Science & Engineering</h3>
        <li className="duration">July 2022 - May 2026</li>
        <li className="cgpa">Scored 9.40 CGPA till now</li>
        <li>Technical-Team member of a college-club Algobyte, strengthen the open-source community and raise technical awareness among students.</li>
      </div>
    </div>
    <div className="school-details">
      <img src={school_image} alt="" className="education-logo" />
      <div className="education-info">
        <h1 className="school-name">Tagore International School</h1>
        <h3 className="degree">Class 12th</h3>
        <li className="duration">April 2021 - May 2022</li>
        <li className="cgpa">Ranked 2 in the board examination with a 96%</li>
      </div>
    </div>
    <div className="school-details">
      <img src={school_image} alt="" className="education-logo" />
      <div className="education-info">
        <h1 className="school-name">Tagore International School</h1>
        <h3 className="degree">Class 10th</h3>
        <li className="duration">April 2019 - May 2020</li>
        <li className="cgpa">Ranked 3 in the board examination with a 95%</li>
      </div>
    </div>
  </div>
</div>

    
  )
}

export default Education
