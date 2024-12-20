// src/pages/AboutPage.js
import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { FaUsers, FaBullseye, FaHandsHelping } from "react-icons/fa";

const AboutContainer = styled.section`
  padding: 2.5rem;
  color: #2c3e50;
  max-width: 1200px;
  margin: 0 auto;
  line-height: 1.8;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const Heading = styled.h1`
  font-size: 2.8rem;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #34495e;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const SubHeading = styled.h2`
  font-size: 2rem;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  color: #16a085;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  margin-right: 1rem;
  color: #f39c12;
  display: flex;
  align-items: center;

  svg {
    margin-right: 0.5rem;
  }
`;

const ContentBlock = styled.div`
  margin-bottom: 2.5rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  color: #2c3e50;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Highlight = styled.span`
  color: #16a085;
  font-weight: bold;
`;

const Button = styled.a`
  display: inline-block;
  margin-top: 2rem;
  padding: 0.8rem 1.5rem;
  font-size: 1.1rem;
  background: #16a085;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  text-align: center;
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: #1abc9c;
    transform: scale(1.05); /* Slight scale-up on hover */
  }
`;

function AboutPage() {
  return (
    <AboutContainer>
      <Helmet>
        <title>About Us | DLCF Abuja</title>
        <meta
          name="description"
          content="Discover DLCF Abuja, a community empowering students to grow spiritually, excel academically, and serve others."
        />
        <meta
          name="keywords"
          content="DLCF, Abuja, students, mentorship, mission, faith, community"
        />
        <meta property="og:title" content="About Us | DLCF Abuja" />
        <meta
          property="og:description"
          content="Discover DLCF Abuja, a community empowering students to grow spiritually, excel academically, and serve others."
        />
        <meta property="og:image" content="path_to_image.jpg" />
        <meta property="og:url" content="https://dlcf-abuja.org/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | DLCF Abuja" />
        <meta
          name="twitter:description"
          content="Discover DLCF Abuja, a community empowering students to grow spiritually, excel academically, and serve others."
        />
        <meta name="twitter:image" content="path_to_image.jpg" />
      </Helmet>

      <Heading>Welcome to DLCF Abuja</Heading>
      <Paragraph>
        At <Highlight>Deeper Life Campus Fellowship (DLCF)</Highlight>, we are more than just a community—we are a family united by faith, purpose, and a desire to make a difference. Whether you're seeking spiritual growth, mentorship, or a supportive network to navigate your academic journey, DLCF Abuja is here to help you thrive.
      </Paragraph>

      <SubHeading>Our Mission</SubHeading>
      <ContentBlock>
        <IconWrapper>
          <FaBullseye />
        </IconWrapper>
        <Paragraph>
          Our mission is to <Highlight>empower students</Highlight> to live purpose-driven lives by sharing the gospel, fostering meaningful relationships, and encouraging personal and academic excellence. We are dedicated to guiding you toward fulfilling your God-given potential.
        </Paragraph>
      </ContentBlock>

      <SubHeading>Our Vibrant Community</SubHeading>
      <ContentBlock>
        <IconWrapper>
          <FaUsers />
        </IconWrapper>
        <Paragraph>
          DLCF Abuja is a diverse and welcoming community where students from different academic disciplines and cultural backgrounds come together. Here, you'll find a safe space to grow in your faith, make lifelong friendships, and collaborate on meaningful initiatives.
        </Paragraph>
      </ContentBlock>

      <SubHeading>Get Involved</SubHeading>
      <ContentBlock>
        <IconWrapper>
          <FaHandsHelping />
        </IconWrapper>
        <Paragraph>
          Looking to make a difference or grow in your faith journey? Get involved through our mentorship programs, volunteer opportunities, and prayer groups. Whether you're a <Highlight>new student</Highlight> seeking guidance or a seasoned member eager to give back, there's a place for you at DLCF Abuja.
        </Paragraph>
      </ContentBlock>

      <Button href="/contact">Join the Family</Button>
    </AboutContainer>
  );
}

export default AboutPage;
