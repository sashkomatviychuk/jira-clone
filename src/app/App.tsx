import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import Routes from 'app/Routes';
import NormalizedStyles from 'components/styles/NormalizedStyles';
import BaseStyles from 'components/styles/BaseStyles';
import { store } from 'app/store';
import { theme } from 'resources/theme';

import 'resources/css/fonts.css';
import 'rc-tooltip/assets/bootstrap.css';

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
