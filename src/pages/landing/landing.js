import { StyleLanding, IntroLanding, IntroBtnContainer } from "./landing.style";
import { ButtonTest } from "components/button/button.style";
function Landing() {
  return (
    <>
      <StyleLanding>
        <IntroLanding>
          <h1>Welcome To Emman Computer and CCTV Services</h1>
          <p>Were Ready to serve you with our techinal services</p>
          <IntroBtnContainer>
            <div className="col">
              <div>
                <ButtonTest>Set an Appointment</ButtonTest>
              </div>
              <div>
                <ButtonTest>View Our Services</ButtonTest>
              </div>
            </div>
          </IntroBtnContainer>
        </IntroLanding>
      </StyleLanding>
    </>
  );
}

export default Landing;
