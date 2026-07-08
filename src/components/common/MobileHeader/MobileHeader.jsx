import "./MobileHeader.css";

export default function MobileHeader() {
  return (
    <header className="ios-liquid-header">
      <h1 className="app-logo">Aqua_Bits</h1>
      <div className="native-header-icons">
        <button className="header-icon-btn" aria-label="Favorites">
          <i className="fa-regular fa-heart"></i>
        </button>
        <button className="header-icon-btn" aria-label="Messages">
          <i className="fa-regular fa-comment-dots"></i>
        </button>
      </div>
    </header>
  );
}