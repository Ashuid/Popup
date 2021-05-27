import React from "react";

export default class Popup extends React.Component {
    constructor(props) {
        super(props);

        //Binding the method to the current object, since React has some dumb issues with sometimes forgetting which object a method belongs to
        this.sendNotification = this.sendNotification.bind(this);
    }

    //Sends a notification with provided options
    sendNotification() {
        var body = "This is a push notification, and oh boy is it being pushed.";
        var notef = new Notification("Push Notification From Tester App", {body: body});
    }

    //Standar React render
    render() {
        return (
        <div>
            <button onClick={this.sendNotification}>Send Notification Now</button>
            <hr></hr>
        </div>
        );
    }
}
