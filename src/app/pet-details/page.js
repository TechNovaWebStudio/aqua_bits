import MobileHeader from "@/components/common/MobileHeader/MobileHeader";
import MobileNavbar from "@/components/common/MobileNavbar/MobileNavbar";
import SidebarLeft from "@/components/common/SidebarLeft/SidebarLeft";
import PetDetails from "@/components/layout/PetDetailsPage/PetDetails";
import VideoPlay from "@/components/layout/VideoPlay/VideoPlay";

export const metadata = {
    title: "Video Details",
    description: "Video details page.",
};

export default function VideoDetails() {
    return (
        <>
            {/* Structural Global Styles overriding layouts to enforce 100vh constraint */}
            <style dangerouslySetInnerHTML={{
                __html: `
        html, body {
          margin: 0;
          padding: 0;
          height: 100vh;
          width: 100vw;
          overflow: hidden;
          background-color: #ffffff;
        }
        
        .app-grid-wrapper {
          display: flex; /* Changed from grid to flex to eliminate overlap */
          flex-direction: row;
          height: 100vh;
          width: 100vw;
          overflow: hidden;
          position: relative;
        }

        /* Prevent sidebar compression and keep its clean 240px space */
        .app-grid-wrapper > *:first-child {
          flex-shrink: 0;
          width: 240px; 
          z-index: 10;
        }

        .main-content-stream {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-width: 0; /* Important: Prevents flex children from breaking width boundaries */
          height: 100%;
          overflow: hidden;
          position: relative;
          background-color: #ffffff;
        }

        /* Mobile Layout Configuration */
        @media (max-width: 768px) {
          .app-grid-wrapper {
            flex-direction: column;
          }

          /* Hide desktop sidebar entirely on mobile screen views */
          .app-grid-wrapper > *:first-child {
            display: none !important;
          }

          .main-content-stream {
            height: calc(100vh - 60px); /* Adjusts perfectly for your bottom mobile navbar height */
            width: 100%;
          }
        }
      `}}
            />

            <div className="app-grid-wrapper">
                {/* Fixed Left Desktop Sidebar */}
                <SidebarLeft />

                <main className="main-content-stream">
                    <PetDetails />
                </main>

                {/* Fixed Bottom Mobile App-bar Nav */}
                <MobileNavbar />
            </div>
        </>
    );
}