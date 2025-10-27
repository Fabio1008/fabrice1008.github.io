import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home/index'
import Project from '../pages/project'
import Error from '../pages/error'

const RoutesPath = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<Project />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default RoutesPath
