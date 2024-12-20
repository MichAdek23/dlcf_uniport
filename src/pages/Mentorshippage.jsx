import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const PageContainer = styled.div`
  padding: 2rem;
  background-color: #f9f9f9;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.h2`
  color: #333;
  text-align: center;
  margin-bottom: 1rem;
`;

const MentorCard = styled.div`
  background: linear-gradient(to bottom right,  #2c3e50, #ebedee);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin: 1rem;
  text-align: center;
  width: 30%;
  display: inline-block;
  vertical-align: top;
  @media (max-width: 768px) {
    width: 45%;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const MentorImage = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-bottom: 1rem;
`;

const MentorName = styled.h3`
  color: #007b5e;
`;

const MentorBio = styled.p`
  font-size: 0.9rem;
  color: #555;
`;

const FormContainer = styled.div`
  background: linear-gradient(to bottom right,  #2c3e50, #ebedee);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
`;

const InputField = styled.input`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const TextAreaField = styled.textarea`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  background-color: #007b5e;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #005f40;
  }
`;

const ContactContainer = styled.div`
  margin-top: 2rem;
  text-align: center;
`;

const ErrorMessage = styled.div`
  background-color: #f8d7da;
  color: #721c24;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
`;

const SuccessMessage = styled.div`
  background-color: #d4edda;
  color: #155724;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #c3e6cb;
  border-radius: 4px;
`;

const MentorshipPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.message) {
      setFormError('Please fill out all fields.');
      return false;
    }
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormError('Please enter a valid email address.');
      return false;
    }
    setFormError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setFormSuccess('Mentorship request submitted successfully!');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <PageContainer>
      <SectionHeader>Join Our Mentorship Program</SectionHeader>
      <p>Our mentorship program aims to guide individuals through their spiritual journey with support from experienced mentors.</p>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {/* Mentor Cards */}
        <MentorCard>
          <MentorImage src="https://via.placeholder.com/100" alt="Mentor" />
          <MentorName>John Doe</MentorName>
          <MentorBio>John has been serving the community for over 15 years. He is passionate about helping others grow in faith.</MentorBio>
        </MentorCard>
        <MentorCard>
          <MentorImage src="https://via.placeholder.com/100" alt="Mentor" />
          <MentorName>Jane Smith</MentorName>
          <MentorBio>Jane specializes in youth mentorship and is dedicated to helping the younger generation navigate their faith journey.</MentorBio>
        </MentorCard>
        {/* More mentor cards can be added */}
      </div>

      <FormContainer>
        <SectionHeader>Sign Up for Mentorship</SectionHeader>
        {formError && <ErrorMessage>{formError}</ErrorMessage>}
        {formSuccess && <SuccessMessage>{formSuccess}</SuccessMessage>}
        <form onSubmit={handleSubmit}>
          <InputField
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          <InputField
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextAreaField
            name="message"
            placeholder="Tell us why you're interested in mentorship"
            value={formData.message}
            onChange={handleChange}
          />
          <SubmitButton type="submit">Submit</SubmitButton>
        </form>
      </FormContainer>

      <ContactContainer>
        <p>Have questions? Contact us at: <a href="mailto:mentor@church.com">mentor@church.com</a></p>
      </ContactContainer>
    </PageContainer>
  );
};

export default MentorshipPage;
