import React, { useState, useEffect } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";

import lightStyles from '../styles/lightStyles';
import darkStyles from '../styles/darkStyles';
import '../css/SearchPage.css'
import SearchBar from './SearchBar';
import FilterBar from './FilterBar';
import MainLogo from './MainLogo';
import ReviewList from './ReviewList';
import Paging from './Paging';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function SearchPage() {
  const paramsSearchTxt = useParams().searchTxt;
  
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  
  const [mode, setMode] = useState(prefersDarkMode ? 'dark' : 'light');
  const [myTheme, setTheme] = useState(prefersDarkMode ? darkTheme : lightTheme);
  const [page, setPage] = useState(1);
  
  const URL = '/search/blog.json?query='
  const [reviews, setReviews] = useState(null);
  const [reviewsNum, setReviewsNum] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchtxt, setSearchtxt] = useState(paramsSearchTxt);
  const navigate = useNavigate();

  const classes = mode === 'dark' ? darkStyles() : lightStyles();

  const onChangeSearch = (e) => {
    e.preventDefault();
    setSearchtxt(e.target.value);
  }
  
  const fetchReviews = async () => {
    console.log("리뷰 패치")
    try {
      // 요청이 시작 할 때에는 error 와 reviews 를 초기화하고
      setError(null);
      setReviews(null);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);
      const response = await axios.get(URL+'?query='+searchtxt+'&display='+5+'&start='+page+((page-1)*5) );
      setReviewsNum(response.data.total)
      setReviews(response.data.items); // 데이터는 response.data 안에 들어있습니다.
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  const onSearch = (e) => {
    e.preventDefault();
    if (searchtxt ===  null || searchtxt === "") {
      navigate('/search/null')
    } else {
      navigate('/search/'+searchtxt)
      fetchReviews();
    }
  }

  const handlePageChange = (page) => {
    setPage(page);
    console.log("페이지 변경",page)
    fetchReviews();
  };

  const handleChange = (e) => {
    if (mode==='light') {
      // setDark(false)
      setMode('dark');
      setTheme(darkTheme);
    }else {
      // setDark(true)
      setMode('light');
      setTheme(lightTheme);
    }
  };

  const itemsCountPerPage = 5;


  useEffect(() => {
    fetchReviews();
  }, []);

  if (loading) { return <div>로딩중...</div>;}
  else if (error) {return <div>에러가 발생했습니다</div>;}
  else if (!reviews) {return null;}
  else{
    return (
      <ThemeProvider theme={myTheme}>
        <div className={classes.root}>
          <div className={classes.header}>
            <MainLogo size={180}/>
            <div className='search_input_darkmode'>
              <div className={classes.searchInput}>

                <form style = {{"display": "flex","width":"100%"}} onSubmit={e=>onSearch(e)}>
                  <input className='search_input' 
                    type="text" 
                    placeholder='검색하고 싶은 맛집 정보를 입력하세요.'
                    onChange={onChangeSearch}/>

                  <button type='submit'>
                    <FaSearch className="search_icon" color='#4c86f8'/>
                  </button>
                </form>
              </div>

              <FormControlLabel
                checked={mode === 'dark' ? true : false}
                onChange={handleChange}
                control={<MaterialUISwitch sx={{ m: 1 }} />}
                label="다크 모드"
                labelPlacement="start"
              />
            </div>
          </div>
          <FilterBar count={reviewsNum}/>


          <div className={classes.reviewList}>
            <div className='search_result_info'><b>{paramsSearchTxt}</b>에 대한 검색 결과입니다.</div>
            <ReviewList mode={mode} reviews={reviews} page={page} />
            <Paging page={page} count={reviewsNum} itemsCountPerPage={itemsCountPerPage} handlePageChange={handlePageChange}/>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

export default SearchPage;
