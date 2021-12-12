import { StyleAbout } from "./about.style";
function About() {
  return (
    <StyleAbout>
      <div class="aboutImg-landing">
        <h1>Our Company</h1>
      </div>

      <div class="about-company">
        <h1>About</h1>
        <p>
          Emman Computer and CCTV Installation Services. First started as a
          small electronics repair shop back in panguil laguna in 2015, then
          grew their services to computer repair and CCTV Installation since
          then it served hundreds of customers across the philippines.{" "}
        </p>
      </div>

      <div className="about-clients">
        <h2>Clients</h2>
        <div className="clients">
            
        </div>
      </div>
    </StyleAbout>
  );
}

export default About;
