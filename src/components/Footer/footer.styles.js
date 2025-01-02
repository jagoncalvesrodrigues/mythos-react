import styled from "styled-components";

const StyledBox = styled.footer`
    background-color: ${({$bg})=>$bg};  display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    gap: 20px;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

const StyledSocialMedia = styled.div`
    display: flex;
    gap: 10px;

    img {
        width: 120px;
        height: auto;

        @media (max-width: 768px) {
        width: 100px;
        }
    }
`;

const StyledPhrase = styled.p`
    color: ${({$color})=>$color};
    font-family: ${({$font})=>$font};
    font-size: 14px;
    text-align: center;

    @media (min-width: 768px) {
        text-align: left;
    }
`;

export {StyledBox,StyledPhrase,StyledSocialMedia}