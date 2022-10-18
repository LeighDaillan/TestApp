import { getSession } from "next-auth/react";

const Blogs = function ({ data }) {
  return <h1>Blogs Section {data}</h1>;
};

export default Blogs;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination:
          "/api/auth/signin?callbackUrl=http://localhost:3000/authentication/blogs",
        permanent: false,
      },
    };
  }
  return {
    props: {
      data: session ? "List of 100 personalized blogs" : "List of free blogs",
    },
  };
}
