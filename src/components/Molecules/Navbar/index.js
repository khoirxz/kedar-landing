import "./style.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="title">Kedar</h1>

        <ul className="navbar-item">
          <li>Home</li>
          <li>Tentang</li>
          <li>Layanan</li>
        </ul>

        <ul className="navbar-item">
          <li>Masuk</li>
          <li>
            <button>daftar</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
