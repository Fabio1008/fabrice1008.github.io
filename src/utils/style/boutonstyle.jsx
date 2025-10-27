import { createGlobalStyle } from 'styled-components'
import { useTheme } from '../hooks'


const StyledButtonStyle = createGlobalStyle`
  /* 🎨 Boutons globaux */
  .intro__desc-cv,
  .error__button,
  .form__button,
  .project__button {
    background: ${(props) => (props.theme.darkMode ? '#00C2D1' : '#2A1FFF')};
    color: ${(props) => (props.theme.darkMode ? '#1E1E1E' : '#FFFFFF')};
    border: none;
    border-radius: 50px;
    cursor: pointer;
    height: 50px;
    width: 220px;
    margin-top: 15px;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    transition: all 0.3s ease;
    position: relative;
    box-shadow: 0 4px 14px
      ${(props) =>
        props.theme.darkMode
          ? 'rgba(0, 194, 209, 0.25)'
          : 'rgba(34, 0, 184, 0.25)'};

    &:hover {
      transform: translateY(-3px);
      background: ${(props) =>
        props.theme.darkMode ? '#48E3F0' : '#4C3CFF'};
      box-shadow: 0 6px 20px
        ${(props) =>
          props.theme.darkMode
            ? 'rgba(0, 194, 209, 0.35)'
            : 'rgba(34, 0, 184, 0.35)'};
    }

    &:active {
      transform: scale(0.98);
    }

    &:focus-visible {
      outline: 3px solid
        ${(props) =>
          props.theme.darkMode ? '#48E3F0' : '#C9C3FF'};
      outline-offset: 3px;
    }
  }

  /* ✨ Bordures d’accent lumineuses */
  .intro__desc-cv::before,
  .error__button::before,
  .form__button::before,
  .project__button::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50px;
    border: ${(props) =>
      props.theme.darkMode ? '2px solid #48E3F0' : '2px solid #2200B8'};
    opacity: 0.5;
    pointer-events: none;
    transition: opacity 0.3s ease;
  }

  /* 🧠 Couleur de texte dynamique */
  .theme-color {
    color: ${(props) => (props.theme.darkMode ? '#000000' : '#FFFFFF')};
    font-size: 16px;
    font-weight: 500;
  }
`

function ButtonStyle() {
  const { darkMode } = useTheme()
  return <StyledButtonStyle theme={{ darkMode }} />
}

export default ButtonStyle
