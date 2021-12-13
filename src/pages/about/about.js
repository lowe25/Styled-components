import {
  AboutImageContainer,
  AboutCompany,
  AboutClients,
  ClientBox
} from "pages/about/about.style";

import img1 from "assets/img/generics.png";
import img2 from "assets/img/tv5.png";
import img3 from "assets/img/water.png";
function About() {
  return (
    <>
      <AboutImageContainer>
        <h1>Our Company</h1>
      </AboutImageContainer>
      <AboutCompany>
        <h1>About</h1>
        <p>
          Emman Computer and CCTV Installation Services. First started as a
          small electronics repair shop back in panguil laguna in 2015,
          <br/>then
          grew their services to computer repair and CCTV Installation since
          then it served hundreds of customers across the philippines.
        </p>
        <h1>Clients</h1>
        <AboutClients>
         <ClientBox>
           <img src={img1} className="img-sizes" alt="Generics Logo"></img>
         </ClientBox>

         <ClientBox>
         <img src={img2} className="img-sizes" alt="Tv5 Logo"></img>
         </ClientBox>

         <ClientBox>
         <img src={img3} className="img-sizes" alt="Water Logo"></img>
         </ClientBox>
        </AboutClients>
      </AboutCompany>
    </>
  );
}

export default About;
