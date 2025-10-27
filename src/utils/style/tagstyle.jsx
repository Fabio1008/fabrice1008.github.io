import { createGlobalStyle } from 'styled-components'
import { useTheme } from '../hooks'

const StyledTagStyle = createGlobalStyle`
.tag {
    background-color: ${(props) =>
      props.theme.darkMode ? '#A3DEE7' : '#2200B8'};
    border: none;
    border-radius: 1000px;    
    padding: 6px 12px
}
`

function TagStyle() {
  const { darkMode } = useTheme()

  return <StyledTagStyle theme={{ darkMode }} />
}

export default TagStyle
