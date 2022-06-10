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

function ReviewItem({ mode, key, title, postdate, link, description, bloggername, probability, ad }) {
  const classes = mode === 'dark' ? darkStyles() : lightStyles();
  return (
      <Card className={classes.reviewCard} key={key}>
        <Card.Body>
          <a className={classes.reciewItem} href={link}>
            <Card.Text className='less_margin'>
              <span className='subtitle'>
                {bloggername}
              </span>
              <span className='jjin_percent'> 찐리뷰 확률 {((1-probability)*100).toFixed(2)}%</span>
              
            </Card.Text>
            <Card.Text className='less_margin'>
              <span className='title'>
                <div  dangerouslySetInnerHTML={{ __html: title }}></div>
                </span>
            </Card.Text>
            <Card.Text className='less_margin'>
              <span>
                <div className='description'dangerouslySetInnerHTML={{ __html: description }}></div>
              </span>
                
                <span className='subtitle'>
                  {parse(postdate).toISOString().substring(0, 10)}
                </span>
                
                {
                  ad === "1"
                  ? <span className='is_ad_red'> 광고로 추정됩니다</span>
                  : <span className='is_ad_blue'> 찐리뷰입니다!</span>
                }
              </Card.Text>
          </a>
        </Card.Body>
      </Card>
    );
  }

export default ReviewItem;
