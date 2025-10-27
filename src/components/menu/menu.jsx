import DarkMode from '../darkmode/darkmode'
import LinkStyle from '../../utils/style/linkstyle'
import '../../sass/components/_menu.scss'

const Menu = () => {
  return (
    <div className="header__menu">
      <ul>
        <LinkStyle />
        <li>
          <a
            className="link-theme"
            href="/#a-propos"
            onClick={() => (window.location.hash = '#a-propos')}
          >
            À PROPOS
          </a>
        </li>
        <li>
          <a className="link-theme" href="/#skills">
            COMPÉTENCES
          </a>
        </li>
        <li>
          <a className="link-theme" href="/#projets">
            PROJETS
          </a>
        </li>
        <li>
          <a className="link-theme" href="/#contact">
            CONTACT
          </a>
        </li>
        <li>
          <DarkMode />
        </li>
      </ul>
    </div>
  )
}

export default Menu
