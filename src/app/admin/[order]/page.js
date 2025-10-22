'use client'
import React from "react";
import { use } from "react";

import { useEffect, useState } from "react"
import { useParams } from "next/navigation";

import db from "@/app/utils/firestore"
import { doc, getDoc, updateDoc, deleteDoc } from "@firebase/firestore";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "lucide-react";

import { Bubbles, User, NotepadText, Trash2, SquareCheck } from 'lucide-react';

import { useRouter } from "next/navigation";





export default function OrderDetails() {

    const [fetchedOrder, setFetchedOrder] = useState("")
    const params = useParams();
    const orderId = params.order
    const router = useRouter();

    useEffect(() => {
        const fetchOrder = async () => {
            const query = doc(db, "orders", orderId)
            const snap = await getDoc(query)
            try {
                setFetchedOrder(snap.data())
                console.log("Order successfully fetched")
            }
            catch (error) {
                console.error("Couldn't retrieve data" + error)
            }
        }
        fetchOrder()
        console.log(fetchedOrder.time)
    }, [])


    const handleUpdate = async () => {
        try {
            let nextStatus = fetchedOrder.status;

            if (fetchedOrder.status === "pending") {
                nextStatus = "processing";
            } else if (fetchedOrder.status === "processing") {
                nextStatus = "ready";
            } else if (fetchedOrder.status === "ready") {
                nextStatus = "completed";
            }

            const ref = doc(db, "orders", orderId);
            await updateDoc(ref, { status: nextStatus });

            setFetchedOrder(prev => ({ ...prev, status: nextStatus }));

            console.log("Status updated to:", nextStatus);
        } catch (error) {
            console.error("Couldn't update status:", error);
        }

    };
    const handleDelete = async () => {
        try {
            const ref = doc(db, "orders", orderId);
            await deleteDoc(ref)
            console.log("Record deleted");
            router.push("/admin");

        } catch (error) {
            console.error("Couldn't delete record:", error);
        }
    }
    const status = fetchedOrder.status

    console.log(new Date())
    return (
        <main className="flex flex-col items-center justify-center w-full min-h-screen p-10 gap-10">
            <div className="flex flex-col gap-5 shadow-md rounded-lg w-2xl bg-white">
                <div className="flex justify-between items-center p-5 shadow-sm">
                    <div className="flex flex-col gap-2">
                        <p className="text-gray-600 font-semibold text-sm">
                            {fetchedOrder?.date
                                ? new Date(fetchedOrder.date.seconds * 1000).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })
                                : "Loading..."}
                        </p>
                        <div
                            className={`rounded-xl px-4 py-1 text-xs font-semibold text-gray-700 capitalize flex justify-center items-center
                              ${fetchedOrder.status === "pending"
                                    ? "bg-yellow-200"
                                    : fetchedOrder.status === "processing"
                                        ? "bg-blue-200"
                                        : fetchedOrder.status === "ready"
                                            ? "bg-green-200"
                                            : fetchedOrder.status === "completed"
                                                ? "bg-emerald-400 text-white"
                                                : "bg-gray-200"
                                }`}
                        >
                            {fetchedOrder.status || "Loading..."}
                        </div>

                    </div>
                    <div className="flex gap-2">
                        {fetchedOrder.status == "completed" ? null :
                            <Button className=" bg-emerald-500  cursor-pointer" onClick={handleUpdate}>
                                <SquareCheck className=""/>
                            </Button>
                        }

                        <Button className=" bg-red-400 cursor-pointer" onClick={handleDelete}>
                            <Trash2 onClick={handleDelete}/>
                        </Button>

                    </div>
                </div>
                <div>
                    <div className="flex p-10 gap-10">
                        <div className="flex flex-col gap-3 mr-45">
                            <div className="flex items-center gap-2">
                                <div className="rounded-full bg-gray-500 w-10 h-10 flex justify-center items-center text-white"><User /></div>
                                <h1 className="font-semibold text-xl">Customer Info.</h1>
                            </div>
                            <div className="ml-12">
                                <p className="text-sm text-gray-500 ">Name: <span className="text-gray-600 font-semibold">{fetchedOrder.customerName}</span></p>
                                <p className="text-sm text-gray-500 ">Phone:    <span className="text-gray-600 font-semibold">{fetchedOrder.customerTel}</span></p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-2">
                                <div className="rounded-full bg-gray-500 w-10 h-10 flex justify-center items-center text-white"><Bubbles /></div>
                                <h1 className="font-semibold text-xl">Order Details</h1>
                            </div>
                            <div className="ml-12">
                                <p className="text-sm text-gray-500 ">Service: <span className="text-gray-600 font-semibold">{fetchedOrder.service}</span></p>
                                <p className="text-sm text-gray-500 ">Weight: <span className="text-gray-600 font-semibold">{fetchedOrder.weight}kg</span></p>
                                <p className="text-sm text-gray-500 capitalize ">Status: <span className="text-gray-600 font-semibold">{fetchedOrder.status}</span></p>
                            </div>

                        </div>
                    </div>
                    <hr className="mr-10 ml-10" />
                    <div className="flex flex-col gap-3 p-10 pb-20">
                        <div className="flex items-center gap-2">
                            <div className="rounded-full bg-gray-500 w-10 h-10 flex justify-center items-center text-white"><NotepadText /></div>
                            <h1 className="font-semibold text-xl">Additional Notes:</h1>
                        </div>
                        <div
                            className={`ml-12 text-sm h-20`}
                        >{fetchedOrder.notes}
                        </div>
                    </div>

                </div>

            </div>
        </main>
    )
}