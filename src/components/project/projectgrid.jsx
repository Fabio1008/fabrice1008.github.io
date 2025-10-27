import { useState } from 'react';
import { Link } from 'react-router-dom'
import Projects from '../../data/projects.json'
import '../../sass/components/_projectgrid.scss'

const ProjectsPage = () => {
  const [filter, setFilter] = useState();

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  return (
    <div className="projectsGrid__container">
      <Filter onFilterChange={handleFilterChange} />
      <ProjectsGrid filter={filter} />
    </div>
  );
};

const Filter = ({ onFilterChange }) => {
  const [selectClicked, setSelectClicked] = useState(false);

  const handleFilterSelect = (e) => {
    onFilterChange(e.target.value);
    setSelectClicked(false); // Réinitialiser l'état après le changement
  };

  const handleSelectClick = () => {
    setSelectClicked(true);
  };

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

const ProjectsGrid = ({filter}) => {
  // Gère le problème de la position en milieu de page de la page Home vers la page du projet
  const handleClick = () => {
    // Remonter vers le haut avant la navigation
    window.scrollTo(0, 0)
  }
  return filter === undefined ||
  filter === null ||
  filter === "Tout" ? (
    <div className="grid__project">
      {Projects &&
        Projects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            onClick={handleClick}
          >
            <figure className="grid__project__card" key={project.id}>
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
  ) : (
    <div className="grid__project">
      {Projects &&
        Projects
          .filter((project) => project.category === filter)
          .map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            onClick={handleClick}
          >
            <figure className="grid__project__card" key={project.id}>
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
