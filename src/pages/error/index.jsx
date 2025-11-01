import { useTheme } from '../../utils/hooks'
import ButtonStyle from '../../utils/style/boutonstyle'
import LightError from '../../assets/error/404-page-not-found.png'
import DarkError from '../../assets/error/darkmode-404-page-not-found.png'
import '../../sass/pages/_error.scss'

const Error = () => {
  const { darkMode } = useTheme()

  return (
    <main className="error">
      <div className="error__content">
        <h1 className="error__title">Oups !</h1>
        <img
          className="error__image"
          src={darkMode ? DarkError : LightError}
          alt="Erreur 404 - page non trouvée"
        />
        <p className="error__text">
          La page que vous cherchez n’existe pas ou a été déplacée.
        </p>

        <div className="error__actions">
          <ButtonStyle />
          <a href="/">
            <button className="error__button theme-color">
              Retourner à l’accueil
            </button>
          </a>
        </div>
      </div>
    </main>
  )
}

export default Error

