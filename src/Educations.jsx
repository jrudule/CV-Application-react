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
      />
      <div className={isActive ? null : 'hidden'}>{value}</div>
    </div>
);

function OneEducation({ education, handleChange, isActive }) {
    return (
        <div className="infoFields">
            <InputField 
                label="School name" 
                value={education.schoolName} 
                name="schoolName" 
                onChange={(e) => handleChange(e, education.id)}
                isActive={isActive}
            />
            <InputField 
                label="Degree" 
                value={education.degree} 
                name="degree" 
                onChange={(e) => handleChange(e, education.id)}
                isActive={isActive}
            />
            <InputField 
                label="Field" 
                value={education.field} 
                name="field" 
                onChange={(e) => handleChange(e, education.id)}
                isActive={isActive}
            />
            <InputField 
                label="Start date" 
                value={education.startDate} 
                name="startDate" 
                type="date" 
                onChange={(e) => handleChange(e, education.id)}
                isActive={isActive}
            />
            <InputField 
                label="End date" 
                value={education.endDate} 
                name="endDate" 
                type="date" 
                onChange={(e) => handleChange(e, education.id)}
                isActive={isActive}
            />
        </div>
    )
}

function Educations() {
    const [educations, setEducations] = useState([
      { id: 0, 
        schoolName: '', 
        degree: '', 
        field: '', 
        startDate: '', 
        endDate: '', 
        isActive: false }
    ]);
  
    const addNewEducation = () => {
      const newId = educations.length > 0 ? educations[educations.length - 1].id + 1 : 0;
      setEducations([...educations, { 
        id: newId, 
        schoolName: '', 
        degree: '', 
        field: '', 
        startDate: '', 
        endDate: '', 
        isActive: false 
      }]);
    };
  
    const removeEducation = (id) => {
      setEducations(educations.filter((education) => education.id !== id));
    };
  
    const handleChange = (e, id) => {
      const { name, value } = e.target;
      setEducations(educations.map((education) =>
        education.id === id ? { ...education, [name]: value } : education
      ));
    };
  
    const toggleActive = (id) => {
      setEducations(educations.map((education) =>
        education.id === id ? { ...education, isActive: !education.isActive } : education
      ));
    };
  
    return (
      <div className='educationDiv'>
        <h2 className="title">Education</h2>
        <div className='educations'>
          {educations.map((education) => (
            <div className='education' key={education.id}>
              <OneEducation 
                education={education} 
                handleChange={handleChange} 
                isActive={education.isActive} 
              />
              <button onClick={() => toggleActive(education.id)}>
                {education.isActive ? 'Edit' : 'Save'}
              </button>
              <button onClick={() => removeEducation(education.id)}>Remove</button>
            </div>
          ))}
        </div>
        
        <button onClick={addNewEducation}> Add New Education </button>
      </div>
    );
}

export default Educations