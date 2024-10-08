import 'rc-tooltip/assets/bootstrap.css';

import Routes from 'app/Routes';
import { store } from 'app/store';
import { theme } from 'app/theme';
import BaseStyles from 'components/styles/BaseStyles';
import NormalizedStyles from 'components/styles/NormalizedStyles';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <NormalizedStyles />
        <BaseStyles />
        <Routes />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
