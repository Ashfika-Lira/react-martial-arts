import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';

const Services = (props) => {
   const [show, setCard] = useState(false);

   const handleClose = () => setCard(false);
   const handleShow = () => setCard(true);


   const { name, img, price } = (props.services)
   return (
      <div className="col">
         <Card style={{ width: '300px' }} className="rounded">
            <Card.Img className="img-fluid " variant="top" src={img} />
            <Card.Body>
               <Card.Title>Service name: {name}</Card.Title>
               <Card.Text>
                  <h4>Course Fee: ${price}</h4>
               </Card.Text>
               <Button variant="danger" onClick={handleShow}>
                  Enroll Now
               </Button>

               <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                     <Modal.Title>{name}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body> You are eager to start <span className="text-primary fw-bold"> {name}</span> Course. For proceeding You Need To Pay First .!!</Modal.Body>
                  <Modal.Footer>
                     <Button variant="secondary" onClick={handleClose}>
                        Close
                     </Button>
                     <Button variant="primary" onClick={handleClose}>
                        Agree
                     </Button>
                  </Modal.Footer>
               </Modal>
            </Card.Body>
         </Card>
      </div>
   );
};

export default Services;