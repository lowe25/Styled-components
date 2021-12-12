import styled from "styled-components";
import landingImg from "assets/img/landing.jpg";
export const StyleLanding = styled.div`
  height: 100vh;
  background: url(${landingImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  .intro {
    height: 400px;
  }
  .sass {
    display: grid;
    justify-content: center;
    position:relative;
    top:155%;
    text-align: center;
    padding:20px;
  }

  .introBtn-container {
      display:flex;
      gap:10px;
      justify-content:center;
      padding:20px;
  }
`;
