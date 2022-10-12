const Tech = () => {

const front = ['HTML', 'CSS', 'JavaScript', 'React.js']

const back = ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Python']

const version = ['Git', 'GitHub']


    return(
        <div class='tech-container'>
            <div class='tech-title'>
                <h4>Technologies</h4>
            </div>
            <div class="sub-container">
                <div class='front-end'>
                    <h5>Front End</h5>
                    <ul className='list-item'> 
                        {front.map((tech)=> {
                            return(
                                <li>{tech}</li>
                            )
                        })}          
                    </ul>
                </div>
                <div class='back-end'>
                    <h5>Back End</h5>
                    <ul className='list-item'> 
                        {back.map((tech)=> {
                            return(
                                <li>{tech}</li>
                            )
                        })}          
                    </ul>
                </div>
                <div class='version'>
                    <h5>Version Control</h5>
                    <ul className='list-item'> 
                        {version.map((tech)=> {
                            return(
                                <li>{tech}</li>
                            )
                        })}          
                    </ul>
                </div>
            </div>
           
        </div>
    )
}

export default Tech;

