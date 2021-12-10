import ArticleCard from "../components/articleCard";
import Loading from "../components/loading";
import ErrorMessage from "../components/errorMessage";

function Home({ articles }) {

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
