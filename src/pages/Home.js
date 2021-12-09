import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home({ Link }) {
  
  const [articles, setArticles] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URI + '/articles')
      .then(response => {
        if (response.ok) return response.json();
        else throw new Error('Failed to fetch data.');
      })
      .then(data => {
        console.log(data);
        setArticles(data);
      })
      .catch((error) => {
        setArticles(error);
      })
  }, []);

  return (
    <div className="container-fluid p-3 mw">
      <h1 className="mb-3 text-center">Home Page</h1>
      {!articles ?
        (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) :
        articles instanceof Error ?
          (
            <h2>{articles.message}</h2>
          ) :
          articles.map((article, i) => {
            return (
                <div className="card text-left mb-4" style={{cursor: "pointer"}} onClick={() => navigate('/articles/' + article._id)}>
                  <div className="card-header">
                    {article.author}
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-text">{article.article}</p>
                  </div>
                  <div className="card-footer text-muted">
                    {new Date(article.date).toLocaleDateString()}
                  </div>
                </div>
            )
          })
      }
    </div>
  );
}

export default Home;
