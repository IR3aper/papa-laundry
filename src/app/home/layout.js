import Header from "../component/layout/Header";
import { Footer } from "../component/layout/Footer";

export default function HomeLayout({children}) {

   const homeNavBtns = [
    { id: "nav_services", text: "Services", link: "/home/laundry-services" },
    { id: "nav_order", text: "Book Now", link: "/home/order" },
    { id: "nav_tutorial", text: "About Us", link: "/home/about-us" },
  ];

 
  return (
    <>
      <Header navigationData={homeNavBtns} />
      <div className="flex justify-center">
        <main className="min-h-screen overflow-hidden w-full">{children}</main>
      </div>
      <Footer />
    </>
  );
}
