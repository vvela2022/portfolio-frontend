import {Link} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import resume from '../assets/files/Resume-VictoriaVela.pdf'

const Header = (props) => {

    return(
    
        <header class='header-container'>
            <nav class="navbar navbar-expand bg-light">
                <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <Link to='/' class="nav-link active" aria-current="page">About</Link>
                        </li>
                        <li class="nav-item">
                        <Link to='/projects' class="nav-link active" aria-current="page">Projects</Link>
                        </li>
                        <li class="nav-item"> 
                            <a href={resume} download target='_blank' class="nav-link active" aria-current="page">Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
        </header>
    )
}

export default Header;