import { makeStyles } from '@material-ui/styles';

const lightStyles = makeStyles({
  root: {
    backgroundColor: 'white',
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
    margin: '0px 4%',
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
    backgroundColor: 'white',
    maxWidth: '500px',
    width: '80%',
  },
  reviewCard: {
    borderWidth: '0px !important',
    backgroundColor: '#f8f8f8 !important',
    textAlign: 'left',
    fontSize: '0.9rem',
    color: 'black !important'
  },
  reciewItem: {
    color: 'black',
    textDecoration: 'none',
    '&:hover': {
      color: 'black',
      textDecoration: 'none',
    }
  }
});

export default lightStyles; 