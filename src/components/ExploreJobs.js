import React, { useState } from "react";
import styled from "styled-components";
import JobPopup from "./JobPopup";
import { Link } from "react-router-dom";

const ExploreJobs = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const jobs = [
    {
      job: "Job 1",
      company: "Company 1",
      location: "Location 1",
      experience: "Entry",
      available: 10,
      skillset: "Skills for Job 1",
      requirements: "Requirements for Job 1",
    },
    {
      job: "Job 2",
      company: "Company 2",
      location: "Location 2",
      experience: "Mid",
      available: 5,
      skillset: "Skills for Job 2",
      requirements: "Requirements for Job 2",
    },
    {
      job: "Job 3",
      company: "Company 3",
      location: "Location 3",
      experience: "Senior",
      available: 3,
      skillset: "Skills for Job 3",
      requirements: "Requirements for Job 3",
    },
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  const filteredJobs = jobs.filter((job) => {
    return job.job.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <ExploreJobsContainer>
      <LeftVerticalSection>
        <Logo>
          <img src="/images/logo.png" alt="Logo" width="60" />
        </Logo>
        <VerticalMenu>
          <MenuItem active>Jobs</MenuItem>
          <MenuItem>Own Application</MenuItem>
          <MenuItem>Repository</MenuItem>
        </VerticalMenu>
        <BottomMenu>
          <MenuItem>Settings</MenuItem>
          <MenuItem>Help</MenuItem>
        </BottomMenu>
      </LeftVerticalSection>
      <JobTable>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Search Jobs"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <SearchButton>Search</SearchButton>
        </SearchContainer>
        <table>
          <thead>
            <tr>
              <th>Job</th>
              <th>Company</th>
              <th>Location</th>
              <th>Experience Level</th>
              <th>Available Jobs</th>
            </tr>
          </thead>
          <tbody>
            {filteredJobs.map((job, index) => (
              <tr key={index}>
                <td
                  onClick={() => handleJobClick(job)}
                  style={{ cursor: "pointer" }}
                >
                  {job.job}
                </td>
                <td>{job.company}</td>
                <td>{job.location}</td>
                <td>{job.experience}</td>
                <td>{job.available}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </JobTable>
      <Link to="/SignIn">
        <SignIn>Login</SignIn>
      </Link>
      {selectedJob && (
        <JobPopup job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </ExploreJobsContainer>
  );
};

const ExploreJobsContainer = styled.div`
  display: flex;
  height: 100vh;
  background: linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%);
`;

const LeftVerticalSection = styled.div`
  background: #333;
  width: 200px;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const Logo = styled.div`
  text-align: center;
  padding: 10px;
  background: linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%);
  margin-bottom: 20px; /* Separate the logo from the menu */
  border-radius: 50%; /* Make the blue highlight round */
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const VerticalMenu = styled.div`
  display: flex;
  flex-direction: column;
`;

const BottomMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const MenuItem = styled.button`
  color: #fff;
  background: none;
  border: none;
  padding: 10px;
  text-align: center;
  background-color: ${(props) => (props.active ? "#007bff" : "transparent")};
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px; /* Make the blue highlight round */
  margin-bottom: 10px; /* Add spacing between menu items */
  &:hover {
    background-color: #007bff;
  }
`;

const JobTable = styled.div`
  padding: 20px 40px 20px;
  flex: 1;
  overflow: auto;

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
  }
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
const PopupBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
`;

const PopupCloseButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const SearchInput = styled.input`
  flex: 1;
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

const SearchButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
export default ExploreJobs;
