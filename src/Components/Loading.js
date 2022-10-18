import React from "react";

function Loading() {
    return (
        <div className="loading">
            <h1>Loading</h1>
            <div>
                <div className="spinner-grow text-danger" role="status"></div>
                <div className="spinner-grow text-warning" role="status"></div>
                <div className="spinner-grow text-info" role="status"></div>
            </div>
        </div>
    )
}

export default Loading