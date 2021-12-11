import { useEffect, useState } from "react";
import {
  HashRouter,
  Routes,
  Route,
  Link,
  useMatch,
  useResolvedPath
} from "react-router-dom";

import About from "./pages/About";
import Article from "./pages/Article";
import Home from "./pages/Home";
import NewArticle from "./pages/NewArticle";
import NotFound from "./pages/NotFound"

const API_URI = process.env.REACT_APP_API_URI;

function App() {

  const [articles, setArticles] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      fetch(API_URI + '/articles')
        .then(response => {
          if (response.ok) return response.json();
          else throw new Error('Failed to fetch data.');
        })
        .then(data => {
          setArticles(data);
          setLoading(false);
        })
        .catch((error) => {
          setArticles(error);
          setLoading(false);
        })
    }
  }, [loading]);

  function refreshArticles() {
    setLoading(true);
  }


  function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
      <div>
        <Link
          style={match && { color: "white" }}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </div>
    );
  }

  return (
    <HashRouter>
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-primary bg-gradient shadow">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Blog App</Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <CustomLink className="nav-link" to="/">Home</CustomLink>
                </li>
                <li className="nav-item">
                  <CustomLink className="nav-link" to="/new">New Article</CustomLink>
                </li>
                <li className="nav-item">
                  <CustomLink className="nav-link" to="/about">About</CustomLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home articles={articles} />} />
          <Route path="/new" element={<NewArticle API_URI={API_URI} refreshArticles={refreshArticles} />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles/:id" element={<Article API_URI={API_URI} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </div>
    </HashRouter>
  )
}

export default App;
