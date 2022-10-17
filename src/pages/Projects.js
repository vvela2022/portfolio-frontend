import {useState, useEffect} from 'react'


const Projects = (props) => {
//create state to hold projects
const [projects, setProjects] = useState(null)

//create function to make api call

const getProjectsData = async () => {
    const response = await fetch(props.URL + "projects")
    const data = await response.json();
    setProjects(data)
}
console.log(props.URL)
  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => {
    getProjectsData()
     // eslint-disable-next-line
  }, [])

  console.log(projects)

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    let data = projects.map((project)=>{
      return (
      <div class="col projects-container">
        <div class="card card-container">
          <img class= " card-img-top w-100 p-3 proj-img" src={project.image} />
          <div class="card-body">
            <h4 class="card-title title">{project.name}</h4>
            <p class="card-text text">{project.description}</p>
            <p class="card-text text"> <strong>Technologies: </strong> {project.technologies}</p>
            <a href={project.git} class="hub">
              Github
            </a>
            <a href={project.live} class="hub">
              Live Site
            </a>
          </div>
        </div>
      </div>
        ) 
    })
        return(
          <div class="project-header">
            <h2 class="project-title">Featured Projects</h2>
            <div class="container text-center">
             <div class="row">
                {data}
              </div>
            </div>  
          </div>
               
            
        )
        };

  return projects ? loaded() : <div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>;;
}

export default Projects;