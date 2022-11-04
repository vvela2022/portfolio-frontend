
import Tech from '../components/Tech'
import Footer from '../components/Footer'

const Home = (props) => {
    return (
    <div class="home-container">
        <div class="information">
            <div class="welcome-container">
                <div class="hello">
                    <h1 class="home-title">Victoria Vela</h1>
                    <h4 class="home-subtitle">Software Engineer</h4>
                </div>
                <div class="pic-info">
                    <div class="profile-pic">
                        <img class="profile-img" src="https://i.imgur.com/35BIyXH.jpg?2" alt="Victoria Vela"></img>
                    </div>
                    <div class="info-container">
                        <h4 class="home-headline">A Bit About Me</h4>
                        <p class="home-text">I am a software engineer with a 9 year background in consumer goods sales who is energized by collaborating with team members to solve complex problems. My passion for problem-solving and continued learning led me to software engineering where I am able to utilize my creativity and preivous experience to build great software. I have a strong passion for improving user experience and am energized by delivering technology based solutions. In my spare-time I enjoy spending time in nature, reading, and playing board games with my family. </p>
                    </div>

                </div>
                
            </div>
        </div> 
     <Tech />
     <Footer/>
    </div>
    )
}

export default Home;