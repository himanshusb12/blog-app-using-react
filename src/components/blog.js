import { Component } from "react";
import { Comment } from "./comment";


export class Blog extends Component {    
    constructor(props) {
        super(props);
        this.state = {comments: []}
    }

    async componentDidMount() {
        await fetch('http://localhost:3001/api/comments', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
        }).then(response => response.json())
        .then(data => {
            this.setState({comments: data.filter((blogComment) => 
                blogComment.blogId === this.props.blog.id)});
        })
        .catch(error => window.alert(`Error occured while reading comments json - ${error}`));
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