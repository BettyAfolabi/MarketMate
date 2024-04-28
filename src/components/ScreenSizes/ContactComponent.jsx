import windowSize from "./windowSize";
import Contact from "../../pages/Contact";
import ContactMobile from "../../pages/ContactMobile";
const ContactComponent = () => {
  const [width] = windowSize();

  
  const breakpoint = 768; 

  return <div>{width > breakpoint ? <Contact /> : <ContactMobile />}</div>;
};

export default ContactComponent;
