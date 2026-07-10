import MobileNavbar from "@/components/common/MobileNavbar/MobileNavbar";
import SidebarLeft from "@/components/common/SidebarLeft/SidebarLeft";
import CreateShort from "@/components/layout/CreateShorts/CreateShort";

export const metadata = {
  title: "Create Shorts",
  description: "Create and upload a new short video.",
};

export default function ShortsCreatePage() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .app-grid-wrapper {
              display: flex;
              width: 100%;
              height: 100vh;
              overflow: hidden;
            }

            .app-grid-wrapper > *:first-child {
              width: 240px;
              flex-shrink: 0;
            }

            .main-content-stream {
              flex: 1;
              display: flex;
              justify-content: center;
              align-items: flex-start;
              padding: 30px;
              overflow-y: auto;
              overflow-x: hidden;
              background: #f9fafb;
            }

            @media (max-width: 768px) {
              .app-grid-wrapper {
                flex-direction: column;
              }

              .app-grid-wrapper > *:first-child {
                display: none !important;
              }

              .main-content-stream {
                height: calc(100vh - 60px);
                padding: 16px;
                overflow-y: auto;
              }
            }
          `,
        }}
      />

      <div className="app-grid-wrapper">
        <SidebarLeft page="shorts-create" />

        <main className="main-content-stream">
          <CreateShort />
        </main>

        <MobileNavbar />
      </div>
    </>
  );
}