'use client'

import { serverTimestamp } from '@firebase/firestore';

import { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea"

import db from "../utils/firestore"
import {collection, addDoc} from '@firebase/firestore'



export default function OrderForm() {

    const getCurrentNo = Number(localStorage.getItem("currentOrderNo"));
    const currentNo = !getCurrentNo ? 1 : getCurrentNo

    const [orders, setOrders] = useState([])
    const [orderNo, setOrderNo] = useState(!currentNo ? 1 : currentNo)
    const [orderService, setOrderService] = useState("")  
    const [orderWeight, setOrderWeight] = useState(0)
    const [orderNotes, setOrderNotes] = useState("")
    const [orderCustomer, setOrderCustomer] = useState("")
    const [orderTime, setOrderTime] = useState("")

  const OPTIONS = [
    { id: "laundry_wash", label: "Regular Wash", value: "wash" },
    { id: "laundry_dry_clean", label: "Dry Clean", value: "dry" },
    // { id: "laundry_iron", label: "Iron", value: "iron" },
    // { id: "laundry_fold", label: "Fold", value: "fold" },
    { id: "laundry_full", label: "Full Service", value: "full" },
    {id: "laundry_specialty", label: "Specialty Items", value: "specialty"}
  ];


  const handleOrder = async (e) => {
    e.preventDefault()
    try {
      const docref = await addDoc(collection(db, 'orders'), 
     {
        orderNo: "ORDR-" + orderNo,
        service: orderService,
        weight: orderWeight,
        notes: orderNotes,
        status: "pending",
        customer: "Juan Dela Cruz",
        time: new Date(),
        amount: "$1000.00"
     })

    setOrderNo(prev => prev + 1)
    localStorage.setItem("currentIdNo",orderNo)
    
     console.log("data added successfully")
    }
    catch(error){
      console.error('Error adding document' + error)
    }
  }

  return (
    <form className="flex flex-col items-center shadow-xl p-10 gap-7 text-slate-700 rounded-sm"
          onSubmit={handleOrder}>
      <h1 className="font-bold text-4xl">Book our services</h1>
      <div className="w-full flex flex-col gap-2">
        <label htmlFor="select">Service</label>
        <Select id="select" onValueChange={setOrderService}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select service" />
          </SelectTrigger>
          <SelectContent>
            {OPTIONS.map((option) => (
              <SelectItem 
              key={option.id} value={option.label}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="w-full flex flex-col gap-2">
        <label htmlFor="weight">Estimated Weight (in kg)</label>
        <Input id="weight" type="number" placeholder="Enter weight" min="1"
         onChange={e=>setOrderWeight(e.target.value)}/>
      </div>
      <div className="w-full flex flex-col gap-2">
        <label htmlFor="notes">Other notes</label>
        <Textarea id="notes" type="number" placeholder="Type here.."
         onChange={e=>setOrderNotes(e.target.value)}
        className="resize-none w-100 h-35" />
      </div>

      <Button className="bg-emerald-500 w-full" type="submit">Book it!</Button>
    </form>

    //  <form className="flex flex-col items-center shadow-xl p-10 gap-10 text-slate-700">
    //             <h1 className="font-bold text-2xl">Book an Order</h1>

    //   <div className="flex flex-col gap-2">
    //     <h1 className="font-bold">Customer Information</h1>
    //     <div className="flex gap-2">
    //       <Input type="text" placeholder="Full Name" />
    //       <Input type="tel" placeholder="Phone Number" />
    //     </div>
    //   </div>
    //   <div className="flex flex-col gap-2">
    //     <h1 className="font-bold">Order Details</h1>
    //     <div className="flex gap-2">
    //       <Select>
    //         <SelectTrigger className="w-[180px]">
    //           <SelectValue placeholder="Select Service" />
    //         </SelectTrigger>
    //         <SelectContent>
    //             {OPTIONS.map((option) => (
    //             <SelectItem key={option.id} value={option.label}>
    //               {option.label}
    //             </SelectItem>
    //           ))}

    //         </SelectContent>
    //       </Select>
    //       <Input type="number" placeholder="Estimated Weight (in kg)" />
    //     </div>
    //   </div>
    //   <Button className="bg-emerald-500 w-full">Submit</Button>
    // </form>
  );
}
