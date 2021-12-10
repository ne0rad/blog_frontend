import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home({ API_URI }) {

  const [articles, setArticles] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(API_URI + '/articles')
      .then(response => {
        if (response.ok) return response.json();
        else throw new Error('Failed to fetch data.');
      })
      .then(data => {
        setArticles(data);
      })
      .catch((error) => {
        setArticles(error);
      })
  }, [API_URI]);

  return (
    <div className="container-fluid p-3 mw">
      {!articles ?
        (
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) :
        articles instanceof Error ?
          (
            <div className="text-center">
              <h2>{articles.message}</h2>
            </div>
          ) :
          articles.map((article, i) => {
            return (
              <div className="card text-left mb-4 shadow" key={i} style={{ cursor: "pointer" }} onClick={() => navigate('/articles/' + article._id)}>
                <div className="card-header">
                  {article.author}
                </div>
                <div className="card-body">
                  <h5 className="card-title mt-2 text-center">{article.title}</h5>
                  {//<p className="card-text">{article.article}</p>
                  }
                </div>
                <div className="card-footer text-muted">
                  {new Date(article.date).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}&nbsp;&nbsp;&nbsp;{new Date(article.date).toLocaleTimeString()}
                </div>
              </div>
            )
          })
      }
    </div>
  );
}

export default Home;
