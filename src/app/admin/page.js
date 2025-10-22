"use client";
import { useEffect, useState } from "react";
import { OrderMap } from "../component/custom/OrderMap";

import db from "../utils/firestore"
import { collection, getDocs, onSnapshot, query, where } from "@firebase/firestore";


export default function Admin() {
  const [orders, setOrders] = useState([])
  const [isReady, setIsReady] = useState(true)


  const cardText = {
    header: isReady ? "Orders ready" : "Orders Pending/In Process",
    headerDesc: isReady ? "Orders ready to take" : "Active orders",
    button: isReady ? "View active orders" : "View finished orders"
  } 

    function handleSwitch() {
    setIsReady((prev)=>{return !prev})
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const orders = collection(db, "orders")

        const queryReadyOrders = query(orders, where("status", "==", "ready"))
        const queryActiveOrders = query(orders, where("status", "==", "pending" || "in progress"))

        if (!isReady) {
          const showQuery = onSnapshot(queryActiveOrders, (snapshot) => {
            setOrders(
              snapshot.docs.map((doc) => (
                { ...doc.data(), id: doc.id }
              )))
          })
        } else {
          const showQuery = onSnapshot(queryReadyOrders, (snapshot) => {
            setOrders(
              snapshot.docs.map((doc) => (
                { ...doc.data(), id: doc.id }
              )))
          })
        }
        console.log("Fetch success")
      } catch (error) {
        console.error("Error loading data" + error);
      }
    }
    getData()
  }, [isReady]);


  console.log(isReady)

  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen p-10 gap-10">
      <h1>Welcome Admin</h1>
      <OrderMap orderData={orders} click={handleSwitch} header={cardText.header} headerDesc={cardText.headerDesc} button={cardText.button}/>
    </main>
  );
}
