import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Save to localStorage
      const users = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
      users.push(formData);
      localStorage.setItem('registeredUsers', JSON.stringify(users));
      
      setIsSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Registration Form</h2>
      
      {isSubmitted ? (
        <div style={styles.successMessage}>
          Registration successful! Thank you for signing up.
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.firstName && <span style={styles.error}>{errors.firstName}</span>}
          </div>
          
          <div style={styles.formGroup}>
            <label style={styles.label}>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.lastName && <span style={styles.error}>{errors.lastName}</span>}
          </div>
          
          <div style={styles.formGroup}>
            <label style={styles.label}>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.email && <span style={styles.error}>{errors.email}</span>}
          </div>
          
          <div style={styles.formGroup}>
            <label style={styles.label}>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.password && <span style={styles.error}>{errors.password}</span>}
          </div>
          
          <div style={styles.formGroup}>
            <label style={styles.label}>Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.confirmPassword && <span style={styles.error}>{errors.confirmPassword}</span>}
          </div>
          
          <button type="submit" style={styles.submitButton}>Register</button>
        </form>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  title: {
    textAlign: 'center',
    color: '#000',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: '#000',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #000',
    borderRadius: '4px',
    fontSize: '16px',
    backgroundColor: '#fff',
    color: '#000',
  },
  error: {
    color: '#ff0000',
    fontSize: '14px',
    marginTop: '5px',
    display: 'block',
  },
  submitButton: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '12px',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '10px',
    transition: 'background-color 0.3s',
  },
  successMessage: {
    textAlign: 'center',
    color: '#000',
    fontSize: '18px',
    padding: '20px',
    backgroundColor: '#f0f0f0',
    borderRadius: '4px',
  },
};

export default RegistrationForm;