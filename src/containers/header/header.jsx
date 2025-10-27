import Logo from '../../components/logo/logo'
import Menu from '../../components/menu/menu'
import '../../sass/containers/_header.scss'

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Portfolio - Fabrice MONGBA</h1>
      <Logo />
      <Menu />
    </header>
  )
}

export default Header
