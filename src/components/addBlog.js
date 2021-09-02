import { Component, createRef } from "react";


export class AddBlog extends Component {
    constructor(props) {
        super(props);
        this.blogId = createRef();
        this.blogTitle = createRef();
        this.blogDesc = createRef();

        this.updateBlogs = this.updateBlogs.bind(this);
    }

    updateBlogs() {
        const blog = {'id': parseInt(this.blogId.current.value), 'title': this.blogTitle.current.value,
                     'description': this.blogDesc.current.value};
        let blogs = this.props.getAllBlogs().filter(b => b.id !== blog.id);
        blogs.unshift(blog);
        this.props.setAllBlogs(blogs);
        console.log(this.getAllBlogs());
    }

    render() {
        return (
            <div className="AddBlog">
                <form onSubmit={this.updateBlogs}>
                    <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Blog Id</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" ref={this.blogId} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Title</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" ref={this.blogTitle} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Description</label>
                        <div className="col-sm-6">
                            <textarea className="form-control"  ref={this.blogDesc}></textarea>
                        </div>
                    </div>
                    <br />
                    <div className="row mb-3">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-6">
                            <input type="submit" value="Submit" className="btn btn-success float-end" />
                        </div>
                    </div>

                </form>
            </div>
        );
    }
}


