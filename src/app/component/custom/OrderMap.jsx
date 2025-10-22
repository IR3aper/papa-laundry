'use client'


import db from "@/app/utils/firestore"
import { collection, getDocs, onSnapshot } from "@firebase/firestore";


import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link";

const statusConfig = {
  "in progress": { label: "In Progress", variant: "default" },
  ready: { label: "Ready", variant: "default" },
  completed: { label: "Completed", variant: "secondary" },
  pending: { label: "Pending", variant: "outline" },
}

export function OrderMap({orderData, click, ...props}) {


  return (

    <Card className="p-10 w-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-1">{props.header}</h3>
          <p className="text-sm text-muted-foreground">{props.headerDesc}</p>
        </div>
        <Button variant="ghost" size="sm" className="gap-1" onClick={click}>
          {props.button}
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="space-y-4">
        {orderData.map((order) => (
          <Link
            href={`/admin/${order.id}`}
            key={order.id}
            className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-center gap-4 flex-1">
              <div className="flex flex-col gap-1 min-w-[100px]">
                <span className="text-sm font-mono font-medium text-foreground">{order.orderNo}</span>
                <span className="text-xs text-muted-foreground">{order.time.toDate().toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit'
                }

                )
                }</span>
              </div>

              <div className="flex flex-col gap-1 flex-1">
                <span className="text-sm font-medium text-foreground">{order.customer}</span>
                <span className="text-xs text-muted-foreground">{order.service}</span>
              </div>

              <Badge variant={statusConfig[order.status].variant} className="min-w-[100px] justify-center">
                {statusConfig[order.status].label}
              </Badge>
            </div>

            <Button variant="ghost" size="icon" className="ml-2">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        ))}
      </div>
    </Card>
  )
}
