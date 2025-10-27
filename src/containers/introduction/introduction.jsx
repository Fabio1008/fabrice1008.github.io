import { useTheme } from '../../utils/hooks/index'
import DownloadBtn from '../../components/downloadbtn/downloadbtn'
import MaPhoto from '../../assets/photo/moi.webp'
import GitHub from '../../assets/icones/github.png'
import DarkGitHub from '../../assets/icones/darkgithub.png'
import LinkedIn from '../../assets/icones/linkedin.png'
import DarkLinkedIn from '../../assets/icones/darklinkedin.png'
import Twitter from '../../assets/icones/twitter.png'
import DarkTwitter from '../../assets/icones/darktwitter.png'
import ImageStyle from '../../utils/style/imagestyle'
import '../../sass/containers/_introduction.scss'

const Introduction = () => {
  const { darkMode } = useTheme()

  return (
    <section className="intro">
      <h2 id="a-propos" className="intro__title">
        À propos
      </h2>

      <div className="intro__desc">
        <p>
          Passionné par les nouvelles technologies, j'ai choisi de me
          reconvertir professionnellement après des années passées dans le sport et la logistique. 
        </p>

        <p>
          Afin de me développer dans le domaine du développement web, j’ai
          intégré la formation certifiante intégrateur web niveau Bac +2
          d’OpenClassrooms au cours de laquelle j’ai acquis des compétences
          solides en HTML, CSS, JavaScript et React.
        </p>

        <p>
          Je suis très enthousiaste à l’idée de découvrir de nouvelles
          opportunités et développer de nouvelles compétences dans le domaine du
          développement web tout en perfectionnant celles déjà acquises.
        </p>

        {/* Liens vers les réseaux */}
        <div className="intro__desc-liens">
          <a href="https://github.com/Fabio1008" target="blank" rel="noreferrer">
            <img
              src={darkMode ? DarkGitHub : GitHub}
              alt="Lien vers mon profil Github"
            />
          </a>

          <a href="https://www.linkedin.com/in/amonk%C3%A9-mongba-739078a9/" target="blank" rel="noreferrer">
            <img
              src={darkMode ? DarkLinkedIn : LinkedIn}
              alt="Lien vers mon profil LinkedIn"
            />
          </a>

          <a href="https://x.com/FMongba" target="blank" rel="noreferrer">
            <img
              src={darkMode ? DarkTwitter : Twitter}
              alt="Lien vers mon profil Twitter"
            />
          </a>
        </div>

        {/* Bouton de téléchargement du CV */}
        <DownloadBtn />
      </div>

      {/* Photo + nom */}
      <div className="intro__photo">
        <ImageStyle />
        <img
          className="image-theme"
          src={MaPhoto}
          alt="Portrait de Fabrice MONGBA"
        />
        <h3>Fabrice MONGBA</h3>
        <h3>Développeur front-end</h3>
      </div>
    </section>
  )
}

export default Introduction

