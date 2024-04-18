// JobPopup.js
import React, { useEffect } from "react";
import styled from "styled-components";
import JobDescription from "./JobDescription";

const PopupBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 600px;
  text-align: center;
  max-height: 80vh; /* Set a maximum height */
  overflow-y: auto;
`;

const CenteredHeading = styled.h2`
  color: #007bff;
  margin-bottom: 20px;
`;

const SubHeading = styled.h3`
  color: #333;
  margin-bottom: 10px;
`;


const PopupCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

const ApplyButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 16px;
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    background-color: #0056b3;
  }
`;

const Table = styled.table`
  width: 100%;
  margin-top: 20px;

  th,
  td {
    padding: 10px;
    border-bottom: 1px solid #ddd;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }
`;

const JobPopup = ({ job, onClose }) => {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  const handleApplyNow = () => {
    // Implement the logic for applying to the job
    alert("Apply Now button clicked!");
  };

  return (
    <PopupBackground>
      <PopupContent>
        <PopupCloseButton onClick={onClose}>✖</PopupCloseButton>
        <h2>Job Details</h2>
        <h3>{job?.job}</h3>
        <p>Company: {job?.company}</p>
        <p>Location: {job?.location}</p>
        <p>Experience Level: {job?.experience}</p>
        <p>Available Jobs: {job?.available}</p>
        
        <JobDescription description={job?.jobDetails?.description} />

        <h4>Requirements</h4>
        <Table>
        <tbody>
            <tr>
              <td>Qualifications</td>
              <td>{job?.jobDetails?.qualifications || "Not available"}</td>
            </tr>
            <tr>
              <td>Yrs of Experience (Range)</td>
              <td>{job?.jobDetails?.experience || "Not available"}</td>
            </tr>
            <tr>
              <td>Job Format</td>
              <td>{job?.jobDetails?.jobFormat || "Not available"}</td>
            </tr>
            <tr>
              <td>Job Location</td>
              <td>{job?.jobDetails?.jobLocation || "Not available"}</td>
            </tr>
            <tr>
              <td>Desired Start Date</td>
              <td>{job?.jobDetails?.startDate || "Not available"}</td>
            </tr>
            <tr>
              <td>Salary Range</td>
              <td>{job?.jobDetails?.salaryRange || "Not available"}</td>
            </tr>
            <tr>
              <td>Notice Period (preference)</td>
              <td>{job?.jobDetails?.noticePeriod || "Not available"}</td>
            </tr>
          </tbody>
        </Table>
        <ApplyButton onClick={handleApplyNow}>Apply Now</ApplyButton>
      </PopupContent>
    </PopupBackground>
  );
};

export default JobPopup;
