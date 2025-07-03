// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";

// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         'portfolio_ToConnect', // replace with your Service ID
//         'template_y35uhad', // replace with your Template ID
//         form.current,
//         'FKyhwKNI3g-zkDho0'   // replace with your Public Key
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           alert("Message Sent Successfully!");
//         },
//         (error) => {
//           console.log(error.text);
//           alert("Error sending message. Try again.");
//         }
//       );
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <input type="text" name="name" placeholder="Name" required />
//       <input type="email" name="email" placeholder="Email" required />
//       <textarea name="message" placeholder="Message" required />
//       <button type="submit">Send</button>
//     </form>
//   );
// };

// export default Contact;
