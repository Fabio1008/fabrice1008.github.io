import { createGlobalStyle } from 'styled-components'
import { useTheme } from '../hooks'

const StyledImageStyle = createGlobalStyle`
    .image-theme {
        box-shadow: ${(props) =>
          props.theme.darkMode
            ? '3px 3px 10px 3px #FFFFFFcc'
            : '6px 4px 12px 6px #000000cc'};
    }
`

function ImageStyle() {
  const { darkMode } = useTheme()

  return <StyledImageStyle theme={{ darkMode }} />
}

export default ImageStyle
