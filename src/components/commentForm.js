import { useState } from "react";

function CommentForm({ API_URI, id, refreshComments }) {

    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [response, setResponse] = useState();
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(false);

    async function submitClick() {
        // POST request using fetch with async/await
        if(!checkInputs()) return
        setLoading(true);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name,
                comment: comment,
                id: id
            })
        };
        try {
            const response = await fetch(API_URI + '/post_comment/' + id, requestOptions);
            const data = await response.json();
            checkResponse(data);
        } catch {
            setResponse(-1);
        }
        setLoading(false);
    }

    function checkResponse(res) {
        if (res.msg === "success") {
            setResponse(1);
            setName('');
            setComment('');
            refreshComments();
        } else {
            setResponse(-1);
        }
    }

    function checkInputs() {
        const tempErrors = [];
        if (name.trim().length < 1 || name.trim().length > 100) {
            tempErrors.push('name')
        }
        if (comment.trim().length < 1 || comment.trim().length > 1000) {
            tempErrors.push('comment');
        }
        if (tempErrors.length > 0) {
            setErrors(tempErrors);
            setResponse(-1);
            return false;
        } else {
            setErrors([]);
            return true;
        }
    }

    return (
        <>
            {
                response === 1 ?
                    (
                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                            Comment was posted succesfully!
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => {
                                setResponse();
                            }}></button>
                        </div>
                    )
                    : response === -1 &&
                    (
                        <div className="alert alert-danger alert-dismissible fade show" role="alert">
                            Posting comment failed!
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setResponse()}></button>
                        </div>
                    )
            }
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name:</label>
                <input
                    type="text"
                    className={errors.indexOf('name') !== -1 ? "form-control border border-danger" : "form-control"}
                    id="name"
                    placeholder="Your name"
                    maxLength="100"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={loading ? true : false}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="comment" className="form-label">Comment:</label>
                <textarea
                    className={errors.indexOf('comment') !== -1 ? "form-control border border-danger" : "form-control"}
                    id="comment"
                    rows="3"
                    placeholder="Your comment"
                    maxLength="1000"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    disabled={loading ? true : false}
                />
            </div>
            <button
                className="btn btn-primary"
                onClick={() => submitClick()}
                disabled={loading ? true : false}
            >Send</button>
        </>
    )
}

export default CommentForm;
