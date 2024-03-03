import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <button
        onClick={() => loginWithRedirect()}
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Sign in
      </button>
    </div>
  );
};

export default Login;
