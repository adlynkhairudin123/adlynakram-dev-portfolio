import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <br />
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Mobile Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>IoT Systems</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Artificial Intelligence</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Embedded Systems</h5>
                </div>
              </Carousel>
              <br />
              <p>               
                🔧 <strong>Core Skills:</strong><br />
                • Mobile: Typescript, Javascript, html, scss, css, Firebase, Gradle<br />
                • AI & IoT: Python, TensorFlow, Node-Red, MQTT, Arduino<br />
                • Tools: Git CLI, GNS3, Wireshark, ServiceNow, JIRA<br />
                • Processes: REST API Integration, Deployment, Agile, SDLC<br /><br />

                🌍 <strong>Passion:</strong><br />
                Building purposeful tech that combines <strong>AI, IoT, and mobile solutions</strong> with real-world impact, especially in smart environments and social innovation.<br /><br />

                🤝 <strong>Let’s Connect!</strong><br />
                Always open to <strong>collaborations, learning, and conversation about tech ideas</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
