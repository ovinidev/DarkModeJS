import P from 'prop-types';

import Switch from 'react-switch';
import { shade } from 'polished';

import { useContext } from 'react';

import { ThemeContext } from 'styled-components';
import { Container } from './styles';

export const Header = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <h1>Dark mode</h1>
      <Switch
        class
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, '#C82270')}
        onColor={colors.secondary}
        />
    </Container>
  );
};

Header.propTypes = {
  toggleTheme: P.func.isRequired,
};
