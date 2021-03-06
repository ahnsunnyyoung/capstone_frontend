import ReviewItem from "./ReviewItem";
import '../css/ReviewList.css'

function ReviewList({ mode, reviews, page, realLoading, filtered, sortedReviews }) {

  if(filtered){
    return (
      <div>
        <ul>
          {sortedReviews && sortedReviews.map((item) => {
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
          {reviews && reviews.map((item) => {
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
