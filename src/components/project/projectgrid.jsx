import { useState } from 'react'
import { Link } from 'react-router-dom'
import Projects from '../../data/projects.json'
import '../../sass/components/_projectgrid.scss'

const ProjectsPage = () => {
  const [filter, setFilter] = useState("Tout")

  const handleFilterChange = (value) => {
    setFilter(value)
  }

  return (
    <div className="projectsGrid__container">
      <Filter onFilterChange={handleFilterChange} />
      <ProjectsGrid filter={filter} />
    </div>
  )
}

const Filter = ({ onFilterChange }) => {
  const [selectClicked, setSelectClicked] = useState(false)

  const handleFilterSelect = (e) => {
    onFilterChange(e.target.value)
    setSelectClicked(false)
  }

  const handleSelectClick = () => {
    setSelectClicked(true)
  }

  return (
    <div className={`filter__container ${selectClicked ? 'select-clicked' : ''}`}>
      <select
        className={`filter__container-bar ${selectClicked ? 'select-clicked' : ''}`}
        onChange={handleFilterSelect}
        onClick={handleSelectClick}
      >
        <option value="Tout">Tout</option>
        <option value="HTML">HTML</option>
        <option value="JavaScript">JavaScript</option>
        <option value="React">React</option>
        <option value="Gestion de projet">Gestion de projet</option>
        <option value="Debug">Debug</option>
        <option value="SEO">SEO</option>
      </select>
    </div>
  )
}

const ProjectsGrid = ({ filter }) => {
  const handleClick = () => window.scrollTo(0, 0)

  const filteredProjects =
    filter === 'Tout'
      ? Projects
      : Projects.filter((project) => project.category === filter)

  return (
    <div className="grid__project">
      {filteredProjects.map((project) => (
        <Link
          key={project.id}
          to={`/projet/${project.id}`}  // ✅ lien corrigé pour correspondre au router
          onClick={handleClick}
        >
          <figure className="grid__project__card">
            <div className="grid__project__card-inner">
              <div className="grid__project__card-front">
                <img
                  className="grid__project__card-front-img"
                  src={project.cover}
                  alt={project.alt}
                />
                <h3 className="grid__project__card-front-title">
                  {project.title}
                </h3>
              </div>
              <figcaption className="grid__project__card-back">
                <h3 className="grid__project__card-back-title">
                  {project.title}
                </h3>
                <p className="grid__project__card-back-desc">
                  {project.briefDescription}
                </p>
                <p className="grid__project__card-back-info">
                  En savoir plus...
                </p>
              </figcaption>
            </div>
          </figure>
        </Link>
      ))}
    </div>
  )
}

export default ProjectsPage
