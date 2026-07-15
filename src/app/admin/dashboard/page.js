import Sidebar from "@/components/admin/common/Sidebar/Sidebar";
import AdminDashboard from "@/components/admin/layout/Dashboard/Dashboard";
import styles from "./dashboard.module.css"; 

export const metadata = {
  title: "Pharmly - Pharmacy Management Dashboard",
  description: "Manage products, track stock, and monitor analytics.",
};

export default function Home() {
  return (
    <div className={styles.layoutContainer}>
      {/* Sidebar Wrapper */}
      <aside className={styles.sidebarWrapper}>
        <Sidebar />
      </aside>
      
      {/* Dashboard Wrapper */}
      <main className={styles.mainContent}>
        <AdminDashboard />
      </main>
    </div>
  );
}