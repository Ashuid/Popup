import React from "react";
import Popup from "./popup";

export default class PermissionHandler extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.getPermission();

    }

    getPermission() {
        if(!("Notification" in window)) {
            alert("Your current browser / Version does not support notifications.");
        } else if (Notification.permission !== "denied") {
            Notification.requestPermission().then(function(permission) {
                if(permission === "granted") {
                    var note = new Notification("Test");
                }
            });
        }
    }

    render() {
        if(this.permission) {
            return (
                <div>
                    <h1>You have granted permission to send notifications to this browser!</h1>
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