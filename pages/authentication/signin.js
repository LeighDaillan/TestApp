import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

const SignIn = function () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { data: session } = useSession();
  const { push } = useRouter();

  const provider = ["github", "google", "twitter"];

  if (session) {
    setTimeout(() => {
      push("/authentication");
    }, 5000);

    return <h1>You are already signed in.</h1>;
  }

  const handleOAuthSignIn = (provider) => {
    signIn(provider);
  };

  const handleSubmit = function (e) {
    e.preventDefault();

    if (!email) return false;

    signIn("email", { email, redirect: false });
  };

  return (
    <div>
      <form className="text-center mb-3" onSubmit={handleSubmit}>
        <label className="block mb-2 text-lg">Email Address</label>
        <input
          type="email"
          placeholder="example@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-1/4 border-2 border-gray-300 rounded-sm px-2 py-1 mb-2"
        />
        <br />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-1/4 border-2 border-gray-300 rounded-sm px-2 py-1"
        />

        <button
          className="w-1/4 block mx-auto mt-2 bg-blue-500 text-white text-lg px-2 rounded-sm"
          type="submit"
        >
          Login
        </button>
      </form>

      {provider.map((name) => {
        return (
          <div key={name}>
            <button
              onClick={() => handleOAuthSignIn(name)}
              className="w-1/4 bg-gray-100 m-1 mb-2 mx-auto px-3 py-1 block font-bold uppercase text-sm font-Mont"
            >
              Sign in with {name}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default SignIn;
