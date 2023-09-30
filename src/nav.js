import './nav.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Navigat() {

  return(  
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home" style={{fontSize:25,fontWeight:900}}>BadBank</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#/">Home</Nav.Link>
          <Nav.Link href="#/create">Create</Nav.Link>
          <Nav.Link href="#/deposit">Deposit</Nav.Link>
          <Nav.Link href="#/withdraw">WithDraw</Nav.Link>
          <Nav.Link href="#/alldata">AllData</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>)

  
}