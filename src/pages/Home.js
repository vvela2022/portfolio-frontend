
import Tech from '../components/Tech'
import Footer from '../components/Footer'

const Home = (props) => {
    return (
    <div class="home-container">
        <div class="hello">
            <h1 class="home-title">Victoria Vela</h1>
            <h4 class="home-subtitle">Software Engineer</h4>
        </div>
        <div class="container text-center information">
            <div class="row welcome-container">
                <div class="col profile-pic">
                    <img class="profile-img" src="https://i.imgur.com/35BIyXH.jpg?2" alt="Victoria Vela"></img>
                </div>
                <div class="col info-container">
                    <h4 class="home-headline">A Bit About Me</h4>
                    <p class="home-text">I’m a software engineer with a background in sales who is energized by collaborating with team members to solve complex problems.
I have a strong passion for improving user experience and am energized by delivering technology based solutions.</p>
                </div>
            </div>
        </div> 
     <Tech />
     <Footer/>
    </div>
    )
}

export default Home;