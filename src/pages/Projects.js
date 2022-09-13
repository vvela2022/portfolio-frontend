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
    return projects.map((project) => {
        return(
            <div>
            <h1>{project.name}</h1>
            <img src={project.image} />
            <a href={project.git}>
              <button>Github</button>
            </a>
            <a href={project.live}>
              <button>live site</button>
            </a>
          </div>       
        )
        });
  };

  return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;