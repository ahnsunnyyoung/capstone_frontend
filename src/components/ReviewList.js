import ReviewItem from "./ReviewItem";
import '../css/ReviewList.css'
import lightStyles from '../styles/lightStyles';
import darkStyles from '../styles/darkStyles';

function ReviewList({ mode, itemdata, page, itemsCountPerPage }) {

  const classes = mode === 'dark' ? darkStyles() : lightStyles();

  const startIdx = (page*itemsCountPerPage)-itemsCountPerPage
  const endIdx = page*itemsCountPerPage
  const showItem = itemdata.slice(startIdx,endIdx)

  return (
    <div>
      <ul>
        {showItem.map((item) => {
          return (
            <>
              <ReviewItem
                mode={mode}
                title={item.title}
                postdate={item.postdate}
                link={item.link}
                description={item.description}
                bloggername={item.bloggername}
                jjinper={item.jjinper}
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
