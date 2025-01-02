import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledBoxButton = styled.div`
    width: 100%;
    padding: 28px 0 28px 20px;
    border-bottom: 2px solid ${({$color})=>$color};

    @media screen and (width>=768px) {
        padding: 0;
        border-bottom: 0;
        text-align: right;
        
    }
`;

const StyledOption = styled(NavLink)`
    color: ${({$color})=>$color};
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 2px;
`;

export {StyledBoxButton,StyledOption}