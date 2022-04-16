import ReviewItem from "./ReviewItem";
import '../css/ReviewList.css'

function ReviewList({ itemdata, page, itemsCountPerPage }) {
  const startIdx = (page*itemsCountPerPage)-itemsCountPerPage
  const endIdx = page*itemsCountPerPage
  const showItem = itemdata.slice(startIdx,endIdx)

  return (
    <div className="review_item_list">
      <ul>
        {showItem.map((item) => {
          return (
            <>
              <ReviewItem
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
