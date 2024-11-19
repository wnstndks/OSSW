import './Header.css'; // 스타일을 따로 관리하고 싶다면 CSS 파일 추가

function Header() {
  return (
    <header className="header">
      <h1>MARIO UNLEASHED</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
