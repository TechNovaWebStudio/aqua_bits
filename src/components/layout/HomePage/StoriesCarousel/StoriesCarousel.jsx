"use client";

import { useState, useEffect } from "react";
import "./StoriesCarousel.css";

export default function StoriesCarousel() {
  const [activeStory, setActiveStory] = useState(null);
  const [progress, setProgress] = useState(0);
  const [showViewerList, setShowViewerList] = useState(false);

  // Sample data with view count and user viewer details
  const [stories, setStories] = useState([
    { 
      id: "s1", 
      name: "Merico", 
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      storyImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      isSelf: false,
      views: []
    },
    { 
      id: "s2", 
      name: "James", 
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      storyImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
      isSelf: false,
      views: []
    },
    { 
      id: "s3", 
      name: "Billie", 
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      storyImg: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
      isSelf: false,
      views: []
    },
  ]);

  // Self user's active story data template
  const selfStory = {
    id: "self_1",
    name: "Your Story",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    storyImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    isSelf: true,
    views: [
      { id: "v1", name: "Alex Rivera", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=80&q=80" },
      { id: "v2", name: "Sarah Jenkins", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80" },
      { id: "v3", name: "Marcus Chen", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80" }
    ]
  };

  // Timer logic for progress bars
  useEffect(() => {
    if (!activeStory || showViewerList) return;

    const duration = 5000; // 5 seconds duration
    const intervalTime = 40;
    const increment = (intervalTime / duration) * 100;

    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(timer);
          handleNextStory();
          return 100;
        }
        return oldProgress + increment;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [activeStory, showViewerList]);

  const handleNextStory = () => {
    if (activeStory.isSelf) {
      setActiveStory(null);
      return;
    }
    const currentIndex = stories.findIndex((s) => s.id === activeStory.id);
    if (currentIndex < stories.length - 1) {
      setProgress(0);
      setActiveStory(stories[currentIndex + 1]);
    } else {
      setActiveStory(null);
    }
  };

  const openStory = (story) => {
    setProgress(0);
    setShowViewerList(false);
    setActiveStory(story);
  };

  return (
    <>
      <section className="stories-carousel-strip">
        {/* "Add Yours" / View Your Own Story Node */}
        <div className="story-node-item" onClick={() => openStory(selfStory)}>
          <div className="avatar-ring-border user-self">
            <img src={selfStory.avatar} alt="Self Profile" />
            <div className="add-icon-badge"><i className="fa-solid fa-plus"></i></div>
          </div>
          <span className="story-label-name">Add Yours</span>
        </div>

        {/* Friends Stories */}
        {stories.map((story) => (
          <div key={story.id} className="story-node-item" onClick={() => openStory(story)}>
            <div className="avatar-ring-border">
              <img src={story.avatar} alt={story.name} />
            </div>
            <span className="story-label-name">{story.name}</span>
          </div>
        ))}
      </section>

      {/* Full Screen Story Viewer */}
      {activeStory && (
        <div className="story-fullscreen-overlay" onClick={() => setActiveStory(null)}>
          <div className="story-fullscreen-container" onClick={(e) => e.stopPropagation()}>
            
            {/* Top Progress Bar */}
            <div className="story-progress-wrapper">
              <div className="story-progress-track">
                <div className="story-progress-fill" style={{ width: `${progress}%` }}></div>
              </div>
            </div>

            {/* Top Header User Info Row */}
            <div className="story-header-user">
              <img src={activeStory.avatar} alt={activeStory.name} className="story-header-avatar" />
              <span className="story-header-name">{activeStory.name}</span>
              <button className="story-close-btn" onClick={() => setActiveStory(null)}>✕</button>
            </div>

            {/* Main Immersive Graphic/Photo */}
            <img src={activeStory.storyImg} alt="Story content" className="story-main-render-image" />

            {/* Bottom Counter Area: Show view metrics if it's the current user's story */}
            {activeStory.isSelf && (
              <div className="story-bottom-metrics" onClick={() => setShowViewerList(true)}>
                <div className="view-count-pill">
                  <i className="fa-regular fa-eye"></i>
                  <span>{activeStory.views.length} views</span>
                </div>
                <div className="view-peek-avatars">
                  {activeStory.views.slice(0, 3).map((viewer) => (
                    <img key={viewer.id} src={viewer.avatar} alt={viewer.name} />
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Sheet Modal Drawer: List of viewers */}
            {activeStory.isSelf && showViewerList && (
              <div className="story-viewers-panel">
                <div className="panel-header">
                  <div className="panel-handle"></div>
                  <h3>Viewers ({activeStory.views.length})</h3>
                  <button className="panel-close-btn" onClick={() => setShowViewerList(false)}>✕</button>
                </div>
                <div className="panel-list">
                  {activeStory.views.map((viewer) => (
                    <div key={viewer.id} className="viewer-row-item">
                      <img src={viewer.avatar} alt={viewer.name} className="viewer-row-avatar" />
                      <span className="viewer-row-name">{viewer.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      )}
    </>
  );
}