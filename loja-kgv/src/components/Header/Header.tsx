import logo from "/images/kgv-logo.png";

export default function Header() {
  return (
    <header className="cabecalho">
      <img src={logo} alt="Logo KGV" className="logoCabecalho"/>
      <nav>
        <ul className="paginas">
          <li><a href="#">Rent</a></li>
          <li><a href="#">Buy</a></li>
          <li><a href="#">Sell</a></li>
        </ul>
      </nav>
    </header>
  )
}
