'use client'
import React from "react";
import { use } from "react";

import { useEffect, useState } from "react"
import { useParams } from "next/navigation";

import db from "@/app/utils/firestore"
import { doc, getDoc } from "@firebase/firestore";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "lucide-react";


export default function OrderDetails() {

    const [fetchedOrder, setFetchedOrder] = useState("")
    const params = useParams();
    const orderId = params.order

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

    console.log(new Date())
    return (
        <main className="flex flex-col items-center justify-center w-full min-h-screen p-10 gap-10">
            <Card>
                <CardHeader>
                    <CardTitle>
                        {fetchedOrder.orderNo}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <CardTitle>
                        {fetchedOrder.service}
                    </CardTitle>
                    <CardDescription>
                        <div>
                            <p>
                                Weight:  {fetchedOrder.weight}kg
                            </p>
                            <p>
                                Customer: {fetchedOrder.customer}
                            </p>
                        </div>
                        <div>
                            Time Ordered: 9:00 am
                        </div>
                    </CardDescription>

                </CardContent>
                <CardFooter>

                </CardFooter>

            </Card>
        </main>
    )
}