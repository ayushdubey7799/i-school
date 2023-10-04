import React from "react";
import styled from "styled-components";
import attachIcon from '../../../assets/icons/attach.png'

const jds = [
  {
    id: 1,
    jobDescription:
      "As a Software Developer, you will be responsible for designing, coding, testing, and maintaining software applications. You'll collaborate with a team of developers to create high-quality software solutions.",
  },
  {
    id: 2,
    jobDescription:
      "As a Data Analyst, you will analyze and interpret data to help organizations make informed decisions. You'll work with data sets, generate reports, and provide valuable insights to drive business success.",
  },
  {
    id: 3,
    jobDescription:
      "As a UX Designer, you'll focus on enhancing user satisfaction by improving the usability, accessibility, and overall experience of digital products. You'll create wireframes, prototypes, and user interfaces that meet user needs and business goals.",
  },
  {
    id: 4,
    jobDescription:
      "As a Product Manager, you will lead the development and management of products or services from concept to launch. You'll define product strategy, prioritize features, and collaborate with cross-functional teams to deliver successful products.",
  },
  {
    id: 5,
    jobDescription:
      "As a DevOps Engineer, you'll bridge the gap between development and operations. You'll automate and streamline deployment processes, manage infrastructure, and ensure the reliability and scalability of software applications.",
  },
  {
    id: 6,
    jobDescription:
      "As a Frontend Developer, you'll focus on creating visually appealing and user-friendly web interfaces. You'll work with HTML, CSS, and JavaScript to build responsive and interactive web applications.",
  },
  {
    id: 7,
    jobDescription:
      "As a Backend Developer, you'll handle the server-side logic and databases of web applications. You'll write server code, APIs, and database queries to ensure the backend functions efficiently.",
  },
  {
    id: 8,
    jobDescription:
      "As a Database Administrator, you'll be responsible for managing and maintaining databases. You'll optimize database performance, troubleshoot issues, and ensure data security and integrity.",
  },
  {
    id: 9,
    jobDescription:
      "As a Network Engineer, you'll design, implement, and manage computer networks. You'll ensure network connectivity, troubleshoot network issues, and implement security measures to protect data.",
  },
  {
    id: 10,
    jobDescription:
      "As a Quality Assurance Tester, you'll test software applications to identify defects and ensure they meet quality standards. You'll create test cases, perform testing, and report issues to developers.",
  },
  {
    id: 11,
    jobDescription:
      "As a Digital Marketing Specialist, you'll develop and execute digital marketing campaigns to drive online visibility and engagement. You'll use SEO, social media, and other tactics to reach target audiences.",
  },
  {
    id: 12,
    jobDescription:
      "As an AI/Machine Learning Engineer, you'll design and implement machine learning algorithms and models. You'll work on data analysis, training models, and deploying AI solutions for various applications.",
  },
];



const ActiveJds = () => {

  return (
    <Main>
      <Container>
        <p>JD-ID: 1 Test-ID: 1a</p>
        <p>As an AI/Machine Learning Engineer, you'll design and implement machine learning algorithms and models. You'll work on data analysis, training models, and deploying AI solutions for various applications,
        </p>
      </Container>
      {
        jds.map((item) => {
          return <Container>
            <p>JD-ID: {item.id}<span><img src={attachIcon} className="attachIcon" /></span></p>
            <p>{item.jobDescription}</p>
          </Container>;
        })

      }
    </Main>
  );
};

export default ActiveJds;


const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 0 1rem;
  flex-direction: column;
  box-shadow: 0 0 0.4rem rgba(0, 0, 0, 0.5);
  font-size: 0.8rem;
  border-radius: 1rem;
  justify-content: space-evenly;

  .attachIcon{
    width: 1.2rem;
    margin-left: 1.5rem;
    cursor: pointer;
  }

  p {
    display: flex;
    align-items: center;
  }
`;

const Main = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
  gap: 2rem;
  padding-bottom: 3rem;
`;
