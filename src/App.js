import './App.css';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import ListGroup from 'react-bootstrap/ListGroup';

const Navigation = (
  <Navbar expand="lg" variant="light" bg="light">
  <Container fluid>          
    <Navbar.Brand href="#">
      <span className="bi bi-card-checklist" />
      <span className="ps-2">ToDo List</span>
    </Navbar.Brand>
  </Container>
  </Navbar>
)

function TaskListItem(props) {
  return <ListGroup.Item key={props.id}>
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">{props.title}</h5>
      <small>{props.created_at}</small>
    </div>
    <p className="mb-1 d-flex w-100 justify-content-between">{props.description}</p>
    <small className="d-flex w-100 justify-content-between">That will be awesome!</small>
  </ListGroup.Item>
}

function TaskList(props) { 

  const tasks = createTasks()
  let items = tasks.map(task =>  <TaskListItem {...task} />)

  return <ListGroup>
    {items}
  </ListGroup>
}

function createTasks() {
  const task1 = {
    id: 1,
    title: "Create TODO list app in different flanguages",
    created: "3 days ago",
    description: "Create TODO list app in React, PHP + Nette, Python + Flash, Java Spring, ...",
  }

  const task2 = {
    id: 2,
    title: "Task 2",
    created: "4 days ago",
    description: "Do something usefull ...",
  }

  const task3 = {
    id: 3,
    title: "Task 3",
    created: "5 days ago",
    description: "Do something usefull ...",
  }

  const tasks = [task1, task2, task3]

  return tasks
}


function App() {
  return (
    <div className="App">
      {Navigation}
      <Container>
        <h1>My tasks</h1>
        <TaskList />
      </Container>
    </div>
  );
}

export default App;
