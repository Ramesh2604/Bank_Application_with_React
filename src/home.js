import img from './images/bank.jpg'
import './home.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Home() {
  return (
    <Card className="home" >
        <Card.Title className='title'>BadBank</Card.Title>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        
        <Card.Text className='text' >
          Welcome to Our Bank
        </Card.Text>
        <Button variant="primary" className='button'><a href='#/create' style={{textDecoration:"none",color:"white"}}>Create your Account</a></Button>
      </Card.Body>
    </Card>
  );
}




