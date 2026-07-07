import "./StoriesCarousel.css";

export default function StoriesCarousel() {
  const stories = [
    { name: "Merico", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" },
    { name: "James", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80" },
    { name: "Billie", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" },
  ];

  return (
    <section className="stories-carousel-strip">
      <div className="story-node-item add-yours-node">
        <div className="avatar-ring-border">
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" alt="Self Profile" />
          <div className="add-icon-badge"><i className="fa-solid fa-plus"></i></div>
        </div>
        <span className="story-label-name">Add Yours</span>
      </div>
      {stories.map((story, idx) => (
        <div key={idx} className="story-node-item">
          <div className="avatar-ring-border">
            <img src={story.img} alt={story.name} />
          </div>
          <span className="story-label-name">{story.name}</span>
        </div>
      ))}
    </section>
  );
}