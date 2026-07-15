export const metadata = {
  title: "Admin",
  description: "Admin Dashboard",
};

export default function AdminPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f8fafc",
        padding: "20px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: "500px",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            marginBottom: "16px",
            color: "#111827",
          }}
        >
          Admin Dashboard
        </h1>

        <p
          style={{
            fontSize: "1rem",
            color: "#6b7280",
          }}
        >
          🚧 This page is under development. Admin features will be available
          soon.
        </p>
      </div>
    </main>
  );
}