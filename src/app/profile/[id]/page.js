import MobileNavbar from "@/components/common/MobileNavbar/MobileNavbar";
import SidebarLeft from "@/components/common/SidebarLeft/SidebarLeft";
import { ProfileSection } from "@/components/layout/ProfileCarts/Profile";

export const metadata = {
    title: "Breeder Profile",
    description: "Breeder Profile page.",
};

// 1. Mark the function as async
export default async function DynamicProfilePage({ params }) {
    
    // 2. Await the params promise to extract the id
    const resolvedParams = await params;
    const profileId = resolvedParams?.id;

    return (
        <>
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
        
                @media (max-width: 768px) {
                  .app-grid-wrapper {
                    flex-direction: column;
                  }
        
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
                <SidebarLeft />

                <main className="main-content-stream">
                    {/* 3. Pass the successfully unwrapped profileId */}
                    <ProfileSection profileId={profileId} />
                </main>

                <MobileNavbar />
            </div>
        </>
    );
}