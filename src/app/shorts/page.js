import MobileHeader from "@/components/common/MobileHeader/MobileHeader";
import MobileNavbar from "@/components/common/MobileNavbar/MobileNavbar";
import SidebarLeft from "@/components/common/SidebarLeft/SidebarLeft";
import VideoPlay from "@/components/layout/VideoPlay/VideoPlay";
// import VideoPlay from "@/components/layout/VideoPlay/VideoPlay";

export const metadata = {
  title: "Shorts",
  description: "short list page",
};

export default function VideoDetails() {
  return (
    <>
      {/* Structural Global Styles overriding layouts to enforce 100vh constraint */}
      <style dangerouslySetInnerHTML={{__html: `
        
        
        .app-grid-wrapper {
          display: grid;
          grid-template-columns: 240px 1fr;
          height: 100vh;
          width: 100vw;
          overflow: hidden;
        }

        .main-content-stream {
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        /* Desktop specific alignments */
        @media (min-width: 769px) {
          .mobile-only {
            display: none !important;
          }
        }

        /* Mobile specific layout structures and alignment modifications */
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
        {/* Fixed Left Desktop Sidebar — Hidden automatically on mobile */}
        <div className="desktop-only">
          <SidebarLeft />
        </div>
        
        <main className="main-section">
          {/* Optional: Mobile Header wrapper if needed */}
          {/* <div className="mobile-only"><MobileHeader /></div> */}
          <VideoPlay />
        </main>

        {/* Fixed Bottom Mobile App-bar Nav — Hidden automatically on desktop */}
        <div className="mobile-only">
          <MobileNavbar />
        </div>
      </div>
    </>
  );
}