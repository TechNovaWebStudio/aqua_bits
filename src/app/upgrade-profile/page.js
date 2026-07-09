import MobileNavbar from "@/components/common/MobileNavbar/MobileNavbar";
import SidebarLeft from "@/components/common/SidebarLeft/SidebarLeft";
import UpdateProfile from "@/components/layout/UpdateProfile/UpdateProfile";

export const metadata = {
  title: "Upgrade Profile",
  description: "Upgrade your profile to unlock premium features.",
};

export default function UpgradeProfilePage() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            html, body {
              margin: 0;
              padding: 0;
              min-height: 100vh;
              width: 100%;
              background-color: #f9fafb;
              font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            }

            .app-grid-wrapper {
              display: flex;
              flex-direction: row;
              min-height: 100vh;
              width: 100%;
              position: relative;
            }

            /* Desktop Left Sidebar Anchor */
            .app-grid-wrapper > *:first-child {
              flex-shrink: 0;
              width: 240px;
              z-index: 20;
              position: sticky;
              top: 0;
              height: 100vh;
            }

            /* Core Main Content Scroll Wrapper Stream */
            .main-content-stream {
              flex: 1;
              display: flex;
              flex-direction: column;
              min-width: 0;
              min-height: 100vh;
              overflow-y: auto;
              position: relative;
              background-color: #f9fafb;
            }

            /* Adaptive All Device Breakpoints */
            @media (max-width: 992px) {
              .app-grid-wrapper > *:first-child {
                width: 80px; /* Slimmer sidebar configuration for mid-tier viewports */
              }
            }

            @media (max-width: 768px) {
              .app-grid-wrapper {
                flex-direction: column;
                padding-bottom: 68px; /* Leave clean breathing room for Mobile Bottom Navbar */
              }

              /* Hide Desktop Sidebar on Mobile viewports */
              .app-grid-wrapper > *:first-child {
                display: none !important;
              }

              .main-content-stream {
                min-height: auto;
                height: auto;
                width: 100%;
                overflow-y: visible;
              }
            }
          `,
        }}
      />

      <div className="app-grid-wrapper">
        {/* Left Side Navigation Panel */}
        <SidebarLeft page="upgrade-profile" />

        {/* Dynamic Update Profile Component Stream Container */}
        <main className="main-content-stream">
          <UpdateProfile />
        </main>

        {/* Responsive Mobile Navigation Overlay Asset */}
        <MobileNavbar />
      </div>
    </>
  );
}