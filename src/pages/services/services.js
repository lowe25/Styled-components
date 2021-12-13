import { ServicesImg, ServicesContainer, ServicesBox } from "./services.style";
function Services() {
  return (
    <>
      <ServicesImg>
        <h1>Services Offered</h1>
      </ServicesImg>

      <ServicesContainer>
        <ServicesBox>
          <div className="services-logo">
          <p><i class="fas fa-desktop fa-5x"></i></p>
          </div>
          <div className="services">
            <p>Computer/Laptop Repair</p>
          </div>
        </ServicesBox>

        <ServicesBox>
          <div className="services-logo">
          <p><i class="fas fa-database fa-5x"></i></p>
          </div>
          <div className="services">
            <p>Data Recovery</p>
          </div>
        </ServicesBox>

        <ServicesBox>
          <div className="services-logo">
          <p><i class="fas fa-video fa-5x"></i> </p>
          </div>
          <div className="services">
            <p>CCTV Installation And Repair</p>
          </div>
        </ServicesBox>

        <ServicesBox>
          <div className="services-logo">
          <p><i class="fas fa-fingerprint fa-5x"></i></p>
          </div>
          <div className="services">
            <p>Biometric Installation</p>
          </div>
        </ServicesBox>

        <ServicesBox>
          <div className="services-logo">
          <p><i class="fas fa-network-wired fa-5x"></i></p>
          </div>
          <div className="services">
            <p>Network and LAN Installation</p>
          </div>
        </ServicesBox>

        <ServicesBox>
          <div className="services-logo">
          <p><i class="fas fa-laptop-code fa-5x"></i></p>
          </div>
          <div className="services">
            <p>Computer and Web Programming</p>
          </div>
        </ServicesBox>
      </ServicesContainer>
    </>
  );
}

export default Services;
