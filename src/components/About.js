import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About page</h1>
      <h3>This is react live course</h3>
      <Outlet/>
    </div>
    
  );
};

export default About;
