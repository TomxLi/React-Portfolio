import React from "react";
import styled from 'styled-components';
export const CenteredHeader = styled.h4`
  text-align: center;
  margin-bottom: 1.25em;
`
function About() {
    return (
        <div>
        <CenteredHeader>Hi! I'm Xuefan. I'm currently taking UW bootcamp class.</CenteredHeader>
        <p>
          I've worked throughout the stack, but I especially love building React UI.
        </p>
        </div>
      );
    }
    
    export default About;