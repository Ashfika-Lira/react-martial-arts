import React from 'react';
import { Card } from 'react-bootstrap';
import "./Coaches.css";

const Coaches = () => {
	return (
		<div>
		<div>
			<h1 className="text-white bg-success text-center">Meet Our Expert Coaches</h1>
		</div>
		<div className="d-flex row row-cols-lg-2 row-cols-1 g-2 mb-3 ms-3 me-3">
           <Card className="rounded card">
  <Card.Img className="img-fluid card-img" variant="top"  src="http://wp.kodesolution.live/retail/health/martialz/rtl/wp-content/uploads/sites/12/2018/04/trainer4.jpg" />
  <Card.Body>
    <Card.Title>Tina Wong</Card.Title>
    <Card.Text>
      <h3>Role: President</h3>
    </Card.Text>
    </Card.Body>
</Card>
           <Card className="rounded card">
  <Card.Img variant="top" className="img-fluid card-img"src="http://wp.kodesolution.live/retail/health/martialz/rtl/wp-content/uploads/sites/12/2018/04/trainer3.jpg" />
  <Card.Body>
    <Card.Title>Sarah lee</Card.Title>
    <Card.Text>
      <h3>Role: President</h3>
    </Card.Text>
    </Card.Body>
</Card>
           <Card className="rounded card">
  <Card.Img variant="top" className="img-fluid card-img"src="http://wp.kodesolution.live/retail/health/martialz/rtl/wp-content/uploads/sites/12/2018/04/trainer2.jpg" />
  <Card.Body>
    <Card.Title>Maggie Jones</Card.Title>
    <Card.Text>
      <h3>Role: President</h3>
    </Card.Text>
    </Card.Body>
</Card>
           <Card className="rounded card">
  <Card.Img variant="top" className="img-fluid card-img"src="https://tiger-claw.themerex.net/wp-content/uploads/2017/05/team-6-370x335.jpg" />
  <Card.Body>
    <Card.Title>James Lui</Card.Title>
    <Card.Text>
      <h3>Role: Senior Trainer</h3>
    </Card.Text>
    </Card.Body>
</Card>
           <Card className="rounded card">
  <Card.Img variant="top" className="img-fluid card-img"src="https://tiger-claw.themerex.net/wp-content/uploads/2017/05/team-5-370x335.jpg" />
  <Card.Body>
    <Card.Title>Angela yue</Card.Title>
    <Card.Text>
      <h3>Role: Senior Trainer</h3>
    </Card.Text>
    </Card.Body>
</Card>
           <Card className="rounded card">
  <Card.Img variant="top" className="img-fluid card-img"src="https://tiger-claw.themerex.net/wp-content/uploads/2017/05/team-3-370x335.jpg" />
  <Card.Body>
    <Card.Title>Steve Mason</Card.Title>
    <Card.Text>
      <h3>Role: Assistant</h3>
    </Card.Text>
    </Card.Body>
</Card>
           <Card className="rounded card">
  <Card.Img variant="top" className="img-fluid card-img"src="https://tiger-claw.themerex.net/wp-content/uploads/2017/05/team-2-370x335.jpg" />
  <Card.Body>
    <Card.Title>Debbie brown</Card.Title>
    <Card.Text>
      <h3>Role: Assistant</h3>
    </Card.Text>
    </Card.Body>
</Card>
           <Card className="rounded card">
  <Card.Img variant="top" className="img-fluid card-img"src="https://tiger-claw.themerex.net/wp-content/uploads/2017/05/team-1-370x335.jpg" />
  <Card.Body>
    <Card.Title>William Jones</Card.Title>
    <Card.Text>
      <h3>Role: Assistant</h3>
    </Card.Text>
    </Card.Body>
</Card>
		</div>
	</div>
		
	);
};

export default Coaches;