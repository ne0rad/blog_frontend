import { useNavigate } from "react-router-dom";

function ArticleCard({ article }) {
    const navigate = useNavigate();

    return (
        <div className="card mb-5 shadow" style={{ cursor: "pointer" }} onClick={() => navigate('/articles/' + article._id)}>
            <div className="card-header text-muted">
                {new Date(article.date).toLocaleDateString(undefined, {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit', 
                    minute: '2-digit'
                })}
            </div>
            <div className="card-body">
                <h5 className="card-title mt-2 text-center">{article.title}</h5>
            </div>
            <div className="card-footer text-muted text-end">
                By {article.author}
            </div>
        </div>
    )
}

export default ArticleCard;
