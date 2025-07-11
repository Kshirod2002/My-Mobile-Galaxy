import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MyContext } from '../../App';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject:'',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

    const navigate = useNavigate();
    const { setisHeaderFooterShow } = useContext(MyContext);
    
      useEffect(() => {
        setisHeaderFooterShow(false);
      }, []); 

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Subject is required';
    
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Form submitted:', formData);
      setSubmitted(true);
   
      setFormData({ name: '', email: '',subject:'',  message: '' });
    }
  };

  return (
    <>
    
    <div className="contact-form" >
      
      <form className='form' onSubmit={handleSubmit}>
       
      {submitted && <p style={{ color: 'green' }}>Thank you for contacting us!</p>}
  
        <div style={{ marginBottom: '10px' }}>
         
          <label className='label'>Name</label><br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className='input'
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label className='label'>Email</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className='input'
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label className='label'>Subject</label><br />
          <input
            type="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className='input'
          />
          {errors.subject && <p style={{ color: 'red' }}>{errors.subject}</p>}
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label className='label'>Message</label><br />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className='input'
          ></textarea>
          {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
        </div>

        <button type="submit" className='send'>Send</button>
        <Link to="/"><button className='send'>Back</button></Link>
      
      </form>
    </div>
    </>
  );
};


export default Contact;
