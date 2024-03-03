import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
    const { user, logout } = useAuth0();
    const displayName = user.nickname || user.name;

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {/* Hero Section */}
            <div className="bg-indigo-900 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                        Welcome, {displayName}!
                    </h1>
                    <p className="mt-4 text-xl">
                        Thank you for using our platform.
                    </p>
                </div>
            </div>

          
            <div className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-2xl font-semibold mb-4">Your Profile</h2>
                    {user.email && (
                        <p className="text-lg">Email: {user.email}</p>
                    )}
                    
                    <div className="mt-8">
                        <button
                            className="py-3 px-6 bg-yellow-400 text-gray-900 font-semibold rounded hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                            onClick={() => logout()}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
