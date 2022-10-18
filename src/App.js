import React, { Component } from "react";
import FrontPage from "./Components/FrontPage";
import UserComponent from "./Components/UserComponent";
import Loading from "./Components/Loading";
import Quit from "./Components/Quit";

class App extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            frontPage: true,
            userPage: false,
            quitPage: false,
        }
        this.handleFrontPageSubmit = this.handleFrontPageSubmit.bind(this);
        this.handleFrontPageChange = this.handleFrontPageChange.bind(this);
        this.handleQuit = this.handleQuit.bind(this)
    }

    handleFrontPageChange(event) {
        this.setState({
          username: event.target.value  
        })
    }

    handleFrontPageSubmit() {
        this.setState({
            frontPage: false,
            userPage: true
        }) 
    }

    handleQuit() {
        this.setState({
            userPage: false,
            quit: true
        })
    }

    render() {
        return(
            <div>
                {this.state.frontPage ?
                    <FrontPage
                      submit={this.handleFrontPageSubmit}
                      change={this.handleFrontPageChange}
                      username={this.state.username}
                    /> : 
                this.state.userPage ?
                    <UserComponent
                      username={this.state.username}
                      quit={this.handleQuit}
                      quitLoading={this.quitLoading}
                    /> : 
                this.state.quit ?
                    <Quit/> : null
                }
            </div>
        )
    }
}

export default App