"use client";
import React, { useState } from "react";
import { axios } from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

export default function LoginPage() {

    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const onLogin = async () => {
        try {

        } catch (error) {

        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-black">
            <div className="w-full max-w-md p-8 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-xl">
                <h2 className="text-3xl font-bold text-white text-center mb-6">
                    Login
                </h2>

                <div>
                    <label className="block text-sm text-zinc-400 mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={(e) => {
                            setUser({ ...user, email: e.target.value })
                        }}
                        placeholder="johndoe@gmail.com"
                        className="w-full px-4 py-2 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm text-zinc-400 mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={(e) => {
                            setUser({ ...user, password: e.target.value })
                        }}
                        placeholder="••••••••"
                        className="w-full px-4 py-2 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                    />
                </div>


                <button
                    type="submit"
                    onClick={onLogin}
                    className="w-full py-2 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
                >
                    Login
                </button>

                <Link href="/signup" className="text-indigo-500 cursor-pointer hover:underline">
                    Don't have an account? Signup
                </Link>
            </div>
        </div>
    );
}