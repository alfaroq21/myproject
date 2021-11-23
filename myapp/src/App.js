import logo from './logo.svg';
import './App.css';
import {Alert} from 'react-bootstrap'; 
import { Button,Nav ,Card,DropdownButton,Dropdown,Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
<Nav defaultActiveKey="/home" as="ul">
  <Nav.Item as="li">
    <Nav.Link href="/home">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link eventKey="link-1">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link eventKey="link-2">Link</Nav.Link>
  </Nav.Item>
</Nav>
<Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Modal title</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>Modal body text goes here.</p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Close</Button>
    <Button variant="primary">Save changes</Button>
  </Modal.Footer>
</Modal.Dialog>
      <header className="App-header">
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
      <Alert variant="success">
  <Alert.Heading>Hey, nice to see you</Alert.Heading>
  <p>Aww yeah, you successfully read this important alert message. This example
    text is going to run a bit longer so that you can see how spacing within an
    alert works with this kind of content.
  </p>
  <hr />
  <p className="mb-0">
    Whenever you need to, be sure to use margin utilities to keep things nice
    and tidy.
  </p>
</Alert>
      </header>
      <Button>test</Button>
      <DropdownButton id="dropdown-basic-button" title="Dropdown button">
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>
    </div>
  );
}

export default App;
