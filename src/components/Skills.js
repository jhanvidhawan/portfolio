import React, { useState, useEffect } from 'react';
import './Skills.css';

const Skills = () => {
  const [skillSets, setSkillSets] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newSkill, setNewSkill] = useState({
    domain: '',
    skills: [{ title: '', percentage: '' }, { title: '', percentage: '' }, { title: '', percentage: '' }, { title: '', percentage: '' }, { title: '', percentage: '' }],
  });

  useEffect(() => {
    fetch('http://localhost:5000/skillSets')
      .then(response => response.json())
      .then(data => setSkillSets(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleInputChange = (e, index, field) => {
    const { name, value } = e.target;
    const updatedSkills = [...newSkill.skills];
    updatedSkills[index] = { ...updatedSkills[index], [field]: value };
    setNewSkill({ ...newSkill, skills: updatedSkills });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/skillSets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newSkill),
    })
    .then(response => response.json())
    .then(data => {
      setSkillSets([...skillSets, data]);
      setNewSkill({
        domain: '',
        skills: [{ title: '', percentage: '' }, { title: '', percentage: '' }, { title: '', percentage: '' }, { title: '', percentage: '' }, { title: '', percentage: '' }],
      });
      handleCloseDialog();
    })
    .catch(error => console.error('Error adding skill:', error));
  };

  return (
    <section id="skills">
      <h2 className="skills-heading">Skills</h2>
      <p className='skill-para'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor<br />
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
      </p>
      <div className="skills-grid">
        {skillSets.map((skillSet, index) => (
          <div key={index} className="skill-card">
            <h3 className="skill-card-title">{skillSet.domain}</h3>
            <div className="skill-meters">
              {skillSet.skills.map(skill => (
                <div key={skill.title} className="skill-meter-container">
                  <div className="skill-meter-heading">
                    <span className="skill-name">{skill.title}</span>
                    <span className="skill-percentage">{skill.percentage}%</span>
                  </div>
                  <div
                    className="skill-meter-bar"
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button className="add-skill-button" onClick={handleOpenDialog}>Add Skills</button>

      {isDialogOpen && (
        <div className="dialog-overlay">
          <div className="dialog-content">
            <h3>Add Skill</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="domain">Domain</label>
                <input
                  type="text"
                  id="domain"
                  name="domain"
                  value={newSkill.domain}
                  onChange={(e) => setNewSkill({ ...newSkill, domain: e.target.value })}
                  required
                />
              </div>
              <div className="skills-container form-group label">
                <label htmlFor="domain">Skills</label>
                <label className='prof-text' htmlFor="prof">Proficiency (%)</label>
                {newSkill.skills.map((skill, index) => (
                  <div key={index} className="skill-row">
                    <input
                      type="text"
                      name="title"
                      value={skill.title}
                      placeholder={`Skill ${index + 1}`}
                      onChange={(e) => handleInputChange(e, index, 'title')}
                    />
                    <input
                      type="number"
                      name="percentage"
                      value={skill.percentage}
                      onChange={(e) => handleInputChange(e, index, 'percentage')}
                      min="0"
                      max="100"
                    />
                  </div>
                ))}
              </div>
              <div className='button-container'>
                <button type="submit">Add Skill</button>
                <button type="button" onClick={handleCloseDialog}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;
