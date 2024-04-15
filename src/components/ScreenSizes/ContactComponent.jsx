import windowSize from "./windowSize";
import Contact from "../../pages/Contact";
import ContactMobile from "../../pages/ContactMobile";
const ContactComponent = () => {
  const [width] = windowSize();

  // Choose a breakpoint for switching between components
  const breakpoint = 768; // Example breakpoint

  return <div>{width > breakpoint ? <Contact /> : <ContactMobile />}</div>;
};

export default ContactComponent;
