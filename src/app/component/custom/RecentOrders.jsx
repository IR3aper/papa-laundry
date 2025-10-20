'use client'


import db from "@/app/utils/firestore"
import { collection, getDocs, onSnapshot } from "@firebase/firestore";


import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

// const orders = [
//   {
//     id: "ORD-1284",
//     customer: "Sarah Johnson",
//     service: "Wash & Fold",
//     status: "in-progress",
//     amount: "$45.00",
//     time: "2h ago",
//   },
//   {
//     id: "ORD-1283",
//     customer: "Michael Chen",
//     service: "Dry Cleaning",
//     status: "ready",
//     amount: "$89.50",
//     time: "3h ago",
//   },
//   {
//     id: "ORD-1282",
//     customer: "Emily Davis",
//     service: "Express Wash",
//     status: "in-progress",
//     amount: "$62.00",
//     time: "4h ago",
//   },
//   {
//     id: "ORD-1281",
//     customer: "James Wilson",
//     service: "Ironing",
//     status: "completed",
//     amount: "$34.00",
//     time: "5h ago",
//   },
//   {
//     id: "ORD-1280",
//     customer: "Lisa Anderson",
//     service: "Alterations",
//     status: "pending",
//     amount: "$125.00",
//     time: "6h ago",
//   },
// ]



const statusConfig = {
  "in-progress": { label: "In Progress", variant: "default" },
  ready: { label: "Ready", variant: "default" },
  completed: { label: "Completed", variant: "secondary" },
  pending: { label: "Pending", variant: "outline" },
}

export function RecentOrders() {
    const [orders, setOrders] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const query = onSnapshot(collection(db,'orders'), (snapshot) => {
            setOrders(
                snapshot.docs.map((doc)=>(
                    {...doc.data(), id: doc.id}
                )))
        })
        console.log("Fetch success")
      } catch (error) {
        console.error("Error loading data" + error);
      }
    }
    getData()
  }, []);
  return (
    // <>
    // {orders.map((order)=>(
    //   <h1>{order.id}</h1>
    // ))}
    // </>
    <Card className="p-10 w-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-1">Recent Orders</h3>
          <p className="text-sm text-muted-foreground">Latest customer orders and their status</p>
        </div>
        <Button variant="ghost" size="sm" className="gap-1">
          View All
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-center gap-4 flex-1">
              <div className="flex flex-col gap-1 min-w-[100px]">
                <span className="text-sm font-mono font-medium text-foreground">{order.orderNo}</span>
                <span className="text-xs text-muted-foreground">{order.time}</span>
              </div>

              <div className="flex flex-col gap-1 flex-1">
                <span className="text-sm font-medium text-foreground">{order.customer}</span>
                <span className="text-xs text-muted-foreground">{order.service}</span>
              </div>

              <Badge variant={statusConfig[order.status].variant} className="min-w-[100px] justify-center">
                {statusConfig[order.status].label}
              </Badge>

              <span className="text-sm font-semibold text-foreground min-w-[80px] text-right">{order.amount}</span>
            </div>

            <Button variant="ghost" size="icon" className="ml-2">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </Card>
  )
}
