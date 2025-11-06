import Header from './containers/header/header'
import RoutesPath from './router'
import Footer from './containers/footer/footer'
import VideoBackground from "./components/video/VideoBackground"
import './sass/_main.scss'

function App() {
  return (
    <div>
      <VideoBackground />
      <Header />
      <RoutesPath />
      <Footer />
    </div>
  )
}

export default App
