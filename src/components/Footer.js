import resume from '../assets/files/Resume-VictoriaVela.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer = () => {
    return(
        <div className="footer-container">
          <h3>Let's get in touch</h3>
          <div className="contact-container">
            <a href="https://github.com/vvela2022">
              Github 
              <i class="fa-brands fa-github fa-fw"></i>
            </a>
            <a href="https://www.linkedin.com/in/victoria-vela1/">LinkedIn  
              <i class="fa-brands fa-linkedin icon fa-fw"></i>
            </a>
            <a href="mailto:victoriavela01@gmail.com">victoriavela01@gmail.com
              <i class="fa-solid fa-envelope fa-fw"></i>
            </a>
            <a href={resume} download target='_blank'>
            Resume  
              <i class="fa-solid fa-file-arrow-down fa-fw"></i>
            </a>
          </div>
        </div>
    )
}

export default Footer;