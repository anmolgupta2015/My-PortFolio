import {Container,Row ,Col ,Nav , Tab} from 'react-bootstrap'
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from '../assets/img/color-sharp2.png';
// import projImg1 from '../assets/img/project-img1.png';
// import projImg2 from '../assets/img/project-img2.png';
// import projImg3 from '../assets/img/project-img3.png';
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import Esummit from '../assets/img/Esummit.png'
import ImageAlchemy from '../assets/img/ImageAlchemy.jpg'
import Sorting from '../assets/img/Sorting.gif'

export const Projects = () => {
    const projects = [
        {
          title: "E-Summit'24 PEC",
          description: "Collaborated with a team to design and develop a comprehensive website for the college e-summit.",
          imgUrl: Esummit,
          link:"https://www.eicpec.in/",
        },
        {
          title: "DALL-E Clone",
          description: "Interactive Image Generating using Open-AI API and a community sharing platform to share images one may generate using creative thinking ",
          imgUrl: ImageAlchemy,
      
        },
        {
            title: "Sorting Visualizer",
            description: "Implemented a visual representation of popular sorting algorithms (e.g., Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort) using C++",
            imgUrl: Sorting,
           
          },
      ];

      return(
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                    <TrackVisibility>
                    {({isVisible})=>
                    <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                    <h2>Projects</h2>
                    {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                    
                    <Tab.Container id="projects-tabs" defaultActiveKey='first'>
                    <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                    <Nav.Item>
                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="third">Tab Three</Nav.Link>
                    </Nav.Item>
                    </Nav>
                    <Tab.Content  id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey='first'>
                            <Row>
                                {
                                    projects.map((project,index)=>{
                                        return(
                                            <ProjectCard key={index}{...project}/>
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey='second'>Work Is In Progress...</Tab.Pane>
                        <Tab.Pane eventKey='third'>Work Is In Progress...</Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                    </div>}
                    </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt='image1'/>
        </section>
      )
}