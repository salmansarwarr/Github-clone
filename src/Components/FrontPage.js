import React from "react";

function FrontPage(props) {
    return (
        <div className="front-page row align-items-center justify-content-center">
            <div className="card m-auto flex" style={{ width: "20rem" }}>
                <img 
                    src="https://pngimg.com/uploads/github/github_PNG83.png"
                    className="card-img-top mt-3"
                    alt="..." />
                <div className="card-body">
                    <h1>GitHub</h1>
                    <form onSubmit={props.submit}>
                        <input
                            onChange={props.change}
                            className="form-control" 
                            type="text" 
                            placeholder="username"/>
                        <button
                            disabled={props.username == ""}
                            type="submit"
                            className="btn btn-secondary mt-2">
                                Check user details
                        </button>
                    </form>
                </div>
            </div>
            <p className="mt-2">GitHub brings together world's largest programmers community</p>
        </div>
    )
}

export default FrontPage