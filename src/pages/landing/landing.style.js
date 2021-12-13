import styled from "styled-components";
import { deviceSize } from "base/mediaQueries";
import landingImg from "assets/img/landing.jpg";

export const StyleLanding = styled.div`
  height: 100vh;
  background: url(${landingImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
export const IntroLanding = styled.div`
  display: grid;
  justify-content: center;
  position: relative;
  top: 20%;
  text-align: center;
  padding: 20px;
  color: white;
  @media${deviceSize.mobileScreen} {
    h1,
    p {
      font-size: 16px;
      padding:10px;
    }
  }
`;
export const IntroBtnContainer = styled.div`
.col{
  display: grid;
   grid-template-columns:repeat(2,auto);
    gap:10px;
    justify-content:center;
    padding:30px;
}

    @media${deviceSize.mobileScreen}{
   .col{ 
    grid-template-columns:repeat(1,auto)
   }
}
}
`;
