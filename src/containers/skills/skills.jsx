import ToolsGrid from '../../components/skills/tools'
import LanguagesGrid from '../../components/skills/languages'
import '../../sass/containers/_skills.scss'

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2 className="skills__title">Mes compétences</h2>
      <div className="skills__display">
        <div className="skills__tools image-theme">
          <h3 className="skills__tools-title">Logiciels</h3>
          <ToolsGrid />
        </div>
        <div className="skills__languages image-theme">
          <h3 className="skills__languages-title">Langages / Frameworks</h3>
          <LanguagesGrid />
        </div>
      </div>
    </section>
  )
}

export default Skills
