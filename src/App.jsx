import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global';

import { light } from './styles/themes/light';
import { dark } from './styles/themes/dark';

import { Header } from './components/Header';
import { usePersistedState } from './utils/usePersistedState';

function App() {
  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = () => {
    setTheme(theme === light ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles />
        <Header toggleTheme={toggleTheme} />
      </div>
    </ThemeProvider>
  );
}

export default App;
