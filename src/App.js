import './App.css';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import ListGroup from 'react-bootstrap/ListGroup';

function App() {
  return (
    <div className="App">
      <Navbar expand="lg" variant="light" bg="light">
        <Container fluid>          
          <Navbar.Brand href="#">
            <span className="bi bi-card-checklist" />
            <span className="ps-2">ToDo List</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <h1>My tasks</h1>
        <ListGroup>
          <ListGroup.Item className="">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">Create TODO list app in different flanguages</h5>
              <small>3 days ago</small>
            </div>
            <p className="mb-1 d-flex w-100 justify-content-between">Create TODO list app in React, PHP + Nette, Python + Flash, Java Spring, ...</p>
            <small className="d-flex w-100 justify-content-between">That will be awesome!</small>
          </ListGroup.Item>
        </ListGroup>
      </Container>
    </div>
  );
}

export default App;
