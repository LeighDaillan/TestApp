const ArticleListByCategory = function (props) {
  return (
    <div className="w-10/12 mx-auto mb-10">
      <h1 className="text-center text-4xl font-bold underline">
        List of Article By {props.category}
      </h1>

      {props.articles.map((article) => {
        return (
          <div key={article.id} className="mb-3">
            <h2 className="text-3xl font-bold">
              <span>{article.id} </span>
              {article.title}
            </h2>
            <p className="italic text-2xl">{article.description}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default ArticleListByCategory;

export async function getServerSideProps(context) {
  const { params } = context;
  console.log(context);
  const { category } = params;

  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );

  const data = await response.json();

  return {
    props: {
      articles: data,
      category,
    },
  };
}
