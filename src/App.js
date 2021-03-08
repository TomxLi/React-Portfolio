import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import Wrapper from './components/Wrapper';
import About from './components/About';
import Resume from './components/Resume';
export const ColorScheme = {
  primary: 'red',
  secondary: 'blue',
  third: 'purple',
  fourth: 'goldenrod'
}

const AppDiv = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  font-size: 1.15em;
`;




class App extends Component {
  render() {
    return (
      <Router>
      <AppDiv>
        <Header />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/resume" component={Resume} />
        </Wrapper>
        <Footer />
      </AppDiv>
    </Router>
    );
  }
}
export default App;