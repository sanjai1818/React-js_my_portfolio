import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: #1e1e1e;
  padding: 20px;
  border-radius: 12px;
  color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.02);
  }
`;

const Title = styled.h3`
  margin: 0;
  font-size: 20px;
  color: #854CE6;
`;

const Company = styled.h4`
  margin: 5px 0;
  font-size: 16px;
  color: #ccc;
`;

const Date = styled.p`
  font-size: 14px;
  color: #aaa;
`;

const Desc = styled.p`
  margin-top: 10px;
  font-size: 15px;
  color: #ddd;
`;

const SkillList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
  list-style: none;
  padding: 0;
`;

const Skill = styled.li`
  background: #854CE6;
  padding: 5px 10px;
  border-radius: 8px;
  font-size: 13px;
`;

const CertificateButton = styled.a`
  display: inline-block;
  margin-top: 15px;
  padding: 8px 16px;
  background:white;
  color: black;
  border-radius: 8px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: background 0.3s ease;

  &:hover {
    background: #6b3cc9;
  }
`;







const ExperienceCard = ({ experience }) => {
  return (
    <Card>
      <Title>{experience.role}</Title>
      <Company>{experience.company}</Company>
      <Date>{experience.date}</Date>
      <Desc>{experience.desc}</Desc>

      <SkillList>
        {experience.skills.map((skill, index) => (
          <Skill key={index}>{skill}</Skill>
        ))}
      </SkillList>

      {/* Show Certificate button only if experience.doc exists */}
      {experience.doc && (
        <CertificateButton
          href={experience.doc}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Certificate
        </CertificateButton>
      )}
    </Card>
  );
};

export default ExperienceCard;
