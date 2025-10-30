import React from "react";
import '../../sass/containers/_competences.scss';
import Skills from "../skills/skills";

const skills = [
  { name: "HTML / CSS", level: 90 },
  { name: "JavaScript / React", level: 85 },
  { name: "Git / GitHub", level: 80 },
  { name: "Responsive Design", level: 90 },
];

const Competences = () => {
  return (
    <section className="competences">
      <h1>Mes compétences</h1>
      <Skills/>
      <div className="competences__list">
        {skills.map((skill, index) => (
          <div key={index} className="competences__item">
            <span className="competences__name">{skill.name}</span>
            <div className="competences__bar">
              <div
                className="competences__progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Competences;
