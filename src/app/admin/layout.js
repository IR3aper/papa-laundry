import AdminHeader from "../component/layout/AdminHeader";

export default function AdminLayout({ children }) {
  return (
    <>
    <AdminHeader/>
        <main className="flex min-h-screen overflow-hidden">
            {children}
        </main>
    </>
  );
}
