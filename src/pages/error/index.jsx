import { useTheme } from '../../utils/hooks'
import ButtonStyle from '../../utils/style/boutonstyle'
import LightError from '../../assets/error/404-page-not-found.png'
import DarkError from '../../assets/error/darkmode-404-page-not-found.png'
import '../../sass/pages/_error.scss'

const Error = () => {
  const { darkMode } = useTheme()
  return (
    <main className="error">
      <h1 className="error__title">Page d'erreur</h1>
      <img
        className="error__image"
        src={darkMode ? DarkError : LightError}
        alt="erreur 404"
      />
      <p className="error_text">LA PAGE QUE VOUS DEMANDEZ N'EXISTE PAS...</p>
      <ButtonStyle />
      <a href="/">
        <button className="error__button theme-color">
          Retourner à la page d'accueil
        </button>
      </a>
    </main>
  )
}

export default Error
