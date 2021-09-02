export function Comment(props) {
    const blogComments = props.blogComments;

    return (
        <div className="Comment">
            <span><b>Comments</b></span><br/><br/>
            {   
                blogComments.filter((comment) => comment.isActive).map((comment, i) => 
                    <p key={comment.id} className="commentLine">{i+1}. {comment.comment}</p>
                )
            }
        </div>
    );
}