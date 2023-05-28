import React from "react";
import PropTypes from "prop-types";
import { Title, SectionTitle } from './Section.styled';

const Section = ({ title, children }) => (
  <SectionTitle>
    <Title>{title}</Title>
    {children}
  </SectionTitle>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;