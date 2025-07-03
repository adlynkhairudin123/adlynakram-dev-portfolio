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
              <p>
                🚀 What I’ve Done:
                <br></br>
                Led and contributed to impactful projects in Artificial Intelligence, Deep Learning, and IoT, including my Final Year Project where I applied deep learning for forensic dental identification using radiographic images.
                <br></br>
                Developed an IoT-based environmental monitoring system during the ZTE IoT Innovation Challenge, where we creatively combined sensors to overcome hardware limitations—earning us the First Runner-Up award.
                <br></br>
                Gained professional experience at MARii, working in IT support, device troubleshooting, cybersecurity policy, and backend development using Firebase.
                <br></br>
                🔧 My Skillset Includes:
                💻 Python, C++, Java, XML
                📱 Android Studio, Firebase
                🌐 AI/ML frameworks (TensorFlow, PyTorch), IoT systems, REST APIs
                🛠️ Tools like GNS3, Wireshark, and Arduino hardware platforms
                <br></br>
                🌍 What I’m Passionate About:
                Bringing together innovative technologies with purpose—especially in areas like AI for technologies that make everyday lives better, smart environments, and education tech. I’m especially drawn to projects aligned with Sustainable Development Goals (SDGs) that drive social and environmental impact.
                <br></br>
                🤝 Let’s Connect!<br></br>
                If you’re working on something meaningful or just want to chat about tech, AI, or collaboration opportunities—I'm just a message away.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Brand Identity</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Logo Design</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
