import styled from "styled-components";
import banner from "../../images/banner.jpg";

export const HeroContainer = styled.div`
  background: url(${banner});
  height: 100vh;
  width: 100vw;
  background-position: center;
  background-size: cover;
`;

export const HeroContent = styled.div`
    height: calc(100vh-80px);
    max-height: 100%;
    width: 100vw;
    padding: 0rem;
`

export const HeroItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    max-height: 100%;
    padding: 2rem;
    width: 650px;
    color: #fff;
    text-transform: uppercase;
    line-height: 1;
    font-weight: bold;

    @media screen and (max-width: 650px) {
        width: 100vw;
    }
`

export const HeroH1 = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  box-shadow: 3px 5px #eeb76b;
  letter-spacing: 3px;
`;

export const HeroP = styled.div`
    font-size: 2rem;
    margin-bottom: 2rem;   
`

export const HeroBtn = styled.div`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #ff4c29;
  color: #fff;
  transition: 0.1s ease-out;

  &:hover {
    background: #eeb76b;
    transition: 02s ease-out;
    cursor: pointer;
    color: #000;
  }
`;

