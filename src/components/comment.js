function Comment({ comment }) {
    return (
        <div className="card my-3">
            <div className="card-header text-muted">
                {new Date(comment.date).toLocaleDateString(undefined, {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                })}
            </div>
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                    <p>{comment.comment}</p>
                    <footer className="blockquote-footer">{comment.name}</footer>
                </blockquote>
            </div>
        </div>
    )
}

export default Comment;
