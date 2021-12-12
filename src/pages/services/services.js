import { StyleServices } from "./services.style";
function Services() {
  return (
    <StyleServices>
      <div className="services-img">
        <h1>Services Offered</h1>
      </div>

      <div className="services-list">
        <div className="services-box">Computer/Laptop Repair</div>
        <div className="services-box"> Data Recovery</div>
        <div className="services-box">CCTV Installation and Repair</div>
        <div className="services-box">Biometric Installation</div>
        <div className="services-box">Network and LAN Installation</div>
        <div className="services-box"> Computer and Web Programming</div>
      </div>
    </StyleServices>
  );
}

export default Services;
