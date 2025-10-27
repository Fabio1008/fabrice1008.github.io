import { createGlobalStyle } from 'styled-components'
import { useTheme } from '../hooks'

const StyledLinkStyle = createGlobalStyle`
    .link-theme::after {
        border-bottom: ${(props) =>
          props.theme.darkMode ? '4px solid #A3DEE7' : '4px solid #2200B8'};
        content: '';
        display: block;
        transform: scaleX(0);
        transition: transform 250ms ease-in-out;
    }    
    .link-theme:hover::after {
        transform: scaleX(1);
    }
`

function LinkStyle() {
  const { darkMode } = useTheme()

  return <StyledLinkStyle theme={{ darkMode }} />
}

export default LinkStyle
