import styled from "styled-components";
import img1 from "assets/img/services.jpg";
import { deviceSize } from "base/mediaQueries";

export const ServicesImg = styled.div`
  height: 400px;
  background: url(${img1});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  h1 {
    color: white;
    text-align: center;
    position: relative;
    top: 40%;
    font-size: 45px;
  }
`;

export const ServicesContainer = styled.div`
  min-height: 450px;
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: center;
  gap: 20px;
  padding: 30px;

  @media${deviceSize.mobileScreenSmall}{
    grid-template-columns: repeat(1, auto);
  }

  @media${deviceSize.mobileScreenMedium}{
    grid-template-columns: repeat(1, auto);
  }

  @media ${deviceSize.tabletScreenSmall}{
    grid-template-columns: repeat(2, auto);
  }
`;

export const ServicesBox = styled.div`
  height: 200px;
  width: 300px;
  border: 1px solid black;

  .services-logo {
    height: 150px;
    display: grid;
    align-items: center;
    text-align: center;
  }
  .services {
    text-align: center;
  }
`;
