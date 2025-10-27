import { useParams } from 'react-router-dom'
import Projects from '../../data/projects.json'
import TagStyle from '../../utils/style/tagstyle'
import '../../sass/components/_tag.scss'

const Tag = () => {
  const { id } = useParams()
  const project = Projects.find((project) => project.id === id)

  return (
    <div>
      <ul className="tags">
        <TagStyle />
        {project.tags.map((tag, index) => (
          <li key={index} className="tag theme-color">
            {tag}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tag
