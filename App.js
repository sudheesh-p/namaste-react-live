import React from "react";
import ReactDOM from "react-dom/client";

// const heading = document.createElement("h1");
// heading.innerHTML = "Namste Javascript"
// const root = document.getElementById("root");
// root.appendChild(heading);

// const heading = React.createElement("h1", { id: "title" }, "Namaste Js");
// const heading1 = React.createElement("h2", { id: "title" }, "Heading 1");
// const heading2 = React.createElement("h3", { id: "title" }, "Heading 2");
// const container = React.createElement("div", { id: "container" }, [
//   heading,
//   heading1,
//   heading2,
// ]);

//const heading = <h1 id="header">Namate React expression</h1>; //jsx expression
const Header = () => {
  return (
    <div>
      <h2>Namaste react component</h2>
      <h3>This is h3</h3>
    </div>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
