import Header from "../component/layout/Header";

export default function AdminLayout({ children }) {
    const adminNavBtns = [
    { id: "admin_nav_accounts", text: "Accounts", link: "/admin/accounts" },
 ];

  
  return (
    <>
    <Header navigationData={adminNavBtns} isLoggedIn={true}/>
        <main className="flex min-h-screen overflow-hidden">
            {children}
        </main>
    </>
  );
}
