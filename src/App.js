import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useMatch,
  useResolvedPath
} from "react-router-dom";
import About from "./pages/About";

import Home from "./pages/Home";
import NewArticle from "./pages/NewArticle";
import NotFound from "./pages/NotFound"

function App() {

  

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
    <Router>
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-primary">
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
          <Route path="/" element={<Home Link={Link} />} />
          <Route path="/new" element={<NewArticle />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </div>
    </Router>
  )
}

export default App;
