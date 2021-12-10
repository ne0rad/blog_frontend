import { useEffect, useState } from "react";
import { useParams } from "react-router";
import MarkdownIt from "markdown-it";

function Article({ API_URI }) {
    let params = useParams();
    const [article, setArticle] = useState();

    const mdParser = new MarkdownIt({
        linkify: true        // Autoconvert URL-like text to links
    });

    useEffect(() => {
        fetch(API_URI + '/articles/' + params.id)
            .then(response => {
                if (response.status === 200) return response.json();
                else throw new Error('Failed to load article.');
            })
            .then(data => {
                setArticle(data);
            })
            .catch((error) => {
                setArticle(error);
            })
    }, [params.id, API_URI]);

    return (
        <div className="container mw mt-3">
            {!article ?
                (
                    <div className="text-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) :
                article instanceof Error ?
                    (
                        <div className="text-center">
                            <h1>{article.message}</h1>
                        </div>
                    ) :
                    (
                        <div>
                            <div className="text-center">
                                <h1>{article.title}</h1>
                                <p>By {article.author}</p>
                            </div>
                            <hr />
                            <div dangerouslySetInnerHTML={{ __html: (mdParser.render(JSON.parse(article.article))) }}>
                            </div>
                        </div>
                    )
            }
        </div>
    )
}

export default Article;
