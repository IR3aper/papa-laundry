import Header from "../component/layout/Header";

export default function AdminLayout({ children }) {

  return (
    <>
    <Header admin={true}/>
        <main className="flex min-h-screen overflow-hidden  bg-gradient-to-b from-[#E3F2F4] to-[#A0D9C9]">
            {children}
        </main>
    </>
  );
}
