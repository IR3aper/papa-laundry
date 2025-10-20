"use client";
import { useEffect, useState } from "react";
import { ProcessingOrders} from "../component/custom/ProcessingOrders";

import db from "../utils/firestore"
import { collection, getDocs, onSnapshot } from "@firebase/firestore";


export default function Admin() {

  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen p-10 gap-10">
      <ProcessingOrders/>
    </main>
  );
}
