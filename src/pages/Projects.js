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
      return (<div class="col projects-container" >
        <h1>{project.name}</h1>
      <img class="w-100 p-3" src={project.image} />
     <a href={project.git}>
       <button>Github</button>
     </a>
     <a href={project.live}>
       <button>live site</button>
      </a>
        </div>) 
    })
        return(
            <div class="container text-center">
             <div class="row">
                {data}
              </div>
            </div>       
            
        )
        };

  return projects ? loaded() : <div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>;;
}

export default Projects;