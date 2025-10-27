import Languages from '../../data/languages.json'
import '../../sass/components/_languages.scss'

const LanguagesGrid = () => {
  return (
    <div className="skills__languages-grid">
      {Languages &&
        Languages.map((language) => (
          <div className="languages" key={language.id}>
            <img src={language.image} alt={language.alt} />
            <p>{language.title}</p>
          </div>
        ))}
    </div>
  )
}

export default LanguagesGrid
