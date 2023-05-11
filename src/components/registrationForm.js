import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './style.css';
import { database } from '../firebase';
import { ref, push, update, child } from 'firebase/database';

function RegistrationForm() {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [startingDate, setStartingDate] = useState(null);
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [languages, setLanguages] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    updateEmail();
    updateUsername();
  };

  const handleMiddleNameChange = (e) => {
    setMiddleName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    updateEmail();
    updateUsername();
  };

  const updateEmail = () => {
    const formattedEmail = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@vegatrans.com`;
    setEmail(formattedEmail);
  };

  const updateUsername = () => {
    const formattedUsername = `${firstName.toLowerCase()}.${lastName.toLowerCase()}`;
    setUsername(formattedUsername);
  };

  const handleRegister = () => {
    const obj = {
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      email: email,
      username: username,
      startingDate: startingDate,
      dateOfBirth: dateOfBirth,
      languages: languages,
    };

    const databaseRef = ref(database);
    const newPostRef = push(child(databaseRef, 'posts'));
    const newPostKey = newPostRef.key;
    const updates = {};
    updates['/' + newPostKey] = obj;

    update(databaseRef, updates)
      .then(() => {
        console.log('Data submitted successfully');
      })
      .catch((error) => {
        console.log('Failed to submit data:', error);
      });
  };

  const handleDateOfBirthChange = (date) => {
    setDateOfBirth(date);
  };

  const handleLanguagesChange = (e) => {
    setLanguages(e.target.value);
  };

  return (
    <form>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                className="form-control"
                placeholder="First Name"
                value={firstName}
                onChange={handleFirstNameChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="middleName">Middle Name</label>
              <input
                type="text"
                id="middleName"
                className="form-control"
                placeholder="Middle Name"
                value={middleName}
                onChange={handleMiddleNameChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                className="form-control"
                placeholder="Last Name"
                value={lastName}
                onChange={handleLastNameChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="form-control"
				placeholder="Email"
				value={email}
				readOnly
				/>
				</div>
				<div className="form-group">
				<label htmlFor="location">Location</label>
				<input
							 type="text"
							 id="location"
							 className="form-control"
							 placeholder="Location"
						   />
				</div>
				<div className="form-group">
				<label htmlFor="position">Position</label>
				<input
							 type="text"
							 id="position"
							 className="form-control"
							 placeholder="Position"
						   />
				</div>
				        <div className="form-group">
				  <label htmlFor="startingDate">Starting Date</label>
				  <DatePicker
					id="startingDate"
					selected={startingDate}
					className="form-control"
					placeholderText="Starting Date"
					onChange={(date) => setStartingDate(date)}
				  />
				</div>
				<div className="form-group">
				  <label htmlFor="languages">Languages</label>
				  <select
					id="languages"
					className="form-control"
					value={languages}
					onChange={handleLanguagesChange}
				  >
					<option value="">Select an option</option>
					<option value="DE">DE</option>
					<option value="EN">EN</option>
					<option value="CZ">CZ</option>
					<option value="IT">IT</option>
					<option value="CRO">HR</option>
					<option value="SRB">RS</option>
				  </select>
				</div>
				<div className="form-group">
				  <label htmlFor="distributionLists">Distribution Lists</label>
				  <input
					type="text"
					id="distributionLists"
					className="form-control"
					placeholder="Distribution Lists"
				  />
				</div>
				<div className="form-group">
				  <label htmlFor="dateOfBirth">Date of Birth</label>
				  <DatePicker
					id="dateOfBirth"
					selected={dateOfBirth}
					className="form-control"
					placeholderText="Date of Birth"
					onChange={handleDateOfBirthChange}
				  />
				</div>
			  </div>
			  <div className="col-md-6">
				<div className="form-group">
				  <label htmlFor="username">Username:</label>
				  <input
					type="text"
					id="username"
					className="form-control"
					placeholder="Username"
					value={username}
					readOnly
				  />
				</div>
			  </div>
			</div>
			<div className="row">
			  <div className="col-md-6">
				<button type="submit" className="btn btn-primary" onClick={handleRegister}>
				  Register
				</button>
			  </div>
			</div>
		  </div>
		</form>
);
}

export default RegistrationForm;
