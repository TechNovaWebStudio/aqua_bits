import "./MobileHeader.css";

export default function MobileHeader() {
  return (
    <header className="native-mobile-header">
      <h1 className="app-logo">Aqua_Bits</h1>
      <div className="native-header-icons">
        <i className="fa-regular fa-heart"></i>
        <i className="fa-regular fa-comment-dots"></i>
      </div>
    </header>
  );
}