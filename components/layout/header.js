import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Header = function () {
  const { data: session, status } = useSession();
  const { push, asPath } = useRouter();

  const handleSignout = async function () {
    const data = await signOut({ redirect: false, callbackUrl: "/" });

    push(data.url);
  };

  const handleSignin = function () {
    push(`/authentication/signin?callbackUrl=${asPath}`);
  };

  return (
    <nav className="text-center font-bold my-5">
      <span className="text-5xl text-red-500">N</span>
      <span className="text-2xl">
        ews <span className="text-5xl text-red-500">B</span>log
      </span>

      <div className="bg-gray-900 mb-10 w-10/12 mx-auto mt-5 ">
        <ul className="flex justify-between text-base text-white ">
          <li className="px-5 py-2">
            <Link href="/authentication">
              <a>HOME</a>
            </Link>
          </li>
          <li className="px-5 py-2">
            <Link href="/authentication/dashboard">
              <a>DASHBOARD</a>
            </Link>
          </li>
          <li className="px-5 py-2">
            <Link href="/authentication/news">
              <a>NEWS</a>
            </Link>
          </li>
          <li className="px-5 py-2">
            <Link href="/authentication/blogs">
              <a>BLOGS SECTION</a>
            </Link>
          </li>

          {status === "unauthenticated" && (
            <li className="px-5 py-2">
              <button onClick={handleSignin}>SIGN IN</button>
            </li>
          )}

          {status === "authenticated" && (
            <li className="px-5 py-2">
              <button onClick={handleSignout}>SIGN OUT</button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
