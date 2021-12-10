import { useEffect, useState } from "react";
import ArticleCard from "../components/articleCard";
import Loading from "../components/loading";
import ErrorMessage from "../components/errorMessage";

function Home({ API_URI }) {

  const [articles, setArticles] = useState();

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
      {
        !articles
          ? <Loading />
          : articles instanceof Error
            ? <ErrorMessage message={articles.message} />
            : articles.map((article, i) => {
              return <ArticleCard article={article} key={i} />
            })
      }
    </div>
  );
}

export default Home;
