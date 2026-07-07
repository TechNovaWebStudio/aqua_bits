import HighlightsGrid from "@/components/layout/HomePage/HighlightsGrid/HighlightsGrid";
import MobileHeader from "@/components/common/MobileHeader/MobileHeader";
import MobileNavbar from "@/components/common/MobileNavbar/MobileNavbar";
import SidebarLeft from "@/components/common/SidebarLeft/SidebarLeft";
import SidebarRight from "@/components/layout/HomePage/SidebarRight/SidebarRight";
import StoriesCarousel from "@/components/layout/HomePage/StoriesCarousel/StoriesCarousel";
import TimelineFeed from "@/components/layout/HomePage/TimelineFeed/TimelineFeed";


export default function Home() {
  return (
    <div className="app-grid-wrapper">
      {/* Fixed Left Desktop Sidebar */}
      <SidebarLeft />

      {/* Main Stream Column */}
      <main className="main-content-stream">
        <MobileHeader />
        
        <StoriesCarousel />
        
        <HighlightsGrid />
        
        <TimelineFeed />
      </main>

      {/* Fixed Right Context Discovery Sidebar */}
      <SidebarRight />

      {/* Fixed Bottom Mobile App-bar Nav */}
      <MobileNavbar />
    </div>
  );
}