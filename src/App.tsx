import { useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button'
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

type TaskListItemProps = {
  id: number;
  title: string;
  created_at: string;
  description: string;
}

const TaskListItem = (props: TaskListItemProps) =>
  <ListGroup.Item key={props.id}>
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">{props.title}</h5>
      <small>{props.created_at}</small>
    </div>
    <p className="mb-1 d-flex w-100 justify-content-between">{props.description}</p>
    <small className="d-flex w-100 justify-content-between">That will be awesome!</small>
  </ListGroup.Item>

type TaskListProps = {
  tasks: Array<TaskListItemProps>;
}

const TaskList = ((props: TaskListProps) => {

  let items = props.tasks.map(task =>  <TaskListItem key={task.id} { ...task} />)

  return <ListGroup>
    {items}
  </ListGroup>
})

function createSampleTasks(id: number): TaskListItemProps {
  return {
    id,
    title: "Task",
    created_at: "4 days ago",
    description: "Do something usefull ...",
  }
}

function App() {

  const [items, setTasks] = useState<Array<TaskListItemProps>>([]);

  function addTask(): void {
    let tasks = items.slice()
    let max_id = Math.max.apply(Math, tasks.map(function(task) { return task.id; }))
    if (max_id < 0) {
      max_id = 0
    }
    tasks.push(createSampleTasks(max_id + 1))
    console.log(tasks)
    setTasks(tasks)
  }

  return (
    <div className="App">
      {Navigation}
      <Container>
        <h1>My tasks</h1>
        <TaskList tasks={items} />
        <Button className="mt-2" onClick={addTask}>Add task</Button>
      </Container>
    </div>
  );
}

export default App;
