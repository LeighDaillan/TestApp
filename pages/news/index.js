const NewsArticleList = function ({ articles }) {
  console.log(articles);
  return (
    <main className="w-10/12 mx-auto mb-10">
      <h1 className="text-center text-4xl font-bold underline">
        List of News Articles
      </h1>

      <div className="grid grid-cols-3 my-10 mx-5 gap-3 justify-items-center text-2xl ">
        {articles.map((article) => {
          return (
            <div key={article.id}>
              <h2>
                {article.id} {article.title} | {article.category}
              </h2>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default NewsArticleList;

export async function getServerSideProps() {
  const response = await fetch("http://localhost:4000/news");
  const data = await response.json();

  return {
    props: {
      articles: data,
    },
  };
}
