import MobileHeader from "@/components/common/MobileHeader/MobileHeader";
import MobileNavbar from "@/components/common/MobileNavbar/MobileNavbar";
import SidebarLeft from "@/components/common/SidebarLeft/SidebarLeft";
import VideoPlay from "@/components/layout/VideoPlay/VideoPlay";

export const metadata = {
  title: "Video Details",
  description: "Video details page.",
};

export default function VideoDetails() {
  return (
    <>
      {/* Structural Global Styles overriding layouts to enforce 100vh constraint */}
      <style dangerouslySetInnerHTML={{__html: `
        html, body {
          margin: 0;
          padding: 0;
          height: 100vh;
          width: 100vw;
          overflow: hidden;
          background-color: #ffffff;
        }
        
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

        /* Mobile specific layout structures */
        @media (max-width: 768px) {
          .app-grid-wrapper {
            grid-template-columns: 1fr;
            grid-template-rows: auto 1fr auto;
            height: 100vh;
          }
        }
      `}} />

      <div className="app-grid-wrapper">
        {/* Fixed Left Desktop Sidebar */}
        <SidebarLeft />
        
        <main className="main-content-stream">
          {/* <MobileHeader /> */}
          <VideoPlay />
        </main>

        {/* Fixed Bottom Mobile App-bar Nav */}
        <MobileNavbar />
      </div>
    </>
  );
}