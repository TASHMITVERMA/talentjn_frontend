import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Slider from "./Slider";
import ExploreJobs from "./ExploreJobs";
const Login = (props) => {
  const handleScroll = () => {
    const scrollAmount = window.scrollY;
    const scaleFactor = 1 + scrollAmount * 0.001; // Adjust the factor for the zoom effect

    const heroSection = document.querySelector(".Hero");
    const aboutSection = document.querySelector(".AboutSection");

    if (heroSection) {
      heroSection.style.transform = `scale(${1 / scaleFactor})`; // Zoom out the Hero section
    }

    if (aboutSection) {
      aboutSection.style.transform = `scale(${scaleFactor})`; // Zoom in the About section
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>
      <Nav>
        <Link to="/">
          <img
            src="/images/logo.png"
            alt="Talent Junction"
            style={{ width: "55px", height: "auto" }}
          />
        </Link>

        <div>
          <Link to="/Company">
            <Join>Company</Join>
          </Link>
          <Link to="/SignIn">
            <SignIn>Sign in</SignIn>
          </Link>
          <Link to="/SignUp">
            <Join>Join now</Join>
          </Link>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Hire quality, preassessed Finance talent</h1>
          <img src="/images/login-hero.svg" alt="" />
          <Link to="/ExploreJobs">
            <ExploreJob>Explore Jobs</ExploreJob>
          </Link>
        </Hero>
      </Section>

      <AboutSection>
        <AboutContent>
          <h2>About Talent Junction</h2>
          <h3>Our hiring methodology:</h3>
          <ul>
            <li>
              <Slider
                content={[
                  "TJ pre-assesses candidates:Candidates are pre-assessed and can apply only if they qualify.",
                  "Handpicks only the top applicants: Your time is best utilized evaluating only the top 3-5 candidates.",
                  "Supports your entire evaluation process: We are with you through your selection process - evaluations, offer letter, and onboarding. But we don't stop there...",
                ]}
              />
            </li>
            <li>
              <Slider
                content={[
                  "Designed specifically for Finance hiring: We know finance. As senior finance professionals who have hired hundreds of candidates, we bring domain expertise to help you find that perfect candidate.",
                  "Shorter hiring cycle = minimal productivity loss: Your pre-work is zero. We pre-assess and manually filter for the top 3-5 candidates, so you can spend your time evaluating only the selected candidates.",
                  "Simple, hassle-free, and guaranteed satisfaction: Seamless workflow, personal touch, and complete peace of mind. We not only help you onboard the candidates but also continuously engage with the new hires to ensure they settle in.",
                ]}
              />
            </li>
          </ul>
        </AboutContent>
      </AboutSection>

      <ContactCard>
        {" "}
        <h2>Contact Us</h2>
        <ul>
          <li>
            <BlogLink href="mailto:vj@talentjn.com">Email</BlogLink>
          </li>

          <li>
            <BlogLink
              href="https://www.linkedin.com/company/talent-junction/?viewAsMember=true"
              target="_blank"
            >
              LinkedIn
            </BlogLink>
          </li>

          <li>
            <BlogLink href="https://wa.me/8130036099">Whatsapp</BlogLink>
          </li>
        </ul>
      </ContactCard>
      <Footer>&copy;Talent Junction. All rights reserved.</Footer>
    </Container>
  );
};
const ContactCard = styled.div`
  width: 200px;
  height: 200px;
  background: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 43%; /* Add left margin here */
  margin-bottom: 20px;
  
 

  /* Hover effect */
  &:hover {
    transform: scale(1.05);
  }

  h2 {
    color: #333;
    font-size: 24px;
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 10px;
    }
  }
}

`;

const AboutContent = styled.div`
  padding: 20px; /* Add your desired padding value */
  text-align: Center;
  text-decoration: none;
`;
const BlogSection = styled.section`
  padding: 40px;
  text-align: center;
  h2 {
    color: #333;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

const BlogLink = styled.a`
  color: #007bff;
  text-decoration: none;
`;

const AboutSection = styled.section`
  text-align: center;
  h2 {
    color: #333;
    font-size: 24px;
    margin-bottom: 20px;
  }

  p {
    color: #555;
    font-size: 16px;
    margin-bottom: 15px;
    line-height: 1.5;
    text-align: left;
  }
  transition: height 0.3s ease; /* Add a smooth transition effect */
  text-decoration: none;
`;

const Container = styled.div`
  padding: 0px;
  background: linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%);
`;

const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;

  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

const Join = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  text-decoration: none;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration: none;
  }
`;

const ExploreJob = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  text-decoration: none;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 20px;
  font-weight: 600;
  line-height: 120px;
  padding: 10px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration: none;
    transform: scale(1.05); /* Add a scaling effect on hover */
  }
  margin: 10px; /* Add margin for spacing */
`;

const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  text-decoration: none;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration: none;
  }
`;

const Company = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  text-decoration: none;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration: none;
  }
`;
const Footer = styled.footer`
  text-align: center;
  padding: 10px;
  background-color: #333;
  color: #fff;
`;

const Section = styled.section`
  display: flex;
  align-content: start;
  min-height: 700px;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;

  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;

const Hero = styled.div`
  width: 100%;
  margin-top: 20px; /* Adjust the margin-top value to move the Hero section up or down */
  h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 56px;
    color: #2977c9;
    font-weight: 200;
    line-height: 70px;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
    }
  }
  img {
    width: 700px;
    height: 670px;
    position: absolute;
    bottom: -2px;
    right: -150px;
    top: 20px;
    @media (max-width: 768px) {
      top: -10px;
      right: 0;
      width: 100%;
      height: auto;
    }
  }
`;

const Form = styled.div`
  margin-top: 100px;
  width: 408px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Google = styled.button`
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  height: 56px;
  width: 100%;
  border-radius: 28px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
    inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);

  vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
}
@media (max-width: 768px) {
  /* Adjust styles for smaller screens */
  font-size: 16px;
}
`;

export default Login;
