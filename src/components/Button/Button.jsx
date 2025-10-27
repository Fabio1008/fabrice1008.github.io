import styled, { css } from 'styled-components'
import { useTheme } from '../../utils/hooks'


// 🧩 Styles dynamiques selon la variante et le mode sombre
const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  /* Taille */
  ${({ size }) =>
    size === 'small'
      ? css`
          height: 40px;
          width: 160px;
          font-size: 14px;
        `
      : size === 'large'
      ? css`
          height: 55px;
          width: 240px;
          font-size: 17px;
        `
      : css`
          height: 50px;
          width: 200px;
          font-size: 16px;
        `}

  /* Variante de style */
  ${({ variant, theme }) => {
    const isDark = theme.darkMode
    switch (variant) {
      case 'secondary':
        return css`
          background: ${isDark ? '#3C3C3C' : '#F4F4F4'};
          color: ${isDark ? '#EAEAEA' : '#222'};
          border: 2px solid ${isDark ? '#A3DEE7' : '#2200B8'};
          &:hover {
            background: ${isDark ? '#595959' : '#E6E6FA'};
          }
        `
      case 'outline':
        return css`
          background: transparent;
          color: ${isDark ? '#A3DEE7' : '#2200B8'};
          border: 2px solid ${isDark ? '#A3DEE7' : '#2200B8'};
          &:hover {
            background: ${isDark ? 'rgba(163, 222, 231, 0.1)' : 'rgba(34,0,184,0.1)'};
          }
        `
      default:
        return css`
          background: ${isDark ? '#00C2D1' : '#2200B8'};
          color: ${isDark ? '#1E1E1E' : '#FFFFFF'};
          box-shadow: 0 4px 15px
            ${isDark ? 'rgba(0, 194, 209, 0.3)' : 'rgba(34, 0, 184, 0.3)'};
          &:hover {
            transform: translateY(-3px);
            background: ${isDark ? '#48E3F0' : '#4C3CFF'};
            box-shadow: 0 6px 25px
              ${isDark ? 'rgba(0, 194, 209, 0.4)' : 'rgba(34, 0, 184, 0.4)'};
          }
        `
    }
  }}

  &:active {
    transform: scale(0.98);
  }

  &:focus-visible {
    outline: 3px solid
      ${({ theme }) => (theme.darkMode ? '#48E3F0' : '#C9C3FF')};
    outline-offset: 3px;
  }
`

// ⚛️ Composant réutilisable
const Button = ({ children, variant = 'primary', size = 'medium', onClick, type = 'button' }) => {
  const { darkMode } = useTheme()
  return (
    <StyledButton theme={{ darkMode }} variant={variant} size={size} onClick={onClick} type={type}>
      {children}
    </StyledButton>
  )
}

export default Button
