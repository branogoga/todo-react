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

type Task = {
  id: number;
  title: string;
  description: string;
}

type TaskListItemProps = {
  task: Task;
  onClose: () => any;
}

const TaskListItem = (props: TaskListItemProps) =>
  <ListGroup.Item key={props.task.id}>
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">{props.task.id} - {props.task.title}</h5>
      <Button variant="danger" size="sm" onClick={props.onClose}>X</Button>
    </div>
    <p className="mb-1 d-flex w-100 justify-content-between">{props.task.description}</p>
    <small className="d-flex w-100 justify-content-between">That will be awesome!</small>
  </ListGroup.Item>

type TaskListProps = {
  tasks: Array<Task>;
  removeTask: (id: number, items: Array<Task>) => any;
}

const TaskList = ((props: TaskListProps) => {

  let items = props.tasks.map((task: Task) =>  <TaskListItem key={task.id} task={task} onClose={() => { return props.removeTask(task.id, props.tasks); }} />)

  return <ListGroup>
    {items}
  </ListGroup>
})

function createSampleTasks(id: number): Task {
  return {
    id,
    title: "Task",
    description: "Do something usefull ...",
  }
}

function App() {

  const [items, setItems] = useState<Array<Task>>([]);

  function addTask(): void {
    let tasks = items.slice()
    let max_id = Math.max.apply(Math, tasks.map(function(task) { return task.id; }))
    if (max_id < 0) {
      max_id = 0
    }
    const new_id = max_id + 1

    tasks.push(createSampleTasks(new_id))
    setItems(tasks)
  }

  function removeTask(id: number, items: Array<Task>): any {
    console.log("removeLastTask()", id);
    let tasks = items.filter(task => task.id !== id)
    setItems(tasks)
  }

  return (
    <div className="App">
      {Navigation}
      <Container>
        <h1>My tasks</h1>
        <TaskList tasks={items} removeTask={removeTask} />
        <Button variant="success" className="mt-2" onClick={addTask}>Add task</Button>
      </Container>
    </div>
  );
}

export default App;
