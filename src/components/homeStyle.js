import styled from "styled-components";
import back from "../assets/backview.webp";

export const Homecont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100vw;
  height: 90vh;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0) 13.647%
    ),
    rgba(0, 0, 0, 0.3);
  background-image: url(${back});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const CheckCont = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 8px 12px 8px;
gap: 10px;
`

export const SearchDiv = styled.div`
border-radius: 32px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 32px 12px 32px;
background: rgb(255, 255, 255);
`

//navbar styles
export const Navcont = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
width: 100vw;


  h1 {
    color: rgb(255, 255, 255);
    font-family: Helvetica;
    font-size: 32px;
    font-weight: 700;
    line-height: 37px;
   text-align: left;
  }

`;

export const World = styled.div`
display: flex;
justify-content: start;
align-items: center;
width: 75%;
h1{
    color: rgb(255, 255, 255);
font-family: Helvetica;
font-size: 72px;
font-weight: 700;
line-height: 83px;
letter-spacing: 0%;
text-align: left;
padding-top: 50px;
width: 80%;
}
`
export const Elements = styled.div`
  display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
   width: 35%;

    p{
        color: rgb(255, 255, 255);
font-family: Helvetica;
font-size: 16px;
font-weight: 400;
line-height: 18px;
letter-spacing: 0%;
text-align: left;

    }
   p:hover{
border: 1px solid rgb(255, 255, 255);
cursor: pointer;
opacity: 0.7;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: flex-start;
   }

`
export const SerachCont = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
padding: 12px 8px 12px 8px;
border-radius: 16px;
backdrop-filter: blur(32px);
background: rgba(255, 255, 255, 0.4);
width: 90%;
height: 60px;
`
