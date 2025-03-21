import styled from "styled-components";

const StyledNav = styled.div`
    width:100%;
    height: 78px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 23px 20px;
    font-family: ${({$font})=>$font};
    border-bottom: 2px solid ${({$color})=>$color};

    @media screen and (width>=1440px) {
        padding: 0px 105px 0 105px;
    }
`;

const StyledNavTitle = styled.p`
    color: ${({$color})=>$color};
    font-weight: 700;
    font-size: 24px;
    letter-spacing: 10%;
    width: 100%;
`;

const StyledHamburguer = styled.img`
    display: ${({ $isVisible }) => ($isVisible ? "none":"flex")};
    @media screen and (width>=768px) {
        display: none;
    }
`;

const StyledButtonsNav = styled.div`
    width: 100%;
    background-color: ${({$color})=>$color};
    position: absolute;
    top: 78px;
    left: 0;
    display: ${({ $isVisible }) => ($isVisible ? "flex" : "none")};
    flex-direction: column;
    @media screen and (width>=768px) {
        display: flex;
        flex-direction: row;
        position: static;
        background-color: transparent;
        width: auto;
    }

`;

const StyledClose = styled.img`
    display: ${({ $isVisible }) => ($isVisible ? "flex":"none")};
    @media screen and (width>=768px) {
        display: none;
    }
`;
export {StyledClose,StyledButtonsNav,StyledNav,StyledHamburguer,StyledNavTitle}