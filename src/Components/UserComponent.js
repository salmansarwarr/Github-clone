import React, { Component } from "react";
import Loading from "./Loading";

class UserComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            followers: "",
            following: "",
            repositories: "",
            followersUrl: ``,
            followingUrl: ``,
            repositoriesUrl: ``,
            avatar: '',
            isLoading: true
        }
    }

    componentDidMount() {
        fetch(`https://api.github.com/users/${this.props.username}`)
        .then((response) => response.json())
        .then((data) => {
            this.setState({
                avatar: data.avatar_url,
                followers: data.followers,
                following: data.following,
                repositories: data.public_repos,
                followersUrl: `https://github.com/${this.props.username}?tab=followers`,
                followingUrl: `https://github.com/${this.props.username}?tab=following`,
                repositoriesUrl: `https://github.com/${this.props.username}?tab=repositories`,
                userPage: true,
                isLoading: false
            })
        })
    }

    render() {
        return(
            <div>
                {
                this.state.isLoading ? 
                    <Loading/> :
                    <div className="front-page user">
                    <div className="card m-auto " style={{ width: "20rem" }}>
                        <img 
                          src={this.state.avatar}
                          className="card-img-top mt-3"
                          alt="..."
                        />
                        <div className="card-body">
                            <h1>{this.state.name}</h1>
                            <p>Followers <span>: {this.state.followers}</span></p>
                            <p>Following <span>: {this.state.following}</span></p>
                            <p>Repositories <span>: {this.state.repositories}</span></p>
                        </div>
                    </div>
                    <div className="buttons"  style={{ width: "30rem" }}>
                        <button type="button" className="btn btn-danger btn-md">
                            <a href={this.state.followersUrl} target="_blank">
                                Followers 
                                <span className="badge">{this.state.followers}</span>
                            </a>
                        </button>
                        <a href={this.state.followingUrl} target="_blank">
                            <button type="button" className="btn btn-primary btn-md">
                                Following
                                <span className="badge badge-light">{this.state.following}</span>    
                            </button>
                        </a>
                        <a href={this.state.repositoriesUrl} target="_blank">
                            <button type="button" className="btn btn-info btn-warning">
                                Repositories
                                <span className="badge">{this.state.repositories}</span>
                            </button>
                        </a>
                    </div>
                    <button type="button" className="btn btn-outline-light quit" onClick={this.props.quit}>Quit</button>
                </div>
                }
            </div>
        )
    }
}

export default UserComponent;