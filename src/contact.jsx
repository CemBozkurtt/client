import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '', // Added contact number field
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    alert('Form submitted!'); // Alert message
    setFormData({ firstName: '', lastName: '', email: '', contactNumber: '', message: '' });
  };

  return (
    <div>
      <h2>Contact Me</h2>
      <div className="contact-info">
        <p>Email: cbozkurt@my.centennialcollege.ca</p>
        <p>Phone: (514) 571-9783</p>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} value={formData.firstName} required />
        <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} value={formData.lastName} required />
        <input type="text" name="contactNumber" placeholder="Contact Number" onChange={handleChange} value={formData.contactNumber} required /> 
        <input type="email" name="email" placeholder="Email" onChange={handleChange} value={formData.email} required />
        <div className="contact-message-box">
            <textarea name="message" placeholder="Your Message" onChange={handleChange} value={formData.message} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
