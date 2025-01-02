import styled from "styled-components";

const StyledImgBanner = styled.picture`
    width: 100%;
    height: 100%;
`;
const StyledImg = styled.img`
    width: 100%;
    height: 100%;
`;
const StyledMain = styled.div`
    width: 100%;
    height: 100%;
    padding: 24px 20px;
    text-align: center;
    color: ${({$color})=>$color};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    
    @media screen and (width>=768px){
        
    }
    @media screen and (width>=1440px){
        padding: 46px 74px;
    }
`;

const StyledTitle = styled.h1`
    font-family: ${({$font})=>$font};
    margin: 0;

    @media screen and (width>=768px){
        font-size: 32px;
    }
    @media screen and (width>=1440px){
        font-size: 46px;
    }

`;
const StyledBoxMythologies = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 27px;

    @media screen and (width>=768px){
        display: flex;
        width: 100%;
        margin-bottom: 63px;
        justify-content: space-between;
    }
    @media screen and (width>=1440px){
        width: 860px;
        margin-bottom: 46px;
    }
    `;
const StyledPhrase = styled.p`
    margin: 0;
    font-family: ${({$font})=>$font};
    font-weight: 300;
    font-style: italic;
    font-size: 24px;
    letter-spacing: 4%;
    color: white;

    @media screen and (width>=768px){
        
    }
    @media screen and (width>=1440px){
        width: 880px;
        font-size: 46px;
    }
    `;
const StyledParagraph = styled.p`
    margin: 0;
    line-height: 28px;
    letter-spacing: 4%;
    font-weight: 400;
    @media screen and (width>=1440px ){
        display: none;
    }
    `;  

const StyledSeparator = styled.img`
    @media screen and (width>=1440px){
        display: none;
    }
`;
const StyledBoxParagraphDesk = styled.div`
    display: none;

    @media screen and (width>=1440px){
        display: flex;
    }
`;
const StyledParagraphDesk = styled.p`
    line-height: 40px;
    font-size: 16px;
    letter-spacing: 4%;
    width: 587px;

    &:first-child {
        text-align: left;
        margin-right: 122px;
    }

    &:last-child {
        text-align: right;
    }
`;
const StyledSeparatorDesktop = styled.img`
    display: none;
    @media screen and (width>=1440px ){
        display: block;
        width: 184px;
    }
`;

export {StyledParagraphDesk,StyledBoxMythologies,StyledBoxParagraphDesk,StyledImg,StyledImgBanner,StyledMain,StyledParagraph,StyledPhrase,StyledSeparator,StyledSeparatorDesktop,StyledTitle}