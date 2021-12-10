import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../components/loading";
import ErrorMessage from "../components/errorMessage";
import ArticleFull from "../components/articleFull";
import Comment from "../components/comment";
import CommentForm from "../components/commentForm";

function Article({ API_URI }) {
    let params = useParams();
    const [article, setArticle] = useState('');
    const [comments, setComments] = useState('');
    const [loading, setLoading] = useState(true);

    // Fetches article and comments from API
    useEffect(() => {
        fetch(API_URI + '/articles/' + params.id)
            .then(response => {
                if (response.ok) return response.json();
                else throw new Error('Failed to load.');
            })
            .then(data => {
                setArticle(data);
                setLoading(false);
            })
            .catch((error) => {
                setArticle(error);
                setComments(error);
                setLoading(false);
            })
    }, [params.id, API_URI]);

    useEffect(() => {
        // Fetch comments
        if(!loading) {
        fetch(API_URI + '/comments/' + params.id)
            .then(response => {
                if (response.ok) return response.json();
                else throw new Error('Failed to load comments.');
            })
            .then(data => {
                setComments(data);
            })
            .catch((error) => {
                setComments(error);
            })
        }
    }, [params.id, API_URI, loading])

    function refreshComments() {
        setLoading(true);
        setLoading(false);
    }

    return (
        <div className="container mw mt-3">
            {
                // Full article
            }
            <div className="container" id="article">
                {
                    !article
                        ? <Loading />
                        : article instanceof Error
                            ? <ErrorMessage message={article.message} />
                            // Render article
                            : <ArticleFull article={article} />
                }
            </div>

            {
                // Comment section
            }
            <hr />
            <div className="text-center">
                <h3>Comments</h3>
            </div>

            <div className="container" id="comments">
                {
                    !comments ?
                        <Loading />
                        : comments instanceof Error ?
                            <ErrorMessage message={comments.message} />
                            : comments.length < 1 ?
                                (<h5>There are no comments.</h5>)
                                // All good, let's render comments
                                : comments.map((comment, i) => <Comment key={i} comment={comment} />)
                }
            </div>

            {
                // New comment section
            }
            <hr />
            <div className="container mb-5" id="newComment">
                <CommentForm API_URI={API_URI} id={params.id} refreshComments={refreshComments} />
            </div>
        </div>
    )
}

export default Article;
