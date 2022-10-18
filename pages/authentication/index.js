import { useSession } from "next-auth/react";

const NextAuth = function () {
  const { data: session, status } = useSession();
  console.log(session, status);

  return (
    <h1 className="text-3xl text-center underline font-bold">
      Welcome {session ? `${session.user.name}` : ""} to Next Authentication
    </h1>
  );
};

export default NextAuth;
