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

function reviewPossibility(realLoading,probability,ad) {
  if (!realLoading){
    if(ad===1){
      return(<span className='jjin_percent'> 찐리뷰 확률 {((1-probability)*100).toFixed(2)}%</span>)
    }else{
      return(<span className='jjin_percent'> 찐리뷰 확률 {((probability)*100).toFixed(2)}%</span>)
    }
  }
}

function reviewDecision(realLoading,ad) {
  if (realLoading){
    return(<span className='real_loading'> 찐맛집 분석 중입니다...</span>)
  } else{
    if (ad===1){
      return(<span className='is_ad_red'> 광고로 추정됩니다</span>)
    }else{
      return(<span className='is_ad_blue'> 찐리뷰입니다!</span>)
    }
  }
}

function ReviewItem({ mode, key, title, postdate, link, description, bloggername, probability, ad, realLoading, filtered}) {
  const classes = mode === 'dark' ? darkStyles() : lightStyles();
  if (ad===1&&filtered){
    return (
      <>
        <Card className={classes.reviewCard} key={key}>
        <div className='filtered_ad'>
          <span>광고로 추정되어 필터 되었습니다.</span>
        </div>
          <Card.Body>
            <Card.Text className='less_margin'>
              <span className='subtitle'>
                {bloggername}
              </span>
              {reviewPossibility(realLoading,probability,ad)}
              
              
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
                {reviewDecision(realLoading,ad)}
              </Card.Text>
          </Card.Body>
        </Card>
      </>
      );
  }else{
    return (
      <>
        <Card className={classes.reviewCard} key={key}>
          <Card.Body>
            <a className={classes.reciewItem} href={link} target="_blank">
              <Card.Text className='less_margin'>
                <span className='subtitle'>
                  {bloggername}
                </span>
                {reviewPossibility(realLoading,probability,ad)}
                
                
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
                  {reviewDecision(realLoading,ad)}
                </Card.Text>
            </a>
          </Card.Body>
        </Card>
      </>
      );
  }
}

export default ReviewItem;
