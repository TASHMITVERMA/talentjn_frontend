// JobDescription.js
import React, { useState } from "react";
import styled from "styled-components";

const DescriptionContainer = styled.div`
  margin-top: 20px;
`;

const ShowMoreLink = styled.button`
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
`;

const JobDescription = ({ description }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleShowMore = () => {
    setShowFullDescription((prev) => !prev);
  };

  return (
    <DescriptionContainer>
      <h4>Job Description</h4>
      <p>
        {showFullDescription
          ? description
          : description?.slice(0, 200) || "Job description not available."}
      </p>
      {description?.length > 200 && (
        <ShowMoreLink onClick={handleShowMore}>
          {showFullDescription ? "Show less" : "Show more"}
        </ShowMoreLink>
      )}
    </DescriptionContainer>
  );
};

export default JobDescription;
