import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AdminHeader() {
  const navBtns =[
    {
      id: 'admin_orders',
      label:"Orders",
      link:"/admin/orders"
    },
    {
      id: 'admin_accounts',
      label:"Accounts",
      link:"/admin/accounts"
    }
  ]
  return (
    <header className="flex gap-10 p-5 w-full items-center justify-between">
      <h1 className="font-extrabold text-2xl">
        <a href="/admin">PAPA LAUNDRY</a>
      </h1>
      <nav className=" flex justify-center items-center">
        <ul className="flex gap-10">
          {navBtns.map((nav)=>(
          <li key={nav.id} className="text-md font-medium text-foreground/80 hover:text-foreground transition-colors">
            <Link href={nav.link}>{nav.label}</Link>
          </li>
          ))}
        </ul>
      </nav>
      <div className="flex gap-5 justify-center items-center">
        <Link href="/">
          <Button className='bg-slate-700'>Log Out</Button>
          </Link>
      </div>
    </header>
  );
}
