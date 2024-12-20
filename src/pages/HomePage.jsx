// src/pages/HomePage.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ImageSlider from "../components/Slider";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Hero = styled.section`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ecf0f1;
  text-align: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 10px;
`;

const SubText = styled.p`
  font-size: 1.5rem;
  color: #34495e;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background: #3498db;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #2980b9;
  }
`;


const Section = styled.section`
  padding: 60px 20px;
  background: ${(props) => props.bgColor || "#fff"};
  text-align: center;
`;

const SubTitle = styled.h2`
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 1.1rem;
  color: #7f8c8d;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 20px;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 40px;
`;

const ServiceCard = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.9);
  text-align: center;
`;

const HighlightLink = styled(Link)`
  color:rgb(227, 231, 235);
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  color: #2c3e50;
`;

const EventList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;
`;

const EventCard = styled.div`
  background: #f4f6f6;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 2.5);
`;

const EventTitle = styled.h4`
  font-size: 1.5rem;
  color: #2c3e50;
`;

const Contact = styled.div`
  background: #ecf0f1;
  padding: 60px 20px;
  text-align: center;
`;

const ContactInfo = styled.p`
  font-size: 1.2rem;
  color: #34495e;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 20px;

  input,
  textarea {
    width: 100%;
    max-width: 500px;
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #bdc3c7;
    border-radius: 5px;
  }

  button {
    padding: 10px 20px;
    font-size: 1rem;
    color: #fff;
    background: #3498db;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background: #2980b9;
    }
  }
`;

function HomePage() {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    // Fetch announcements from API or database
    setAnnouncements([
      { id: 1, title: "General Assembly", message: "Join us this Sunday at 9 AM." },
      { id: 2, title: "Christmas Carol", message: "Celebrate with us on Dec 24th at 6 PM." },
    ]);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Home | DLCF Abuja</title>
        <meta
          name="description"
          content="Welcome to the home page of DLCF Abuja. Learn more about our mission and activities."
        />
        <meta name="keywords" content="DLCF, Abuja, church, mentorship, events, prayer" />
      </Helmet>

      <ImageSlider />

      {/* Hero Section */}
      <Hero>
        <Title>Welcome to DLCF Abuja</Title>
        <SubText>Empowering lives through mentorship, worship, and service.</SubText>
        <Button onClick={() => window.scrollTo({ top: 800, behavior: "smooth" })}>
          Learn More
        </Button>
      </Hero>

      {/* Announcements Section */}
      <Section bgColor="#f4f4f4">
        <SubTitle>Announcements</SubTitle>
        <Text>Stay updated with the latest news and events.</Text>
        {announcements.map((announcement) => (
          <Text key={announcement.id}>
            <strong>{announcement.title}:</strong> {announcement.message}
          </Text>
        ))}
      </Section>

      {/* About Us Section */}
      <Section>
        <SubTitle>About Us</SubTitle>
        <Text>
          Are you a student seeking a supportive and inspiring community? At DLCF Abuja, we are dedicated to helping
          students like you grow spiritually, academically, and socially. Through mentorship, worship, and engaging
          activities, we provide a platform where young minds can thrive and connect. Discover how we can support your
          journey and make a lasting impact on your life.
        </Text>
        <Button as={HighlightLink} to="/about">
          Read Our Full Story
        </Button>
      </Section>

      {/* Services Section */}
      <Section bgColor="#f7f7f7">
        <SubTitle>Our Services</SubTitle>
        <ServicesGrid>
          <ServiceCard>
            <ServiceTitle>Sunday Service</ServiceTitle>
            <Text>Join us every Sunday for a powerful time of worship and teaching.</Text>
          </ServiceCard>
          <ServiceCard>
            <ServiceTitle>Prayer Meetings</ServiceTitle>
            <Text>Regular prayer sessions to seek God's guidance for our lives and community.</Text>
          </ServiceCard>
          <ServiceCard>
            <ServiceTitle>Youth Mentorship</ServiceTitle>
            <Text>Guiding the next generation towards a life of purpose and faith.</Text>
          </ServiceCard>
          <ServiceCard>
            <ServiceTitle>Youth Mentorship</ServiceTitle>
            <Text>Guiding the next generation towards a life of purpose and faith.</Text>
          </ServiceCard>
        </ServicesGrid>
      </Section>

      {/* Upcoming Events Section */}
      <Section>
        <SubTitle>Upcoming Events</SubTitle>
        <EventList>
          <EventCard>
            <EventTitle>Christmas Carol Service</EventTitle>
            <Text>Join us for a joyful celebration of Christmas on December 24th, at 6 PM.</Text>
          </EventCard>
          <EventCard>
            <EventTitle>New Year Watch Night Service</EventTitle>
            <Text>Start the year with us in prayer and worship on December 31st, at 9 PM.</Text>
          </EventCard>
        </EventList>
      </Section>

      {/* Contact Section */}
      <Contact>
        <SubTitle>Contact Us</SubTitle>
        <ContactInfo>Email: <a href="mailto:info@dlcf-abuja.org">info@dlcf-abuja.org</a></ContactInfo>
        <ContactInfo>Phone: +234 123 456 7890</ContactInfo>
        <ContactInfo>Address: 123 Church Road, Abuja, Nigeria</ContactInfo>
        <Form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message" rows="5" />
          <button type="submit">Send Message</button>
        </Form>
      </Contact>
    </div>

  );
}

export default HomePage;
