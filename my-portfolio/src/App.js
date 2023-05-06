import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './header';
import Home from './home';
import Projects from './Projects';
import Contact from './contact';

const MainContainer = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

function App() {
  return (
    <Router>
      <Header />
      <MainContainer>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </MainContainer>
    </Router>
  );
}

export default App;
