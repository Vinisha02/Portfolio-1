import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile2 from "../../assets/profile2.jpeg";
const About = () => {
  return (
    <div id='about' className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile2} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Greetings! I'm Vinisha, a pre-final year B.Tech Computer Science
              enthusiast with a deep-seated passion for technology. From
              architecting intricate web solutions to delving into the promising
              potential of Blockchain, my journey has been marked by an
              insatiable thirst for knowledge and exploration. Through immersive
              projects and academic pursuits, I've refined my abilities and
              embraced the collaborative ethos of innovation.
              Having been honored with five scholarships, I actively engage in
              open-source initiatives, contributing to the collective
              advancement of the tech community. Join me as we venture into this exhilarating odyssey
              together.{" "}
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>Programming</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Tailwind CSS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1> GHC Scholar</h1>
          <p>
          Grace Hopper Celebration is the world’s largest gathering of women technologists in 2022-2023
          </p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>Technical Team Member</h1>
          <p>selected as the technical member in Algobyte in my college</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>Keep India Smiling Scholar</h1>
          <p>
            selected among the top 32 candidates all over India provided by
            Colgate 2022-2026
          </p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>JK Lakshmi Scholar</h1>
          <p>
            was selected among the top 61 candidates all over India provided by
            JK Cement 2023
          </p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>Pragati Scholar</h1>
          <p>
            was selected among the top 4756 candidates all over India,
            implemented by the AICTE 2022-2026
          </p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default About;
