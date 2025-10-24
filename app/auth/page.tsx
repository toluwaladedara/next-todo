"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const AuthPage = () => {
    const [username, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            // Replace with your authentication logic
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                // Try to read the error message from the response body if available
                const data = await response.json();
                throw new Error(data.message || 'Login failed');
            }

            // Redirect on successful login
            router.push('/');
        } catch (err) {
           if(err instanceof Error) {
            setError(err.message);
           } else {
            setError('An unknown error occurred.');
           }
        }
    };

    return (
        // 1. Container: Sets white background, centers content vertically & horizontally
        <div className="min-h-screen flex items-center justify-center bg-white p-4">
            
            {/* 2. Login Card */}
            <div className="w-full max-w-md bg-gray-50 p-8 rounded-xl shadow-2xl border border-gray-100">
                <h1 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
                    Sign In
                </h1>

                {/* Error Message */}
                {error && (
                    <p className="bg-red-100 text-red-700 p-3 rounded-lg mb-4 text-sm font-medium">
                        {error}
                    </p>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Email Input */}
                    <div>
                        <label 
                            htmlFor="username" 
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Username:
                        </label>
                        <input
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                        />
                    </div>
                    
                    {/* Password Input */}
                    <div>
                        <label 
                            htmlFor="password" 
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Password:
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                        />
                    </div>
                    
                    {/* Submit Button */}
                    <button 
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AuthPage;