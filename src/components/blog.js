import { Component } from "react";
import blogComments from "../data/comments.json";
import { Comment } from "./comment";


export class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {comments: blogComments.filter((blogComment) => blogComment.blogId === this.props.blog.id)}
    }

    render() {
        return (
            <div className="card text-white bg-dark mb-3">
                <div className="card-header">
                </div>
                <div className="card-body">
                    <h5 className="card-title">{this.props.blog.title}</h5>
                    <br/>
                    <p className="card-text">{this.props.blog.description}</p>
                    <Comment blogComments={this.state.comments}/>
                </div>
                
            </div>
        );

    }
}