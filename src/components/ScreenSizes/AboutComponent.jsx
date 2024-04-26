import windowSize from "./windowSize";
import About from "../../pages/About";
import AboutMobile from "../../pages/AboutMobile";
const AboutComponent = () => {
  const [width] = windowSize();

  // Choose a breakpoint for switching between components
  const breakpoint = 768; // Example breakpoint

  return <div>{width > breakpoint ? <About /> : <AboutMobile />}</div>;
};

export default AboutComponent;
