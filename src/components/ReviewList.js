import ReviewItem from "./ReviewItem";
import '../css/ReviewList.css'
import lightStyles from '../styles/lightStyles';
import darkStyles from '../styles/darkStyles';

function ReviewList({ mode, reviews, page }) {

  const classes = mode === 'dark' ? darkStyles() : lightStyles();
  console.log("리뷰 그리는 곳",reviews[0],"start",page)

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
              />
              <hr/>
            </>
            
            )
          })}
      </ul>

    </div>
  );
}

export default ReviewList;
