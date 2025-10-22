import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function Header({ navigationData, isLoggedIn }) {
  const homeNavBtns = [
    { id: "nav_services", text: "Services", link: "/home/laundry-services" },
    { id: "nav_order", text: "Book Now", link: "/home/order" },
    { id: "nav_tutorial", text: "About Us", link: "/home/about-us" },
  ];

  const userNavBtns = [
    {
      id: "user_nav_transactions",
      text: "Transactions",
      link: "/user/transactions",
    },
  ];
  const adminNavBtns = [
    { id: "admin_nav_orders", text: "Orders", link: "/admin/orders" },
    { id: "admin_nav_accounts", text: "Accounts", link: "/admin/accounts" },
  ];

  console.log(navigationData);

  return (
    <header className="flex gap-10 p-5 w-full items-center justify-between shadow-sm px-5">
      <div className=" flex justify-center items-center">
        <Sparkles className="h-6 w-6 text-emerald-700" />
        <h1 className="font-bold text-md text-emerald-700">
          <a href="/">PAPA LAUNDRY</a>
        </h1>
      </div>

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
    </header>
  );
}
