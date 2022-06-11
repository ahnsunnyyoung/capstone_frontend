import ReviewItem from "./ReviewItem";
import '../css/ReviewList.css'
import lightStyles from '../styles/lightStyles';
import darkStyles from '../styles/darkStyles';

function ReviewList({ mode, reviews, page, realLoading, filtered }) {

  const classes = mode === 'dark' ? darkStyles() : lightStyles();
  const sortedReviews = []
  const originalReviews = reviews

  // console.log(reviews)
  // // originalReviews.forEach(element => {
  // //   if(element.ad==0){
  // //     sortedReviews.push(element)
  // //     originalReviews.shift(0)
  // //   }
  // // });
  // // sortedReviews = sortedReviews+originalReviews
  // // console.log(sortedReviews)
  // for (let element of originalReviews) {
  //   if(element.ad==0){
  //     sortedReviews.push(element)
  //     originalReviews.shift(0)
  //   }
  // }
  
  // sortedReviews = sortedReviews.concat(originalReviews)
  // console.log(sortedReviews)

  if(filtered){
    return (
      <div>
        <ul>
          {sortedReviews.map((item) => {
              return (
                <>
                  <ReviewItem
                    mode={mode}
                    title={item.title}
                    postdate={item.postdate}
                    link={item.link}
                    description={item.description}
                    bloggername={item.bloggername}
                    probability={item.probability}
                    ad={item.ad}
                    realLoading={realLoading}
                    filtered={filtered}
                  />
                  <hr/>
                </>
                
                )
            })}
        </ul>
  
      </div>
    );
  }else{
    return (
      <div>
        <ul>
          {reviews.map((item) => {
              return (
                <>
                  <ReviewItem
                    mode={mode}
                    title={item.title}
                    postdate={item.postdate}
                    link={item.link}
                    description={item.description}
                    bloggername={item.bloggername}
                    probability={item.probability}
                    ad={item.ad}
                    realLoading={realLoading}
                    filtered={filtered}
                  />
                  <hr/>
                </>
                
                )
            })}
        </ul>
  
      </div>
    );
  }
  
}

export default ReviewList;
