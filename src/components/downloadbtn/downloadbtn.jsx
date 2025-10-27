import Button from '../Button/Button'
import pdf from '../../assets/icones/pdf.svg'
import cv from '../../assets/download/cv.pdf'

const DownloadBtn = () => (
  <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '15px', width: '100%' }}>
  <a
    href={cv}
    target="_blank"
    rel="noreferrer"
    aria-label="Télécharger mon CV"
    aria-roledescription="Document PDF"
    title="Télécharger mon CV"
    style={{ textDecoration: 'none' }}
  >
    <Button size="large" variant="primary">
      Télécharger mon CV
      <img
        src={pdf}
        alt="Icône document PDF"
        style={{ width: '22px', height: '22px', marginLeft: '8px' }}
      />
    </Button>
  </a>
</div>

)

export default DownloadBtn

