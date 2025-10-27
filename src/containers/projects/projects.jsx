import ProjectsGrid from '../../components/project/projectgrid'
import '../../sass/containers/_projectshome.scss'

const Projects = () => {
  return (
    <section className="home__projects">
      <h2 id="projets" className="home__projects__title">
        Mes projets
      </h2>
      <ProjectsGrid />
    </section>
  )
}

export default Projects
