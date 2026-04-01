export default function ProfilePage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black">
            <div className="w-full max-w-md p-8 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-lg">

                {/* Title */}
                <h2 className="text-3xl font-bold text-white text-center mb-6">
                    Profile
                </h2>

                {/* Name */}
                <div className="mb-4">
                    <label className="block text-sm text-zinc-400 mb-2">
                        Full Name
                    </label>
                    <div className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white">
                        John Doe
                    </div>
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label className="block text-sm text-zinc-400 mb-2">
                        Email
                    </label>
                    <div className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white">
                        johndoe@email.com
                    </div>
                </div>

                {/* Password */}
                <div className="mb-6">
                    <label className="block text-sm text-zinc-400 mb-2">
                        Password
                    </label>
                    <div className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white">
                        ••••••••
                    </div>
                </div>

                {/* Button */}
                <button className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 transition rounded-lg text-white font-semibold">
                    Edit Profile
                </button>

            </div>
        </div>
    );
}