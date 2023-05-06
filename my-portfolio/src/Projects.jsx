import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  padding: 2rem;
  background-color: #fff;
`;

const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const ProjectTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
`;

const ProjectDescription = styled.p`
  margin-top: 1rem;
  font-size: 1.2rem;
  color: #666;
`;

function Projects() {
  return (
    <ProjectsContainer>
      <ProjectCard>
        <ProjectTitle>Project 1</ProjectTitle>
        <ProjectDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          ultrices, leo eu cursus porttitor, nisi enim elementum lacus, eu
          facilisis sapien purus vitae justo.
        </ProjectDescription>
      </ProjectCard>
      <ProjectCard>
        <ProjectTitle>Project 2</ProjectTitle>
        <ProjectDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          ultrices, leo eu cursus porttitor, nisi enim elementum lacus, eu
          facilisis sapien purus vitae justo.
        </ProjectDescription>
      </ProjectCard>
      <ProjectCard>
        <ProjectTitle>Project 3</ProjectTitle>
        <ProjectDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          ultrices, leo eu cursus porttitor, nisi enim elementum lacus, eu
          facilisis sapien purus vitae justo.
        </ProjectDescription>
      </ProjectCard>
    </ProjectsContainer>
  );
}

export default Projects;
