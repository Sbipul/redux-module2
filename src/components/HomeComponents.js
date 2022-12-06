import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomeComponents = (props) => {
const  {id,thumbnailUrl,title,url} = props?.cardData
  return (
    <Col>
      <Card>
            <Card.Img className="w-50 mx-auto" variant="top" src={thumbnailUrl} />
            <Card.Body>
              <span>{id}</span>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Link to={url}>Link</Link>
            </Card.Body>
          </Card>
    </Col>
  );
};

export default HomeComponents;
