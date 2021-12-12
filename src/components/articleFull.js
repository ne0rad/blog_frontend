import MarkdownIt from "markdown-it";

function ArticleFull({ article }) {
    const mdParser = new MarkdownIt({
        linkify: true        // Autoconvert URL-like text to links
    });

    return (
        <div>
            <div className="text-center">
                <h1>{article.title}</h1>
                <p>By {article.author}</p>
            </div>
            <hr />
            <div dangerouslySetInnerHTML={{ __html: (mdParser.render(JSON.parse(article.article))) }}></div>
            <hr />
        </div>
    )
}

export default ArticleFull;
