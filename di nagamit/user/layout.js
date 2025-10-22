import Header from "../component/layout/Header";

export default function UserLayout({ children }) {
    const userNavBtns = [
    { id: "user_nav_transactions", text: "Transactions", link: "/user/transactions" },
 ];
  
    return (
    <>
    <Header navigationData={userNavBtns} isLoggedIn={true}/>
        <main className="flex min-h-screen overflow-hidden">
            {children}
        </main>
    </>
  );
}
