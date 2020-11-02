import logo from './logo.svg';
import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbarsection from './navbar';
import Buttons from './buttons';
import Slides from './slides';
import Videos from './videos';
import Forms from './form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container fluid>

  <Row><Col><Navbarsection/></Col></Row>
  <Row><Col><img src={logo} className="App-logo" alt="logo" /></Col></Row>
  <Row><Col><p>Edit <code>src/App.js</code> and save to reload.</p></Col></Row>
  <Row><Col>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
    Learn React
    </a>
    </Col></Row>
  <Row><Col><Buttons/></Col></Row>
  <Row><Col><Slides/></Col></Row>
  <Row><Col><Videos/></Col></Row>
  <Row><Col><Forms/></Col></Row>
  </Container>
  </header>
  </div>
  );
}

export default App;
