import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import DemoButton from './demoComponents/Button';

import Grid from '../components/Grid';

const theme = {
  spacing: {
    padding: '5px',
  },
  itemSpacing: {
    margin: '8px 0'
  }
};

class Index extends React.Component {

  render() {

    return (
      <div>
        <Grid col={3}>
          <DemoButton />
          <DemoButton text="test" />
          <DemoButton />
          <DemoButton />
        </Grid>
      </div>
    );
  }
}
const App = () => {
  return <ThemeProvider theme={theme}>
    <Index />
  </ThemeProvider>
}
export default App;
