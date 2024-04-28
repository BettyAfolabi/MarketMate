import windowSize from "./windowSize";
import About from "../../pages/About";
import AboutMobile from "../../pages/AboutMobile";
const AboutComponent = () => {
  const [width] = windowSize();

 const breakpoint = 667; 

  return <div>{width > breakpoint ? <About /> : <AboutMobile />}</div>;
};

export default AboutComponent;
