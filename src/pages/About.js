

import resume from '../assets/files/Document.pdf'

const About = () => {

    return(
      <div className="contact-container">
        <h4>Victoria Vela</h4>
        <h5>E-mail: victoriavela@gmail.com</h5>
        <h5>Phone: 214-334-7890</h5>
        <h5>Click on below to download my resume</h5>
        <a href={resume} download target='_blank'>
          <button>resume</button>
        </a>
        {/* setup font awesome and include here */}
        <div className="logos">
        </div>
      </div>
    )
}

export default About;