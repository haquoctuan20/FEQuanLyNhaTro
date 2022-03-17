import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

interface Props {
  children: ReactNode;
}

const theme = {
  background1: '#ffffff',
  background2: '#1cc48c',
  background3: '#28293d',
  background4: '#595d79',
  background5: '#ededed',

  backgroundBlue: '#266cd3',
  backgroundBlueHover: '#1f5cb7',

  buttonGreen: '#1cc48c',
  buttonGreenHover: '#31e2a7',

  buttonDark: '#323549',
  buttonDarkHover: '#ffffff14',

  text1: '#000000',
  text2: '#ffffff',
  textRed: '#fe383f',
  textGreen: '#1cc48c',
  textWarning: '#fea500',

  border: '#ffffff',
  border2: '#595d79',
  shadowContainer: '#0000003b 2.4px 2.4px 3.2px',

  shadow1: '#1ad9f1',
};

function ThemeProviderStyled({ children }: Props) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default ThemeProviderStyled;
