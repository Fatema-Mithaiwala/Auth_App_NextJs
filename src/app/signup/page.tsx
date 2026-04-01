// "use client";
// import { useState } from "react";

// export default function SignupPage() {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         password: "",
//     });

//     const handleChange = (e: any) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value,
//         });
//     };

//     const handleSubmit = (e: any) => {
//         e.preventDefault();
//         console.log(formData);
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-black">
//             <div className="w-full max-w-md p-8 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-xl">

//                 {/* Heading */}
//                 <h2 className="text-3xl font-bold text-white text-center mb-6">
//                     Sign Up
//                 </h2>

//                 {/* Form */}
//                 <form onSubmit={handleSubmit} className="space-y-5">

//                     {/* Name */}
//                     <div>
//                         <label className="block text-sm text-zinc-400 mb-2">
//                             Full Name
//                         </label>
//                         <input
//                             type="text"
//                             name="name"
//                             placeholder="John Doe"
//                             value={formData.name}
//                             onChange={handleChange}
//                             className="w-full px-4 py-2 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                             required
//                         />
//                     </div>

//                     {/* Email */}
//                     <div>
//                         <label className="block text-sm text-zinc-400 mb-2">
//                             Email
//                         </label>
//                         <input
//                             type="email"
//                             name="email"
//                             placeholder="example@mail.com"
//                             value={formData.email}
//                             onChange={handleChange}
//                             className="w-full px-4 py-2 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                             required
//                         />
//                     </div>

//                     {/* Password */}
//                     <div>
//                         <label className="block text-sm text-zinc-400 mb-2">
//                             Password
//                         </label>
//                         <input
//                             type="password"
//                             name="password"
//                             placeholder="••••••••"
//                             value={formData.password}
//                             onChange={handleChange}
//                             className="w-full px-4 py-2 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                             required
//                         />
//                     </div>

//                     {/* Button */}
//                     <button
//                         type="submit"
//                         className="w-full py-2 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
//                     >
//                         Create Account
//                     </button>
//                 </form>

//                 {/* Footer */}
//                 <p className="text-center text-sm text-zinc-400 mt-6">
//                     Already have an account?{" "}
//                     <span className="text-indigo-500 cursor-pointer hover:underline">
//                         Login
//                     </span>
//                 </p>
//             </div>
//         </div>
//     );
// }

"use client";
import React, { useState } from "react";
import { axios } from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

export default function SignupPage() {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    });

    const onSignup = async () => {
        try {

        } catch (error) {

        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-black">
            <div className="w-full max-w-md p-8 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-xl">
                <h2 className="text-3xl font-bold text-white text-center mb-6">
                    Sign Up
                </h2>

                <div>
                    <label className="block text-sm text-zinc-400 mb-2">
                        Full Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={(e) => {
                            setUser({ ...user, name: e.target.value })
                        }}
                        placeholder="John Doe"
                        className="w-full px-4 py-2 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                    />
                </div>

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
                    onClick={onSignup}
                    className="w-full py-2 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
                >
                    Create Account
                </button>

                <Link href="/login" className="text-indigo-500 cursor-pointer hover:underline">
                    Already have an account? Login
                </Link>
            </div>
        </div>
    );
}