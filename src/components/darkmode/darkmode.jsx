import { useTheme } from '../../utils/hooks'
import { ReactComponent as Sun } from '../../assets/darkmode/sun.svg'
import { ReactComponent as Moon } from '../../assets/darkmode/moon.svg'
import '../../sass/components/_darkmode.scss'

const DarkMode = () => {
  const { darkMode, toggleDarkMode } = useTheme()

  return (
    <div className="header__darkmode">
      <input
        className="header__darkmode-input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleDarkMode}
        defaultChecked={darkMode}
      />
      <label
        className="header__darkmode-label"
        htmlFor="darkmode-toggle"
        aria-label="changer le thème du site"
      >
        <Sun />
        <Moon />
      </label>
    </div>
  )
}

export default DarkMode
