import React, {useState} from 'react';
import JobSearch from './JobSearch';
import styled, {ThemeProvider} from 'styled-components'
import {Toggle} from './Components/Toggle';
import {useDarkMode} from './Components/useDarkMode';
import {GlobalStyles, lightTheme, darkTheme} from './Components/globalStyles';
const Container = styled.div`
 
`


function App() {
const [theme, toggleTheme]= useDarkMode();
 const themeMode = theme === 'light' ? lightTheme : darkTheme;
 
  return (   
    <ThemeProvider theme={themeMode}>
      <Container>
      <GlobalStyles/>
      <Toggle theme={theme} toggleTheme={toggleTheme}/>
      <JobSearch/>
    </Container>
    </ThemeProvider>
    
   
  
  );
}

export default App;
