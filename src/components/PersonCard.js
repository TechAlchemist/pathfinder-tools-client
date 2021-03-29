import React from 'react';
import { Card, Button } from 'react-bootstrap';

function PersonCard({person}) {
    
    return (
        <div>
            <Card style={{ width: '40rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title> { person.name } </Card.Title>
                    <Card.Text>
                        <strong> {person.class} :</strong>  
                        <strong> {person.level} </strong>
                    </Card.Text>
                    <Card.Text>
                        {person.biography}
                    </Card.Text>
                    <Card.Text>    
                        <strong> Created: </strong> <em> {new Date(person.createdAt).toLocaleDateString()} </em>
                        <strong> Updated: </strong> <em> {new Date(person.updatedAt).toLocaleDateString()} </em> 
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>

                </Card.Body>
            </Card>
        </div>
    );
}

export default PersonCard;