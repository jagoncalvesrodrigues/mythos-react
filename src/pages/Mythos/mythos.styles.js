import styled from "styled-components";

const StyeldBoxButtons = styled.div`
    display: flex;
    gap:21px;
    width: 100%;
    height: 37px;
    font-family: ${({$font})=>$font};

    @media screen and (width>=768px){
        padding: 0px 175px 0px 175px;
    }
    @media screen and (width>=1440px){
        padding: 0px 413px 0px 413px;
        height: 49px;
        gap:24px;
    }
`;
const StyeldBoxButtonsChangeType = styled.div`
    display: flex;
    gap:21px;
    width: 100%;
    height: 37px;
    font-family: ${({$font})=>$font};

    @media screen and (width>=768px){
        padding: 0px 175px 0px 175px;
    }
    @media screen and (width>=1440px){
        padding: 0;
        width: 70%;
        flex-direction: column;
        align-items: end;
    }
`;
const StyledSeparatorMythos = styled.img`
    @media screen and (width>=768px){
        display: none;
    }
    @media screen and (width>=1440px){
        display: block;
        width: 185px;
    }
`;
const StyledVerticalSeparator = styled.img`
    display: none;
    @media screen and (width>=768px){
        display: block;
    }
    @media screen and (width>=1440px){
        display: none;
    }
`;
const StyledButtonTypes = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background-color: transparent;
    font-size: 14px;
    color: ${({$colorLetter})=>$colorLetter};
    border: 1px solid ${({$colorLetter})=>$colorLetter};
    @media screen and (width>=768px){
    }
    @media screen and (width>=1440px){
        font-size: 24px;
    }
`;
const StyledButtonTypesBottom = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background-color: transparent;
    font-size: 14px;
    color: ${({$colorLetter})=>$colorLetter};
    border: 1px solid ${({$colorLetter})=>$colorLetter};
    @media screen and (width>=768px){
    }
    @media screen and (width>=1440px){
        width: 50%;
        font-size: 24px;
    }
`;
const StyledDivTablet = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 24px;

    @media screen and (width>=768px){
        flex-direction: row;
    }
    @media screen and (width>=1440px){
        flex-direction: column;
    }
`;
const StyledDivText = styled.div`
    @media screen and (width>=768px){
        width: 60%;
        text-align: left;
    }
    @media screen and (width>=1440px){
        display:none;
    }
`;
const StyledNameType = styled.p`
    font-family: ${({$font})=>$font};
    font-size: 24px;
    font-weight: 700;
    margin: 0;
    `;

const StyledTextType = styled.p`
    color: white;
    @media screen and (width>=768px){
        display: none;
    }
    `;
const StyledTextTypeTablet = styled.p`
    color: white;
    letter-spacing: 1px;
    line-height: 24px;
    display: none;
    @media screen and (width>=768px){
        display: block;
    }

`;
const StyledImgSelected = styled.img`

`;
const StyledDivDesktop = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    @media screen and (width>=1440px){
        padding: 0px 210px 0 250px;
        justify-content: space-between;
    }
`;
const StyledDivTextDesktop = styled.div`
    width: 100%;
    display: none;
    @media screen and (width>=1440px){
        display: block;
        text-align: left;
    }
`;
export {StyledButtonTypesBottom, StyeldBoxButtonsChangeType,StyledDivTextDesktop,StyledDivDesktop,StyledDivTablet,StyledDivText,StyledTextTypeTablet,StyledVerticalSeparator,StyledSeparatorMythos,StyledImgSelected,StyledNameType,StyeldBoxButtons,StyledButtonTypes,StyledTextType}