import React from 'react';
import PropTypes from 'prop-types';

import Container from '../../layout/Container';
import { Margin, Padding } from '../../layout/Spaces';

import { SubTitle } from '../../atoms/Typography';

import ProjectItem from '../../molecules/ProjectItem';

const ProjectList = ({ projects }) => (
  <Padding vertical="wide">
    <Container>
      <Margin bottom="xl">
        <SubTitle>Selection de projets :</SubTitle>
      </Margin>
    </Container>

    {projects.map((project, i) => (
      <ProjectItem
        key={`${project.node.frontmatter.period}${project.node.frontmatter.client}`}
        num={`0${i + 1}`}
        {...project.node.frontmatter}
        {...project.node.fields}
      />
    ))}
  </Padding>
);

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        frontmatter: PropTypes.shape({
          mission: PropTypes.string.isRequired,
          myRole: PropTypes.string.isRequired,
          client: PropTypes.string.isRequired,
          period: PropTypes.string.isRequired,
          brandColor: PropTypes.string.isRequired,
        }).isRequired,
        fields: PropTypes.shape({
          slug: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }),
  ).isRequired,
};

export default ProjectList;
