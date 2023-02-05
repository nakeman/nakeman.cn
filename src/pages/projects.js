import React,{useState,useEffect} from 'react'
// import PageLayout from "../components/PageLayout"
import Seo from "../components/Seo"
import { projectsList } from '../common/projectdata'
import { graphql, Link } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"

const ProjectsPage = ({data}) =>{
  const [repos, setRepos] = useState([])
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('https://api.github.com/users/nakeman/repos?per_page=100');
        const repodata = await res.json();
        setRepos(repodata);
      }      
      catch(err)
      {
        console.log(err)
      }
    }
    fetchData();

  }, [])
      
      return (
          <section className="projects container mx-auto px-4">
            <div className="mt-2 md:mt-10">
              <section className='header flex justify-end'>
                  <h1 className="mb-3 text-5xl font-bold">项目</h1>
              </section>
              <ProjectList data={projectsList} repos={repos} images={data.allFile.nodes}/>
            </div>
            
          </section>
      )
}

export const Head = ({data}) => <Seo title="nakeman github repoes" />
export default ProjectsPage

const ProjectList = ({data,repos,images}) => {
  return ( 
    <div className="projectlist grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      {
        data.map( item => {
          return (
            <ProjectCard pdata={item} repos={repos} >
              {getProjectImage(images,item.image)}
            </ProjectCard>
            )
        })
      } 
    </div>
   );
}
const getProjectImage = (images,imageurl) =>{
  let imagefile = imageurl?imageurl:'nopic.jpeg';
  var regexp = new RegExp(imagefile,"i");
  const newimages = images.filter(item => regexp.test(item.relativePath))[0];
  return <GatsbyImage image={newimages.childImageSharp.gatsbyImageData} /> 
}
 
const ProjectCard = ({pdata,repos,children}) => {
  return ( 
    <div className="card flex flex-col rounded bg-gray-100 p-4 m-1">
      <div className=" relative ml-5">
          <div className="absolute right-1 top-1 stars ">
                    {repos.find((repo) => repo.name === pdata.name) && (
                      <div className="star text-amber-500 flex items-center gap-1 font-mono font-thin ">
                        <a
                          href={`https://github.com/nakeman/${pdata.name}/stargazers`}
                          className="mt-1 text-xs  text-gray-500 hover:text-gray-800 hover:underline hover:decoration-from-font"
                        >
                          {Number(
                            repos.find((repo) => repo.name === pdata.name)
                              .stargazers_count
                          ).toLocaleString()}
                        </a>
                        <StarIcon />
                      </div>
                    )} 
          </div>
          <div>
            <time className="font-mono font-thin text-xs text-gray-500">{pdata.date}</time>
          </div>
          <div className='flex justify-center'>{children}</div>
          
        <a href={pdata.source} className="prjectname text-xl font-normal"><h3>{pdata.name}</h3> </a>
        <p className='description '> {pdata.description_cn} </p>
        <p className='description'> {pdata.description} </p>
      </div>
      <div className="link ml-3 p-2 mx-5 mt-auto">
        { pdata.demo &&( <a href={pdata.demo} target='_blank' rel="noreferrer">Demo</a>)}
        { pdata.document &&( <Link to={pdata.document} target='_blank' rel="noreferrer">相关文章</Link> )}
        { pdata.source &&( <a href={pdata.source} target='_blank' rel="noreferrer">源码</a>)}
      </div>
      
    </div>
   );
}
const StarIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      style={{ width: '1rem', height: '1rem', fill: 'currentColor' }}
    >
      <path
        fillRule="evenodd"
        d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
      ></path>
    </svg>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    allFile(filter: {absolutePath: {regex: "/project/"}}) {
      totalCount
      nodes {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
        relativePath
      }
    }
  }
`