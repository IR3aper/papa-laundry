import Header from "../component/layout/Header";

export default function AdminLayout({ children }) {

  return (
    <>
    <Header isLoggedIn={true}/>
        <main className="flex min-h-screen overflow-hidden">
            {children}
        </main>
    </>
  );
}
