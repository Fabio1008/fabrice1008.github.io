import Tools from '../../data/tools.json'
import '../../sass/components/_tools.scss'

const ToolsGrid = () => {
  return (
    <div className="skills__tools-grid">
      {Tools &&
        Tools.map((tool) => (
          <div className="tools" key={tool.id}>
            <img src={tool.image} alt={tool.alt} />
            <p>{tool.title}</p>
          </div>
        ))}
    </div>
  )
}

export default ToolsGrid
