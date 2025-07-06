import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
  {
    title: "Insurance Solution",
  description: "Involved in the development and maintenance of multi-platform insurance solutions as part of the Southeast Asia Regional Development Center, which centralizes systems and services for the region in Kuala Lumpur. Specifically supported the Philippines Operational Enterprise (OE), focusing on mobile application enhancements, and UI/UX enhancements.",
    imgUrl: projImg1,
  },
  {
    title: "ZTE IoT Innovation Challenge 2022",
    description: "Designed and developed an end-to-end IoT system for the ZTE IoT Innovation Challenge 2022. Integrated sensors, microcontrollers, and cloud platforms for real-time data collection and monitoring. Built automated workflows and dashboards, focusing on hardware-software integration and real-time device communication.",
    imgUrl: projImg2,
  },
  {
    title: "Industry-Linked Project",
    description: "Designed and developed an AI-powered forensic dental identification system as part of a final year project. The solution provides reliable second opinions and improves forensic odontology reporting through the application of deep learning.",
    imgUrl: projImg3,
  }
];


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Here are some of the projects I've worked on, each showcasing different technical areas from mobile development to IoT and embedded system integration and AI in health industry.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Insurance Solution</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">ZTE IoT Challenge</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Industry-based AI Project</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row className="justify-content-center">
                          <Col xs={12} md={6} lg={10} className="d-flex justify-content-center">
                            <ProjectCard
                              key={0}
                              {...projects[0]}
                            />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row className="justify-content-center">
                          <Col xs={12} md={6} lg={10} className="d-flex justify-content-center">
                            <ProjectCard
                              key={1}
                              {...projects[1]}
                            />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row className="justify-content-center">
                          <Col xs={12} md={6} lg={10} className="d-flex justify-content-center">
                            <ProjectCard
                              key={2}
                              {...projects[2]}
                            />
                          </Col>
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background Decoration" />
    </section>
  )
}

//  projects.map((project, index) => {
                          // return (
                          //   <ProjectCard
                          //     key={index}
                          //     {...project}
                          //     />