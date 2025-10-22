'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";

import { FaApple, FaGoogle, FaInfinity, FaEye, FaEyeSlash } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import Link from "next/link";

import db from "@/app/utils/firestore";
import { collection, where, getDocs, query, updateDoc } from '@firebase/firestore'



export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const router = useRouter();

    const handleLogin = async (e) => {

        try {
            e.preventDefault();
            const accounts = collection(db, "accounts")
            const queryEmail = query(accounts, where("email", "==", email))

            const querySnapshot = await getDocs(queryEmail);
            const accountDoc = querySnapshot.docs[0];

            const accountPass = accountDoc.data().password
            const accountRole = accountDoc.data().role

            console.log(accountPass)

            if (password != accountPass) {
                alert("wrong password!")
            }

            if (accountRole == "admin") {
                console.log("Welcome.")
                router.push("/admin")
            } else {
                console.log("Welcome.")
                router.push("/user")
            }
        }
        catch (error) {
            console.error("Couldn't sign in. " + error)
        }

    };


    return (
        <div className="min-h-screen flex items-center justify-center text-gray-800">
            <div className="flex w-[900px] h-[550px] rounded-2xl overflow-hidden shadow-lg bg-white">
                <div className="w-1/2 p-10 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-2 text-center text-emerald-700">
                        Welcome back
                    </h2>
                    <p className="text-center text-gray-500 mb-8">
                        Login to your Papa Laundry account
                    </p>

                    <form onSubmit={handleLogin} className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium mb-2 text-emerald-700">
                                Email
                            </label>
                            <Input
                                type="email"
                                placeholder="m@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-700"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2 text-emerald-700">
                                Password
                            </label>
                            <div className="relative">
                                <Input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-700 pr-10"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-3 flex items-center text-emerald-800"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 bg-emerald-800 text-white rounded-md font-semibold hover:bg-emerald-700 transition"
                        >
                            Login
                        </button>
                    </form>


                    <p className="text-center text-sm text-gray-500 mt-6">
                        Don’t have an account?{" "}
                        <a href="/register" className="text-[#1a6e6b] hover:underline">
                            Sign up
                        </a>
                    </p>
                    <div className="text-center">
                    <a href="/" className="text-sm text-emerald-700 hover:underline">
                            Go back
                        </a>
                    </div>

                </div>
                <img
                    src="/LaundryPic.jpg"
                    alt="Papa Laundry Logo"
                    className="w-115 drop-shadow-xl"
                />
            </div>
        </div>
    )
}