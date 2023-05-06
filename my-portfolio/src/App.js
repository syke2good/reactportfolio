import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  const routes = [
    { path: '/', component: Home },
    { path: '/projects', component: Projects },
    { path: '/contact', component: Contact },
    {path: '/header', component: Header},
  ];

  return (
    <Router>
      <Header />
      {routes.map(({ path, component }) => (
        <Route key={path} exact path={path} component={component} />
      ))}
    </Router>
  );
}

export default App;


