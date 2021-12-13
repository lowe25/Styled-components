import styled from "styled-components";
import { deviceSize } from "base/mediaQueries";

export const ContactLanding = styled.div`
  min-height: 200px;
  background-color: #1c2833;
  color: #f4f4f4;
  text-align: center;
  padding: 40px;
  h1 {
    padding: 10px;
    font-size: 25px;
  }
`;

export const ContactForm = styled.div`
  min-height: 400px;

  padding: 40px;
  label {
    display: block;
    padding: 10px;
    text-align: center;
  }
  .txtBox {
    height: 40px;
    width: 600px;
  }
  .txtArea {
    height: 150px;
    width: 600px;
  }
  @media${deviceSize.mobileScreenSmall} {
    .txtBox,
    .txtArea {
      width: 100%;
    }
  }

  @media${deviceSize.mobileScreenMedium}{
    .txtBox,
    .txtArea {
      width: 100%;
    }
  }
`;

export const ContactOffices = styled.div`
  .reg {
    min-height: 200px;
    display: grid;
    grid-template-columns:repeat(2,auto);
    justify-content: center;
    
    gap: 20px;
    padding: 20px;
  }

  @media${deviceSize.mobileScreenSmall} {
    .reg {
        grid-template-columns:repeat(1,auto);
      justify-content: center;
    }
  }

  @media${deviceSize.mobileScreenMedium}{
    .reg {
        grid-template-columns:repeat(1,auto);
      justify-content: center;
    }
  }
`;

export const ContactBox = styled.div`
  height: 200px;
  width: 290px;
  border: 1px solid black;
  padding: 25px;
  font-size: 14px;

  .fas {
    padding: 12px;
  }

  @media${deviceSize.mobileScreenMedium}{
    width: 400px;
  }
`;
