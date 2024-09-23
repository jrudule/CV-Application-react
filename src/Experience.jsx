import { useState } from 'react'
import './App.css'

const InputField = ({ label, value, name, type = 'text', onChange, isActive }) => (
    <div className={isActive ? 'outputDiv' : 'inputDiv'}>
      <label>{label}: </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={isActive ? 'hidden' : null}
        required
      />
      <div className={isActive ? null : 'hidden'}>{value}</div>
    </div>
  );

function OneExperience({ experience, handleChange, isActive }) {
    return (
        <div  className="infoFields">
            <InputField 
                label="Company name" 
                value={experience.companyName} 
                name="companyName" 
                onChange={(e) => handleChange(e, experience.id)}
                isActive={isActive}
            />
            <InputField 
                label="Position Title" 
                value={experience.positionTitle} 
                name="positionTitle" 
                onChange={(e) => handleChange(e, experience.id)}
                isActive={isActive}
            />
            <InputField 
                label="Responsibilities" 
                value={experience.responsibilities} 
                name="responsibilities"
                onChange={(e) => handleChange(e, experience.id)}
                isActive={isActive}
            />
            <InputField 
                label="Start date" 
                value={experience.startDate} 
                name="startDate" 
                type="date"
                onChange={(e) => handleChange(e, experience.id)}
                isActive={isActive} 
            />
            <InputField 
                label="End date" 
                value={experience.endDate} 
                name="endDate" 
                type="date" 
                onChange={(e) => handleChange(e, experience.id)}
                isActive={isActive}
            />
        </div>
    )
}

function Experiences() {
    const [experiences, setExperiences] = useState([{ 
        id: 0,
        companyName: "", 
        positionTitle: "", 
        responsibilities: "", 
        startDate: "", 
        endDate: "" 
    }]);

    const toggleActive = (id) => {
        setExperiences(experiences.map((experience) =>
            experience.id === id ? { ...experience, isActive: !experience.isActive } : experience
        ));
    };

    const handleChange = (e, id) => {
        const { name, value } = e.target;
        setExperiences(experiences.map((experience) =>
            experience.id === id ? { ...experience, [name]: value } : experience
        ));
    };

    const addNewExperience = () => {
        const newId = experiences.length > 0 ? experiences[experiences.length - 1].id + 1 : 0;
        setExperiences([...experiences, { 
            id: newId, 
            companyName: "", 
            positionTitle: "", 
            responsibilities: "", 
            startDate: "", 
            endDate: "", 
            isActive: false 
        }]);
    };

    const removeExperience = (id) => {
        setExperiences(experiences.filter((experience) => experience.id !== id));
    };


    return (
        <div className='educationDiv'>
            <h2 className="title">Experience</h2>
            <div className='educations'>
                {experiences.map((experience) => (
                    <div className='education' key={experience.id}>
                        <OneExperience 
                          experience={experience} 
                          handleChange={handleChange} 
                          isActive={experience.isActive} 
                        />
                        <button onClick={() => toggleActive(experience.id)}>
                            {experience.isActive ? 'Edit' : 'Save'}
                        </button>
            
                        <button onClick={() => removeExperience(experience.id)}>Remove</button>
                    </div>
                ))}
            </div>
            
            <button onClick={addNewExperience}> Add New Experience </button>
        </div>
    );
}

export default Experiences