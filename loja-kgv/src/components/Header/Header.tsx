import logo from "/images/kgv-logo.png";
import styles from "./Header.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

export default function Header() {
  return (
      <header className={styles.cabecalho}>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
    <div className="navbar-brand">
        <img src={logo} alt="Bootstrap" width="100" height="100"/>
      </div>        
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse w-50" id="navbarSupportedContent">
        <ul className="navbar-nav mb-2 mb-lg-0 ms-auto w-50 justify-content-around">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Rent</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Buy</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Sell</a>
          </li>

        </ul>
      </div>
    </div>
  </nav>
  </header>
  )
}
