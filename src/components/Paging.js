import React from "react"
import '../css/Paging.css'
import Pagination from "react-js-pagination"

const Paging = ({page, count, itemsCountPerPage, setPage}) => { 
  return (
    <Pagination 
      activePage={page} 
      itemsCountPerPage={itemsCountPerPage} 
      totalItemsCount={count} 
      pageRangeDisplayed={5} 
      prevPageText={"‹"} 
      nextPageText={"›"} 
      onChange={setPage} 
      /> 
    ); 
  }; 
  
export default Paging;
