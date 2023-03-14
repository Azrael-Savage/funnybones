import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/projectmanager.png";
import projImg2 from "../assets/img/D&D.png";
import projImg3 from "../assets/img/jate.png";
import notetakerIMG from "../assets/img/notetaker.png"
import workdayplannerIMG from "../assets/img/workdayplanner.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import comingSoonIMG from "../assets/img/comingsoon.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Project Manager",
      description: "Project Manager",
      imgUrl: projImg1,
      projectUrl: "https://project3-projectmanagement.herokuapp.com/"
    },
    {
      title: "D&D Character Generator",
      description: "Character Generator",
      imgUrl: projImg2,
      projectUrl: "https://dndcharactergenerator.herokuapp.com/"
    },
    {
      title: "J.A.T.E(Just Another Tex Editor",
      description: "Design & Development(PWA)",
      imgUrl: projImg3,
      projectUrl: "https://the-jate-anator.herokuapp.com/"
    },
    {
      title: "Note Taker",
      description: "Note Taker",
      imgUrl: notetakerIMG,
      projectUrl: "https://c11note-taker.herokuapp.com/"
    },
    {
      title: "Work Day Planner",
      description: "Work Day Planner",
      imgUrl: workdayplannerIMG,
      projectUrl: "https://azrael-savage.github.io/Week-5-Planner/"
    },
    {
      title: "Coming Soon",
      description: "Coming Soon",
      imgUrl: comingSoonIMG,
      projectUrl: ""
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>"Discover how my portfolio showcases my unique blend of creativity, technical proficiency, and problem-solving skills that can add value to your organization.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>More projects coming soon...</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>More projects coming soon...</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}