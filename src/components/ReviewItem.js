import { Card } from 'react-bootstrap';

function parse(str) {
  var y = str.substr(0,4),
      m = str.substr(4,2) - 1,
      d = str.substr(6,2);
  return new Date(y,m,d);
}

function ReviewItem({ key, title, postdate, link, description, bloggername }) {
   console.log(parse(postdate).toISOString().substring(0, 10))
  return (
      <Card className="review_card" key={key}>
        <Card.Body>
          <a className='review_item' href={link}>
            <Card.Text>{bloggername} {parse(postdate).toISOString().substring(0, 10)}</Card.Text>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </a>
        </Card.Body>
      </Card>
    );
  }

export default ReviewItem;
