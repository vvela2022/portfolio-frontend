import resume from '../assets/files/Document.pdf'


const Footer = () => {
    return(
        <div className="footer-container">
        <h3>Let's get in touch</h3>
        <a href="https://github.com/vvela2022">Github</a>
        <a href="https://www.linkedin.com/in/victoria-vela1/">LinkedIn</a>
        <a href="mailto:victoriavela01@gmail.com">victoriavela01@gmail.com</a>
        <a href={resume} download target='_blank'>
          <button>Resume</button>
        </a>
        </div>
    )
}

export default Footer;