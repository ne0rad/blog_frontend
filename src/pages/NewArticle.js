import MarkdownIt from 'markdown-it';
import { useState } from 'react';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';

function NewArticle() {

    const [editorText, setEditorText] = useState('');
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [response, setResponse] = useState();
    const [errors, setErrors] = useState([]);

    const mdParser = new MarkdownIt({
        html: true,        // Enable HTML tags in source
        breaks: true,        // Convert '\n' in paragraphs into <br>
        linkify: true        // Autoconvert URL-like text to links
    });

    function handleEditorChange({ html, text }) {
        setEditorText(text);
    }

    async function submitClick() {
        // POST request using fetch with async/await
        if (!checkInputs()) {
            setResponse(-1);
            return;
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                author: author,
                title: title,
                text: editorText
            })
        };
        try {
            const response = await fetch(process.env.REACT_APP_API_URI + '/post_article', requestOptions);
            const data = await response.json();
            checkResponse(data);
        } catch {
            setResponse(-1);
        }
    }

    function checkResponse(res) {
        if (res.msg === "success") {
            setResponse(1);
            setAuthor('');
            setTitle('');
            setEditorText('');
        } else {
            setResponse(-1);
        }
    }

    function checkInputs() {
        const tempErrors = [];
        if (author.trim().length < 1 || author.trim().length > 100) {
            tempErrors.push('author')
        }
        if (title.trim().length < 1 || title.trim().length > 100) {
            tempErrors.push('title');
        }
        if (editorText.trim().length < 1 || editorText.trim().length > 1000) {
            tempErrors.push('editor');
        }
        if (tempErrors.length > 0) {
            setErrors(tempErrors);
            return false;
        } else {
            setErrors([]);
            return true;
        }
    }

    return (
        <div className="mt-3 mw container">
            <h1 className="mb-3">New Article</h1>
            {response === 1 ? (
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                    Article was posted succesfully!
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => {
                        setResponse();
                        setErrors([]);
                    }}></button>
                </div>
            ) : response === -1 && (
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    Posting article failed!
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setResponse()}></button>
                </div>
            )}
            <div className="d-flex justify-content-between mb-3 text-center wrap">
                <div className="wrap me-3">
                    <div className={errors.indexOf('author') !== -1 && response === -1 ? "input-group my-2 mw-sm rounded border border-danger" : "input-group my-2 mw-sm"}>
                        <span className="input-group-text" id="basic-addon1">Author:</span>
                        <input
                            type="text"
                            className="form-control"
                            onChange={(e) => setAuthor(e.target.value)}
                            value={author}
                            maxLength="100"
                            placeholder="Author"
                            aria-label="Author"
                            aria-describedby="basic-addon1" />
                    </div>
                    <div className={errors.indexOf('title') !== -1 && response === -1 ? "input-group my-2 mw-sm rounded border border-1 border-danger" : "input-group my-2 mw-sm"}>
                        <span className="input-group-text" id="basic-addon1">&nbsp;&nbsp;&nbsp;&nbsp;Title:</span>
                        <input
                            type="text"
                            className="form-control"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                            maxLength="100"
                            placeholder="Title"
                            aria-label="Title" />
                    </div>
                </div>
                <div className="ms-3">
                    <button onClick={() => submitClick()} className="btn btn-primary inline-flex my-2">Submit</button>
                </div>
            </div>
            <MdEditor
                className={errors.indexOf('editor') !== -1 && response === -1 ? "border border-danger" : "rounded"}
                value={editorText}
                style={{ height: '60vh' }}
                maxLength="10000"
                renderHTML={text => mdParser.render(text)}
                onChange={handleEditorChange} />
            <div className="mb-3"></div>
        </div>
    )
}

export default NewArticle;
