
const About = () => {

  const onButtonClick = () =>
    fetch('resume1.pdf').then(response => {
      response.blob().then(blob=> {
        let fileURL = window.URL.createObjectURL(blob);

        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'resume1.pdf';
        alink.click();
      })
    })

    return(
      <div className="contact-container">
        <h4>Victoria Vela</h4>
        <h5>E-mail: victoriavela@gmail.com</h5>
        <h5>Phone: 214-334-7890</h5>
        <h5>Click on below to download my resume</h5>
        <button onClick={onButtonClick}>
          Resume
        </button>
        {/* setup font awesome and include here */}
        <div className="logos">
        </div>
      </div>
    )
}

export default About;