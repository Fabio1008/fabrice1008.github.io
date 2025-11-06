import React, { useState, useEffect, createContext } from 'react'
import { createGlobalStyle, ThemeProvider as StyledThemeProvider } from 'styled-components'

const lightTheme = {
  background: '#F9FAFB',
  text: '#1E1E1E',
  accent: '#007BFF',
  secondary: '#5A5A5A',
  cardBg: '#FFFFFF',
  cardShadow: 'rgba(0, 0, 0, 0.08)',
}

const darkTheme = {
  background: '#121212',
  text: '#EAEAEA',
  accent: '#4F9DFF',
  secondary: '#B0B0B0',
  cardBg: '#1E1E1E',
  cardShadow: 'rgba(255, 255, 255, 0.05)',
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    font-family: 'Inter', 'Poppins', sans-serif;
    transition: background-color 0.4s ease, color 0.4s ease;
    line-height: 1.6;
  }

  a {
    color: ${(props) => props.theme.accent};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${(props) => props.theme.text};
    }
  }

  * {
    transition: background-color 0.4s ease, color 0.4s ease, border 0.4s ease;
  }
`

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem('darkMode')) || false
  })

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode
      localStorage.setItem('darkMode', JSON.stringify(newMode))
      return newMode
    })
  }

  useEffect(() => {
    const savedDarkMode = JSON.parse(localStorage.getItem('darkMode'))
    if (savedDarkMode !== null) setDarkMode(savedDarkMode)
  }, [])

  // ⚡ Forcing data-theme sur le body
  useEffect(() => {
    document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  const theme = darkMode ? darkTheme : lightTheme

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <StyledThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  )
}
