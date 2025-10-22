import Header from "../component/layout/Header";
import { Footer } from "../component/layout/Footer";

export default function HomeLayout({ children }) {

  return (
    <>
    <Header/>
        <main className="flex min-h-screen overflow-hidden  bg-gradient-to-b from-[#E3F2F4] to-[#A0D9C9]">
            {children}
        </main>
    <Footer/>
    </>
  );
}
