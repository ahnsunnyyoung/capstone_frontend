import { Card } from 'react-bootstrap';

import '../css/ReviewItem.css'
import lightStyles from '../styles/lightStyles';
import darkStyles from '../styles/darkStyles';

function parse(str) {
  var y = str.substr(0,4),
      m = str.substr(4,2) - 1,
      d = str.substr(6,2);
  return new Date(y,m,d);
}

function ReviewItem({ mode, key, title, postdate, link, description, bloggername, jjinper }) {
  const classes = mode === 'dark' ? darkStyles() : lightStyles();
  return (
      <Card className={classes.reviewCard} key={key}>
        <Card.Body>
          <a className={classes.reciewItem} href={link}>
            <Card.Text style={{'margin-bottom':'2px'}}>
              {bloggername} {parse(postdate).toISOString().substring(0, 10)}
              <span className='jjin_percent'> 찐리뷰 확률 {jjinper*100}%</span>
            </Card.Text>
            <Card.Text style={{'margin-bottom':'3px'}}>
              <span className='title'>{title}</span>
            </Card.Text>
            <Card.Text>{description}</Card.Text>
          </a>
        </Card.Body>
      </Card>
    );
  }

export default ReviewItem;
