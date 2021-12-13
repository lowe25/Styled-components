import styled from "styled-components";
import aboutImg from "assets/img/first.jpg";
import { deviceSize } from "base/mediaQueries";
export const AboutImageContainer = styled.div`
    height: 400px;
    background: url(${aboutImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    h1{
      color:white;
      text-align:center;
      position:relative;
      top:45%;
    }
`;

export const AboutCompany = styled.div`
min-height:460px;
text-align:center;
padding:20px;
p{
  padding:25px;
}
@media${deviceSize.mobileScreen}{
  p{
    font-size:14px;
  }
}

`

export const AboutClients = styled.div`
display: grid;
grid-template-columns: repeat(3,auto);
justify-content:center;
gap:20px;
padding:30px;
.img-sizes{
  height:150px;
}

@media${deviceSize.mobileScreenSmall}{
  grid-template-columns: repeat(1,auto);
}

@media${deviceSize.mobileScreenMedium}{
  grid-template-columns: repeat(1,auto);
}

@media${deviceSize.tabletScreenSmall}{
  grid-template-columns: repeat(1,auto);
}

`
export const ClientBox = styled.div`
height:200px;
width:300px;
border:1px solid black;
display:grid;
align-items:center;
justify-content:center;

@media${deviceSize.tabletScreenSmall}{
 width: 420px;
}
`

