import MobileHeader from "@/components/common/MobileHeader/MobileHeader";
import MobileNavbar from "@/components/common/MobileNavbar/MobileNavbar";
import SidebarLeft from "@/components/common/SidebarLeft/SidebarLeft";
import VideoPlay from "@/components/layout/VideoPlay/VideoPlay";

export const metadata = {
  title: "Show Short",
  description: "Show single short",
};

export default async function VideoDetails({ params }) {
  // Await the params to safely read the dynamic ID
  const resolvedParams = await params;
  const id = resolvedParams?.id;

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .app-grid-wrapper {
          display: grid;
          grid-template-columns: 240px 1fr;
          height: 100vh;
          width: 100vw;
          overflow: hidden;
        }

        .main-section {
          height: 100%;
          width: 100%;
          overflow: hidden;
        }

        @media (min-width: 769px) {
          .mobile-only {
            display: none !important;
          }
        }

        @media (max-width: 768px) {
          .app-grid-wrapper {
            grid-template-columns: 1fr;
            grid-template-rows: auto 1fr auto;
            height: 100vh;
            width: 100vw;
          }
          
          .desktop-only {
            display: none !important;
          }
        }
      `}} />

      <div className="app-grid-wrapper">
        <div className="desktop-only">
          <SidebarLeft />
        </div>
        
        <main className="main-section">
          {/* <div className="mobile-only"><MobileHeader /></div> */}
          <VideoPlay id={id} />
        </main>

        <div className="mobile-only">
          <MobileNavbar />
        </div>
      </div>
    </>
  );
}