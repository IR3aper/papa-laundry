import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sparkles } from "lucide-react";



export default function Header({ admin }) {
  const homeNavBtns = [
    { id: "nav_services", text: "Services", link: "/home/laundry-services" },
    { id: "nav_order", text: "Book Now", link: "/home/order" },
    { id: "nav_tutorial", text: "About Us", link: "/home/about-us" },
    { id: "nav_admin", text: "Log In", link: "/admin" },
  ];

  return (
    <header className="flex gap-10 p-5 w-full items-center justify-between shadow-md px-5 opacity-75">
      <div className=" flex justify-center items-center text-xl">
        <Sparkles className="h-6 w-6 text-emerald-700" />
        <h1 className="font-bold text-emerald-700">
          <a href={!admin ? "/": "/admin" }>PAPALAUNDRY</a>
        </h1>
      </div>

      {!admin ?
        <nav className="flex justify-center">
          <ul className="flex gap-10">
            {homeNavBtns.map((nav) => (
              <li
                key={nav.id}
                className="text-md font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                <Link href={nav.link}>{nav.text}</Link>
              </li>
            ))}
          </ul>
        </nav>

        : <a href="/">Log Out</a>}


    </header>
  );
}
