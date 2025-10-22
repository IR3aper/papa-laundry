"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

import db from "../../utils/firestore";
import { collection, addDoc } from "@firebase/firestore";

export default function OrderForm() {
  const router = useRouter()
  const [orderService, setOrderService] = useState("");
  const [orderWeight, setOrderWeight] = useState(0);
  const [orderNotes, setOrderNotes] = useState("");
  const [orderCustomer, setOrderCustomer] = useState("");
  const [orderCustomerTel, setOrderCustomerTel] = useState("");

  const OPTIONS = [
    { id: "laundry_wash", label: "Regular Wash", value: "wash" },
    { id: "laundry_dry_clean", label: "Dry Clean", value: "dry" },
    { id: "laundry_full", label: "Full Service", value: "full" },
    { id: "laundry_specialty", label: "Specialty Items", value: "specialty" },
  ];

  const handleOrder = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "orders"), {
        service: orderService,
        weight: orderWeight,
        notes: orderNotes,
        status: "pending",
        customerName: orderCustomer,
        customerTel: orderCustomerTel,
        date: new Date(),
      });
      alert("Order booked successfully!");

      window.location.reload();

    } catch (error) {
      console.error("Error adding document: " + error);
    }
  };

  return (
    <Card className="w-full max-w-lg shadow-lg rounded-2xl p-6 border border-slate-200">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-emerald-600">
          Book an Order
        </CardTitle>
        <p className="text-sm text-slate-500 mt-1">
          Fill in your details to place a laundry order
        </p>
      </CardHeader>

      <form onSubmit={handleOrder}>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <h2 className="font-semibold text-lg text-slate-700">
              Customer Information
            </h2>
            <div className="space-y-3">
              <div>
                <label htmlFor="name" className="block text-sm text-slate-600 mb-1">
                  Full Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter full name"
                  onChange={(e) => setOrderCustomer(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="number" className="block text-sm text-slate-600 mb-1">
                  Contact Number
                </label>
                <Input
                  id="number"
                  type="tel"
                  placeholder="Enter phone number"
                  onChange={(e) => setOrderCustomerTel(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="font-semibold text-lg text-slate-700">Order Details</h2>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="service" className="block text-sm text-slate-600 mb-1">
                  Service
                </label>
                <Select id="service" onValueChange={setOrderService}>
                  <SelectTrigger className="w-60">
                    <SelectValue placeholder="Select service" />
                  </SelectTrigger>
                  <SelectContent>
                    {OPTIONS.map((option) => (
                      <SelectItem key={option.id} value={option.label}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex-1">
                <label htmlFor="weight" className="block text-sm text-slate-600 mb-1">
                  Estimated Weight (kg)
                </label>
                <Input
                  id="weight"
                  type="number"
                  min="1"
                  placeholder="e.g. 5"
                  onChange={(e) => setOrderWeight(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Additional Notes */}
          <div className="space-y-2">
            <label htmlFor="notes" className="block text-sm text-slate-600 mb-1">
              Additional Notes
            </label>
            <Textarea
              id="notes"
              placeholder="Any special instructions?"
              className="resize-none h-24 mb-10"
              onChange={(e) => setOrderNotes(e.target.value)}
            />
          </div>
        </CardContent>

        <CardFooter>
          <Button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 rounded-md"
          >
            Confirm Order
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
