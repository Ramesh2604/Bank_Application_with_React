import { useContext } from "react"
import UserContext from "./context"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from "react-bootstrap";
import "./alldata.css"

export default function Alldata(){
    const  user=useContext(UserContext);

    return (<>
        <Card>
            <Card.Header className="alldatahead">Members Of BadBank</Card.Header>
            <ListGroup variant="flush">
                {user.users.map((item, key) => (
                    <ListGroup.Item key={key}>
                        <h4>{item.name}</h4>
                        <p>Your Balance Amount is: {item.balance}</p>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Card>
        <Button><a href="#/create" style={{textDecoration:"none",color:"white"}}>Create New Account</a></Button>
        </>)
}





