import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import porsche1 from "/cars/carousel-img/porsche-gt3.png";
import porsche2 from "/cars/carousel-img/porsche-911.png";
import porsche3 from "/cars/carousel-img/porsche-911.png";

export default function Carousel() {
  return (
    <div className="carrossel">
    <div id="carouselExampleAutoplaying" className="carousel slide col-9 mx-auto" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
        <h1 className="nomeCarro">Porsche GT3 RS</h1>
      <img src={porsche1} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
    <h1 className="nomeCarro">Porsche 911</h1>
      <img src={porsche2} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
    <h1 className="nomeCarro">Porsche 911</h1>
      <img src={porsche3} className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
  )
}
