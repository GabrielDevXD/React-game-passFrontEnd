import styled, { css } from "styled-components";
import { Games } from "Mocks/Games";

export const imgUrl = Games.map((games) => games.coverImageUrl);

console.log(imgUrl);

export const Homepage = styled.main`
  ${({ theme }) => css`
    background-image: ${theme.constants.homepageBackground};
    background-repeat: no-repeat;
    background-size: cover;
    filter: grayscale(50%);
    min-width: 100vw;
    min-height: 100vh;
    display: grid;
    justify-items: center;
    align-content: center;
    cursor: default;
  `}
`;

export const CardSection = styled.section`
  ${() => css`
    /* display: grid;
    justify-self: center;
    justify-items: center;
    align-self: center;
    align-items: center;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
    width: 100%;
    height: auto;
  `}
`;

export const ContentCard = styled.div`
    ${({theme}) => css`
        ${theme.mixins.bodyStyle}
        color: #f4f5f9;
        line-height: 1.5rem;
        margin: 1rem .6rem;
    `}
`;

export const TitleGame = styled.h2`
  ${({ theme }) => css`
    ${theme.mixins.subTitleStyle}
    font-size: 1.25rem;
    line-height: 1.25rem;
    color: #f4f5f9;
    text-align: center;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    ::selection {
      background: transparent;
      color: ${theme.colors.textColor};
    }
  `}
`;

export const CoverImageGame = styled.img`
  ${() => css`
    width: 350px;
    height: 400px;
    margin: 0 auto;
    border-radius: 10px;
    cursor: pointer;
  `}
`;

export const ScoreGame = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    margin: .6rem auto;
  `}
`;

export const InfoSection = styled.section`
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%;
    height: auto;
  `}
`;

export const InfoCard = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 300px;
    height: auto;
    margin: 1rem;
    border: 2px solid #000;
    cursor: pointer;
    ${theme.mixins.bodyStyle}
  `}
`;
