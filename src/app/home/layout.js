import Header from "../component/layout/Header";
import { Footer } from "../component/layout/Footer";

export default function HomeLayout({children}) {
  return (
    <>
      <Header />
      <div className="flex justify-center">
        <main className="min-h-screen overflow-hidden w-full">{children}</main>
      </div>
      <Footer />
    </>
  );
}
