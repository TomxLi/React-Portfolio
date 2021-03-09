import React from 'react'
import { MDBContainer } from 'mdbreact';


const Skills = () => {
  return(
      <MDBContainer fluid id="skills" className="text-center flex-center flex-column text-white mx-auto pb-sm-1 pt-sm-1">
        <h3 className="text-center skill-header">Some of my Skills</h3>
          <div className='skills-wrapper flex-row flex-center flex-wrap w-responsive'>
          <img class="skill-type" src={require('../img/html5.png')} alt="html5" title="HTML5"></img>
          <img class="skill-type" src={require('../img/css3.png')} alt="css3" title="css3"></img>
          <img class="skill-type" src={require('../img/js.png')} alt="js" title="js"></img>
          <img class="skill-type" src={require('../img/react.png')} alt="react" title="react"></img>
          <img class="skill-type" src={require('../img/git.png')} alt="git" title="git"></img>
          <img class="skill-type" src={require('../img/ajax.png')} alt="ajax" title="ajax"></img>
          </div>
      </MDBContainer>
     )
  }

export default Skills;