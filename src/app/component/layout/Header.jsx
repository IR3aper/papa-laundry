import Link from "next/link";
//import { Button } from "@/components/ui/button"

export default function Header() {
  const navBtns = [
    { id: "nav_services", text: "Services", link: "/home/laundry-services"  },
    { id: "nav_order", text: "Book an Order", link: "/home/order" },
    { id: "nav_tutorial", text: "About Us", link: "/home/about-us" },
  ];
  return (
    <header className="flex gap-10 p-5 w-full items-center justify-between shadow-sm">
      <h1 className="font-extrabold text-2xl"><a href="/">PAPA LAUNDRY</a></h1>
      <nav className="flex-1 flex justify-center">
        <ul className="flex gap-10">
          {navBtns.map((nav) => (
            <li key={nav.id} className="text-md font-medium text-foreground/80 hover:text-foreground transition-colors">
              <Link href={nav.link}>{nav.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex gap-5 justify-center items-center">
        <Link href="/home/login" className="text-md font-medium text-foreground/80 hover:text-foreground transition-colors">Log In</Link>
        <Link href="/home/register">
       
        </Link>
     </div>
    </header>
  );
}
