import { Blog } from "./blog";

export function Home(props) {
    const blogData = props.blogData;

    return (
        <div className="Home">
            {
                blogData.map((blog) =>
                    <Blog className="Blog" key={blog.id} blog={blog} />
                )
            }
        </div>

    );
}
