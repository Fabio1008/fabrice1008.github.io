import { useParams } from 'react-router-dom'
import { useTheme } from '../../utils/hooks/index'
import Error from '../error/index'  // <-- chemin corrigé
import ButtonStyle from '../../utils/style/boutonstyle'
import Projects from '../../data/projects.json'
import Carrousel from '../../containers/carrousel/carrousel'
import Tag from '../../components/tag/tag'
import DarkArrow from '../../assets/icones/darkarrow.svg'
import LightArrow from '../../assets/icones/lightarrow.svg'
import '../../sass/pages/_project.scss'


const Project = () => {
  const { darkMode } = useTheme()
  const { id } = useParams()
  const project = Projects.find((p) => p.id === id)

  if (!project) return <Error />

  return (
    <main className="project">
      <div className="project__header">
        <a href="/projets">
          <img
            className="project__header-arrow"
            src={darkMode ? DarkArrow : LightArrow}
            alt="flèche de retour page home"
          />
        </a>
        <h1 className="project__header-title">{project.title}</h1>
      </div>

      <section className="project__section">
        <div className="project__section-description">
          <h2><u>Le projet :</u></h2>
          <p>{project.description}</p>

          <h3><u>La mission :</u></h3>
          <p>{project.mission}</p>

          <h3><u>Les compétences acquises :</u></h3>
          {project.competences.map((c, i) => (
            <li key={i} className="project__section-description-competences">
              {c}
            </li>
          ))}

          <Tag />

          <h3>
            {project.site
              ? 'Retrouvez le travail réalisé et la démonstration du site dans les liens ci-dessous :'
              : 'Retrouvez le travail réalisé dans le lien ci-dessous :'}
          </h3>
          <div className="project__section-description-links">
            <ButtonStyle />
            <a href={project.github} target="_blank" rel="noreferrer">
              <button className="project__button theme-color">Code GitHub</button>
            </a>
            {project.site && (
              <a href={project.site} target="_blank" rel="noreferrer">
                <button className="project__button theme-color">Démo du site</button>
              </a>
            )}
          </div>
        </div>

        <div className="project__section-carrousel">
          <Carrousel pictures={project.pictures} />
        </div>
      </section>
    </main>
  )
}

export default Project
