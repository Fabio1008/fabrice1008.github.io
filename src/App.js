import Header from './containers/header/header'
import RoutesPath from './router'
import Footer from './containers/footer/footer'
import './sass/_main.scss'

function App() {
  return (
    <div>
      <Header />
      <RoutesPath />
      <Footer />
    </div>
  )
}

export default App
