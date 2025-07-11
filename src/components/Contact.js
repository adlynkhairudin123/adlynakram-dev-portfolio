import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from 'emailjs-com';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = (e) => {
  e.preventDefault();

  emailjs.sendForm('portfolio_ToConnect', 'template_y35uhad', e.target, 'FKyhwKNI3g-zkDho0')
    .then((result) => {
        console.log(result.text);
        setStatus({ success: true, message: "Message sent successfully!" });
        setFormDetails(formInitialDetails);
    }, (error) => {
        console.log(error.text);
        setStatus({ success: false, message: "Something went wrong. Try again later." });
    });
};

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  
  //   // Simple validation
  //   const { firstName, lastName, email, phone, message } = formDetails;
  //   if (!firstName || !lastName || !email || !phone || !message) {
  //     setStatus({ success: false, message: "Please fill in all the fields." });
  //     return;
  //   }
  
  //   // Optional: Email format check
  //   const emailRegex = /\S+@\S+\.\S+/;
  //   if (!emailRegex.test(email)) {
  //     setStatus({ success: false, message: "Please enter a valid email." });
  //     return;
  //   }
  
  //   setButtonText("Sending...");
  //   try {
  //     let response = await fetch("http://localhost:5000/contact", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json;charset=utf-8",
  //       },
  //       body: JSON.stringify(formDetails),
  //     });
  
  //     setButtonText("Send");
  //     let result = await response.json();
  //     setFormDetails(formInitialDetails);
  
  //     if (result.code === 200) {
  //       setStatus({ success: true, message: "Message sent successfully!" });
  //     } else {
  //       setStatus({ success: false, message: "Something went wrong. Try again later." });
  //     }
  //   } catch (err) {
  //     setStatus({ success: false, message: "Network error. Try again later." });
  //     setButtonText("Send");
  //   }
  // };
  

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="firstName" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="lastName" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" name="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" name="phone" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" name="message" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
