import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { light } from './styles/themes/light';
import { dark } from './styles/themes/dark';

import { Header } from './components/Header';
import { GlobalStyles } from './styles/global';

function App() {
  const [theme, setTheme] = useState(light);

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
