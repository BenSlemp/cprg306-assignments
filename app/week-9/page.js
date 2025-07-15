"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("GitHub Sign In Error:", error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Logout Error:", error.message);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-start items-start p-8 space-y-4">
      <h1 className="text-4xl font-bold">Shopping List App</h1>

      {!user ? (
        <>
          <button
            onClick={handleLogin}
            className="text-white text-lg underline hover:text-gray-300 transition"
          >
            Sign in with GitHub
          </button>
        </>
      ) : (
        <>
          <p className="text-lg">
            Welcome, <span className="font-semibold">{user.displayName}</span> ({user.email})
          </p>
          <button
            onClick={handleLogout}
            className="text-white text-lg underline hover:text-gray-300 transition"
          >
            Logout
          </button>
          <Link
            href="/week-9/shopping-list"
            className="text-white text-lg underline hover:text-gray-300 transition"
          >
            Go to Shopping List
          </Link>
        </>
      )}
    </div>
  );
}
