"use client";

import { useState } from "react";

import { User, Lock, KeyRound, Mail, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import db from "@/app/utils/firestore";
import { collection, addDoc, getDoc } from '@firebase/firestore'

export default function Register() {


  const [lastName, setLastName] = useState("")
  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")
  const [telNumber, setTelNumber] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleRegister = async (e) => {

    if (password != confirmPassword) {
      alert("passwords don't match!")
      return
    } else {
      try {
        const registerAcc = await addDoc(collection(db, "accounts"), {
          firstName: firstName,
          lastName: lastName,
          email: email,
          telNumber: telNumber,
          password: confirmPassword,
          dateJoined: new Date(),
          role: "user",
          isLoggedIn: false
        })

        console.log("Account created successfully.")
        e.preventDefault()

      } catch (error) {
        console.error("Couldn't register account. " + error)
      }
    }
  }


  return (
    <main className="flex items-center justify-center min-h-screen  text-gray-800">
      <div className="flex w-[900px] h-[550px] rounded-2xl overflow-hidden shadow-lg bg-white">
        <div className="w-1/2 relative">
          <img
            src="/LaundryPic.jpg"
            alt="Papa Laundry"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-emerald-900/40 flex flex-col justify-center p-10 text-white">
            <h1 className="text-4xl font-bold mb-4">Welcome!</h1>
            <p className="text-lg leading-snug">
              Experience a new way to handle your laundry with ease and
              confidence. Join Papa Laundry today!
            </p>
          </div>
        </div>


        <div className="w-1/2 flex flex-col justify-center px-10">
          <h2 className="text-3xl font-bold mb-2 text-emerald-700 text-center">
            Register
          </h2>


          <form className="space-y-4" onSubmit={handleRegister}>

            <div className="flex gap-3">
              <div className="flex items-center gap-2 w-full bg-emerald-50 border border-emerald-100 rounded-md px-3">
                <User size={18} className="text-emerald-700" />
                <Input
                  placeholder="First Name"
                  className="border-none bg-transparent focus-visible:ring-0 p-4"
                  onChange={e => setFirstName(e.target.value)}
                  required
                />
              </div>

              <div className="flex items-center gap-2 w-full bg-emerald-50 border border-emerald-100 rounded-md px-3">
                <User size={18} className="text-emerald-700" />
                <Input
                  placeholder="Last Name"
                  className="border-none bg-transparent focus-visible:ring-0 p-4"
                  onChange={e => setLastName(e.target.value)}
                  required
                />
              </div>

            </div>

            <div className="flex items-center gap-2 w-full bg-emerald-50 border border-emerald-100 rounded-md px-3">
              <Mail size={18} className="text-emerald-700" />
              <Input
                placeholder="Email"
                className="border-none bg-transparent focus-visible:ring-0 p-4"
                onChange={e => setEmail(e.target.value)}
                required

              />
            </div>

            <div className="flex items-center gap-2 w-full bg-emerald-50 border border-emerald-100 rounded-md px-3">
              <Phone size={18} className="text-emerald-700" />
              <Input
                type="tel"
                placeholder="Phone Number"
                className="border-none bg-transparent focus-visible:ring-0 p-4"
                onChange={e => setTelNumber(e.target.value)}
                required

              />
            </div>


            <div className="flex gap-3">
              <div className="flex items-center gap-2 w-full bg-emerald-50 border border-emerald-100 rounded-md px-3">
                <KeyRound size={18} className="text-emerald-700" />
                <Input
                  placeholder="Password"
                  type="password"
                  className="border-none bg-transparent focus-visible:ring-0 p-4"
                  onChange={e => setPassword(e.target.value)}
                  required

                />
              </div>
              <div className="flex items-center gap-2 w-full bg-emerald-50 border border-emerald-100 rounded-md px-3">
                <Lock size={18} className="text-emerald-700" />
                <Input
                  placeholder="Confirm"
                  type="password"
                  className="border-none bg-transparent focus-visible:ring-0 p-4"
                  onChange={e => setConfirmPassword(e.target.value)}
                  required

                />
              </div>
            </div>


            <Button
              type="submit"
              className="w-full bg-emerald-800 text-white hover:bg-emerald-700 transition"
            >
              Register
            </Button>

            <div>
              <p className="text-center text-sm text-gray-500 mt-6">
                Already have an account?{" "}
                <a href="/login" className="text-emerald-700 hover:underline">
                  Log in
                </a>
              </p>
              <div className="text-center">
                <a href="/" className="text-sm text-emerald-700 hover:underline">
                  Go back
                </a>
              </div>
            </div>

          </form>
        </div>
      </div>
    </main>
  );
}
