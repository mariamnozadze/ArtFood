import styled from 'styled-components';
import foodofday from '../../images/foodofday.jpg';

export const FeatureContainer = styled.div`
    background: url(${foodofday});
    height: 100vh;
    max-height: 500px;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
    padding: 0 1rem;

    h1 {
        font-size: 3rem;
    }

    p {
        margin-bottom: 1rem;
        font-size: 1rem;
    }
`

export const FeatureButton = styled.button`
  font-size: 1.4rem;
  padding: 0.6rem 3rem;
  border: none;
  background: #eeb76b;
  color: #000;
  transition: 0.2s ease-out;

  &:hover {
    color: #fff;
    background: #ff4c29;
    transition: 0.2s ease-out;
    cursor: pointer;
  }
`;

