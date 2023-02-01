import React from "react";

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
        console.log("constructor " + this.props.name)
    }
     
    componentDidMount(){
        //API calls
        console.log('component did mount '+ this.props.name);
        this.timer = setInterval(()=>{
            console.log("Namaste OP")
        },1000);
    }
    componentDidUpdate(){
        console.log("component did update");
    }
    componentWillUnmount(){
        console.log("component will unmount")
        clearInterval(this.timer);
    }
    render(){
        console.log('render ' + this.props.name);
        return (
            <div>
                <h1>Profile Class Component</h1>
                <h3>Name is {this.props.name}</h3>
                <h4>Count is {this.state.count}</h4>
                <button onClick={() =>{
                    this.setState({
                        count: 1
                    })
                }}>SetCount</button>
            </div>
        )
        

    }

}
export default Profile