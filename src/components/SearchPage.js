import React, { useState } from 'react';

import '../css/SearchPage.css'
import SearchBar from './SearchBar';
import FilterBar from './FilterBar';
import MainLogo from './MainLogo';
import ReviewList from './ReviewList';
import Paging from './Paging';

function SearchPage() {

  const itemdata = [
    {
      "title" : "[일산 맛집] 원마운트 차이나는 분식",
      "postdate" : "20210307",
      "link" : "https://blog.naver.com/agnes4god/222267688804",
      "description" : "일산 맛집 원마운트 차이나는 분식집에 다녀왔어요.",
      "bloggername" : "아침에 쏟아지는 햇살처럼...",
      "jjinper" : 0.92
    },
    {
      "title" : "일산 맛집 열두시테이블 후기",
      "postdate" : "20200619",
      "link" : "https://blog.naver.com/miminimkkk/221999915307",
      "description" : "일산 맛집 열두시테이블 후기",
      "bloggername" : "♥ 미미찡의 귤 까는 놀이터 ♥",
      "jjinper" : 0.90
    },
    {
      "title" : "일산 맛집 숙성장어로 몸보신ㅣ폭풍장어본점",
      "postdate" : "20220315",
      "link" : "https://blog.naver.com/mj100600?Redirect=Log&logNo=222672770358",
      "description" : "일산 맛집 숙성장어로 몸보신해요",
      "bloggername" : "avec moi ♪",
      "jjinper" : 0.76
    },
    {
      "title" : "[일산 맛집] 원마운트 차이나는 분식",
      "postdate" : "20210307",
      "link" : "https://blog.naver.com/agnes4god/222267688804",
      "description" : "일산 맛집 원마운트 차이나는 분식집에 다녀왔어요.",
      "bloggername" : "아침에 쏟아지는 햇살처럼...",
      "jjinper" : 0.92
    },
    {
      "title" : "일산 맛집 열두시테이블 후기",
      "postdate" : "20200619",
      "link" : "https://blog.naver.com/miminimkkk/221999915307",
      "description" : "일산 맛집 열두시테이블 후기",
      "bloggername" : "♥ 미미찡의 귤 까는 놀이터 ♥",
      "jjinper" : 0.90
    },
    {
      "title" : "일산 맛집 숙성장어로 몸보신ㅣ폭풍장어본점",
      "postdate" : "20220315",
      "link" : "https://blog.naver.com/mj100600?Redirect=Log&logNo=222672770358",
      "description" : "일산 맛집 숙성장어로 몸보신해요",
      "bloggername" : "avec moi ♪",
      "jjinper" : 0.76
    },
    {
      "title" : "[일산 맛집] 원마운트 차이나는 분식",
      "postdate" : "20210307",
      "link" : "https://blog.naver.com/agnes4god/222267688804",
      "description" : "일산 맛집 원마운트 차이나는 분식집에 다녀왔어요.",
      "bloggername" : "아침에 쏟아지는 햇살처럼...",
      "jjinper" : 0.92
    },
    {
      "title" : "일산 맛집 열두시테이블 후기",
      "postdate" : "20200619",
      "link" : "https://blog.naver.com/miminimkkk/221999915307",
      "description" : "일산 맛집 열두시테이블 후기",
      "bloggername" : "♥ 미미찡의 귤 까는 놀이터 ♥",
      "jjinper" : 0.90
    },
    {
      "title" : "일산 맛집 숙성장어로 몸보신ㅣ폭풍장어본점",
      "postdate" : "20220315",
      "link" : "https://blog.naver.com/mj100600?Redirect=Log&logNo=222672770358",
      "description" : "일산 맛집 숙성장어로 몸보신해요",
      "bloggername" : "avec moi ♪",
      "jjinper" : 0.76
    },
    {
      "title" : "[일산 맛집] 원마운트 차이나는 분식",
      "postdate" : "20210307",
      "link" : "https://blog.naver.com/agnes4god/222267688804",
      "description" : "일산 맛집 원마운트 차이나는 분식집에 다녀왔어요.",
      "bloggername" : "아침에 쏟아지는 햇살처럼...",
      "jjinper" : 0.92
    },
    {
      "title" : "일산 맛집 열두시테이블 후기",
      "postdate" : "20200619",
      "link" : "https://blog.naver.com/miminimkkk/221999915307",
      "description" : "일산 맛집 열두시테이블 후기",
      "bloggername" : "♥ 미미찡의 귤 까는 놀이터 ♥",
      "jjinper" : 0.90
    },
    {
      "title" : "일산 맛집 숙성장어로 몸보신ㅣ폭풍장어본점",
      "postdate" : "20220315",
      "link" : "https://blog.naver.com/mj100600?Redirect=Log&logNo=222672770358",
      "description" : "일산 맛집 숙성장어로 몸보신해요",
      "bloggername" : "avec moi ♪",
      "jjinper" : 0.76
    },
    {
      "title" : "[일산 맛집] 원마운트 차이나는 분식",
      "postdate" : "20210307",
      "link" : "https://blog.naver.com/agnes4god/222267688804",
      "description" : "일산 맛집 원마운트 차이나는 분식집에 다녀왔어요.",
      "bloggername" : "아침에 쏟아지는 햇살처럼...",
      "jjinper" : 0.92
    },
    {
      "title" : "일산 맛집 열두시테이블 후기",
      "postdate" : "20200619",
      "link" : "https://blog.naver.com/miminimkkk/221999915307",
      "description" : "일산 맛집 열두시테이블 후기",
      "bloggername" : "♥ 미미찡의 귤 까는 놀이터 ♥",
      "jjinper" : 0.90
    },
    {
      "title" : "일산 맛집 숙성장어로 몸보신ㅣ폭풍장어본점",
      "postdate" : "20220315",
      "link" : "https://blog.naver.com/mj100600?Redirect=Log&logNo=222672770358",
      "description" : "일산 맛집 숙성장어로 몸보신해요",
      "bloggername" : "avec moi ♪",
      "jjinper" : 0.76
    },
  
  ]

  const itemsCountPerPage = 5;

  const [page, setPage] = useState(1);

  return (
    <div className='search_page'>
      <div className='search_page_header'>
        <MainLogo/>
        <SearchBar/>
      </div>
      <FilterBar count={itemdata.length}/>
      <div className='review_list'>
      <ReviewList itemdata={itemdata} page={page} itemsCountPerPage={itemsCountPerPage} />
      <Paging page={page} count={itemdata.length} itemsCountPerPage={itemsCountPerPage} setPage={setPage}/>
      </div>
    </div>
  );
}

export default SearchPage;
