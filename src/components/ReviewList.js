import ReviewItem from "./ReviewItem";

function ReviewList() {
  const itemdata = [
    {
      "title" : "[일산 맛집] 원마운트 차이나는 분식",
      "postdate" : "20210307",
      "link" : "https://blog.naver.com/agnes4god/222267688804",
      "description" : "일산 맛집 원마운트 차이나는 분식집에 다녀왔어요.",
      "bloggername" : "아침에 쏟아지는 햇살처럼..."
    },
    {
      "title" : "일산 맛집 열두시테이블 후기",
      "postdate" : "20200619",
      "link" : "https://blog.naver.com/miminimkkk/221999915307",
      "description" : "일산 맛집 열두시테이블 후기",
      "bloggername" : "♥ 미미찡의 귤 까는 놀이터 ♥"
    },
    {
      "title" : "일산 맛집 숙성장어로 몸보신ㅣ폭풍장어본점",
      "postdate" : "20220315",
      "link" : "https://blog.naver.com/mj100600?Redirect=Log&logNo=222672770358",
      "description" : "일산 맛집 숙성장어로 몸보신해요",
      "bloggername" : "avec moi ♪"
    },
]


  return (
    <div className="review_list">
      {/* <ReviewItem
        title={itemdata[0].title}
        postdate={itemdata[0].postdate}
        link={itemdata[0].link}
        description={itemdata[0].description}
        bloggername={itemdata[0].bloggername}
      /> */}
      <ul>
        {itemdata.map((item) => {
          return (
            <>
              <ReviewItem
                title={item.title}
                postdate={item.postdate}
                link={item.link}
                description={item.description}
                bloggername={item.bloggername}
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
