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

function General() {
  const [person, setPerson] = useState({ 
    name: "", 
    lastName: "", 
    email: "", 
    phone: "" 
  });

  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerson({ ...person, [name]: value });
  };
  
  return (
    <div className='generalDiv'>
      <h2 className="title">General info</h2>
      <div className='general'>
        <div className="infoFields">
          <InputField 
            label="Name" 
            value={person.name} 
            name="name" 
            onChange={handleChange} 
            isActive={isActive}
          />
          <InputField 
            label="Last name" 
            value={person.lastName} 
            name="lastName" 
            onChange={handleChange} 
            isActive={isActive}
          />
          <InputField 
            label="Email" 
            value={person.email} 
            name="email" 
            type="email" 
            onChange={handleChange}
            isActive={isActive}
          />
          <InputField 
            label="Phone number" 
            value={person.phone} 
            name="phone" 
            type="number" 
            onChange={handleChange}
            isActive={isActive}
          />
        </div>

        <button onClick={toggleClass}> {isActive ? 'Edit' : 'Save'} </button>
      </div>
    </div>
  )
}

export default General