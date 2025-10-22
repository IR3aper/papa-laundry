'use client'

import db from "@/app/utils/firestore"
import { collection, getDocs, onSnapshot } from "@firebase/firestore";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

import Link from "next/link";

const statusColors = {
  pending: "bg-yellow-200 text-yellow-900",
  processing: "bg-blue-200 text-blue-900",
  ready: "bg-green-200 text-green-900",
  completed: "bg-emerald-400 text-white",
  default: "bg-gray-200 text-gray-800",
};

export function OrderMap({ orderData, click, ...props }) {
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
        {orderData.map((order) => {
          const colorClass = statusColors[order.status] || statusColors.default;

          return (
            <Link
              href={`/admin/${order.id}`}
              key={order.id}
              className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-4 flex-1">
                <div className="flex flex-col gap-1 min-w-[100px]">
                  <span className="text-xs text-muted-foreground">
                    {order.date.toDate().toLocaleDateString([], {
                      month: "short",
                      day: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>

                <div className="flex flex-col gap-1 flex-1">
                  <span className="text-sm font-medium text-foreground">{order.customerName}</span>
                  <span className="text-xs text-muted-foreground">{order.service}</span>
                </div>

                <Badge
                  className={`min-w-[100px] justify-center capitalize font-medium ${colorClass}`}
                >
                  {order.status}
                </Badge>
              </div>

              <Button variant="ghost" size="icon" className="ml-2">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          );
        })}
      </div>
    </Card>
  );
}
