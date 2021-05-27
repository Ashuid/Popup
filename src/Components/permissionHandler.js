import React from "react";
import Popup from "./popup";

export default class PermissionHandler extends React.Component {
    constructor(props) {
        super(props);

        this.state = {perm: false};

        //Binding the method to the current object, since React has some dumb issues with sometimes forgetting which object a method belongs to
        this.checkPermission = this.checkPermission.bind(this);

        //Binding the method to the current object, since React has some dumb issues with sometimes forgetting which object a method belongs to
        this.getPermission = this.getPermission.bind(this);
    }

    //Lifecycle hook to check for permission as soon as component is loaded
    componentDidMount() {
        if (this.checkPermission()) {
            this.setState({perm: true});
        } else {
            this.getPermission(this);
        }
        
    }

    //Requests the user for permission to send notifications
    getPermission() {
        Notification.requestPermission();
    }

    //Checks if the user has already granted permission to send notifications
    checkPermission() {
        if(!("Notification" in window)) {
            alert("Your current browser / Version does not support notifications.");
            return false;
        } else if (Notification.permission !== "denied") {
            return true;
        }
    }

    //Default React render, which renders based on current state
    render() {
        if(this.state.perm) {
            return (
                <div>
                    <h1>Your browser have permission to send notifications!</h1>
                    <br></br>
                    <h2>Please press the button to test.</h2>
                    <hr></hr>
                    <Popup></Popup>
                </div>
            )
        } else {
            return (
                <div>
                    <button onClick={this.getPermission}>Request Permission</button>
                </div>
            )
        }
        
    }
}