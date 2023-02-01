import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor Parent');
  }

  componentDidMount(){
    console.log('Component did mount parent');
  }

  render() {
    console.log("render parent");
    return (
      <div>
        <h1>About page</h1>
        <h3>This is react live course</h3>
        {/* <Outlet/> */}
        <Profile name={"First Child"} />
        <Profile name={"Secound Child"} />
      </div>
    );
  }
}

export default About;
