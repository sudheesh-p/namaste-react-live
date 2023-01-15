import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer"

const Header = () => {
  return (
    <div>
      <h2>Namaste react component</h2>
      <h3>This is h3</h3>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <> 
    <Header />
    <Body />
    <Footer/>
  </>
);
