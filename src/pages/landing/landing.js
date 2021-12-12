import { StyleLanding } from "./landing.style";
function Landing() {
  return (
    <>
      <StyleLanding>
        <div className="intro-container">
          <div className="sass">
            <h1>Welcome To Emman Computer and CCTV Services</h1>
            <p>Were Ready to serve you with our techinal services</p>
            <div className="introBtn-container">
              <input type="button" value="Set an Appointment"></input>
              <input type="button" value="View Our Services"></input>
            </div>
          </div>
        </div>
      </StyleLanding>
    </>
  );
}

export default Landing;
