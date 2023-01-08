import React from "react";
import ReactDOM from "react-dom/client";
import "/header.css"
const Headercomponent = () => {
    return(
        <div>
            <div className="topnav">
                <a className="active">Home</a>
                <a>Contact</a>
                <a>About</a>
                <input type="text" placeholder="Search.."/>
            </div>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Headercomponent />);