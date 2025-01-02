import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledBoxCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 154px;
    height: 179px;
    align-items: center;
    background-color: ${({$colorbg})=>$colorbg};
    justify-content: center;
    border-radius: 8px;
    border: 1px solid ${({$color})=>$color};

    @media screen and (width>=768px) {
        width: 100%;
    }
`;
const StyledIcon = styled.img`
    margin-bottom: 24px;
`;
const StyledName = styled(NavLink)`
    font-family: ${({$font})=>$font};
    font-size: 18px;
    letter-spacing: 4%;
`;

const StyledBoxName = styled.div`
    height: 31px;
    border: 1px solid ${({$color})=>$color};
    display: flex;
    align-items: center;
    border-radius: 8px;
    padding-left: 15px;
    padding-right: 15px;
`;

export {StyledBoxCard,StyledIcon,StyledName,StyledBoxName}