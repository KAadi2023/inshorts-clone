
//components
import Header from './components/Header';
import InfoHeader from './components/InfoHeader';
import { Box, styled} from '@mui/material';
import Articles from './components/Articles';

const Container = styled(Box)(({theme}) => ({
  width: '71%',
  margin: '40px auto 0 auto',
  [theme.breakpoints.down('md')]: {
    width: '85%'
  },
  [theme.breakpoints.down('sm')]: {
    width: '95%'
  }
}));

function App() {
  return (
    <Box>
      <Header/>
      <Container>
        <InfoHeader/>
        <Articles/>
      </Container>
    </Box>
  );
}

export default App;
