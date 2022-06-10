import { makeStyles } from '@material-ui/styles';

const darkStyles = makeStyles({
  root: {
    backgroundColor: '#35363a',
    // backgroundColor: 'black',
    width: '100%',
    textAlign: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    fontSize: 'calc(10px + 2vmin)',
    color: '#929292',
  },
  header: {
    marginLeft: '2%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: '#929292'
  },
  reviewList: {
    backgroundColor: '#35363a',
    margin: '20px 4%',
    width: '90%',
    maxWidth: '900px'
  },
  searchInput: {
    padding: '0px 18px',
    border: 'solid 3px #4c86f8',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '500px',
    width: '80%',
    backgroundColor: '#35363a'
  },
  reviewCard: {
    borderWidth: '0px !important',
    backgroundColor: '#2E2F32 !important',
    textAlign: 'left',
    fontSize: '0.9rem',
    color: 'white !important'
  },
  reciewItem: {
    color: '#d9d9d9',
    textDecoration: 'none',
    '&:hover': {
      color: '#d9d9d9',
      textDecoration: 'none',
    }
  }
});

  export default darkStyles; 