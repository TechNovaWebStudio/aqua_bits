export const dynamic = "force-dynamic";
import MobileNavbar from "@/components/common/MobileNavbar/MobileNavbar";
import SidebarLeft from "@/components/common/SidebarLeft/SidebarLeft";
import PetDetails from "@/components/layout/PetDetailsPage/PetDetails";
import { POSTS_DATA } from "../../../../public/data";

export const metadata = {
  title: "Video Details",
  description: "Video details page.",
};

export default async function VideoDetails({ params }) {
  // Await params to ensure compatibility across Next.js versions (e.g., Next.js 15)
  const resolvedParams = await params;
  const targetId = parseInt(resolvedParams.id, 10);

  // Locate matching post data from your array
  const matchedPost = POSTS_DATA.find((item) => item.id === targetId) || null;

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
          display: flex;
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
          min-width: 0;
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
            height: calc(100vh - 60px);
            width: 100%;
          }
        }
      `}}
      />

      <div className="app-grid-wrapper">
        {/* Fixed Left Desktop Sidebar */}
        <SidebarLeft />

        <main className="main-content-stream">
          {/* Feed the fetched object straight into the details layout component */}
          <PetDetails post={matchedPost} />
        </main>

        {/* Fixed Bottom Mobile App-bar Nav */}
        <MobileNavbar />
      </div>
    </>
  );
}