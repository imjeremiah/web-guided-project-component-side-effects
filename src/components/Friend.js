import React from 'react';

import styled from 'styled-components';

// const kf = keyframes`
//     50% {
//         transform: scale(0.8);
//     }
//     100% {
//         opacity: 1;
//         transform: scale(1);
//     }
// `;

const StyledFriend = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
    margin 4px 0 4px 0;
    padding: 8px;
    background-color: ${pr => pr.theme.primaryColor};
    color: ${pr => pr.theme.white};

    @media ${pr => pr.theme.breakpointMobile} {
        width: initial;
    }

    transition: all 0.2s ease-in-out;
    &:hover {
        background-color: ${pr => pr.theme.tertiaryColor};
        color: ${pr => pr.theme.black};
    }

    &::before {
        content: "${pr => pr.besty ? 'heart' : 'ugh'}";
    }

    button {
        background-color: ${pr => pr.theme.tertiaryColor};
        &:hover {
            transform: scale(1.1);
        }
    }

`;

const Friend = props => {
    return (
        <StyledFriend besty={false}>
            {props.info.name}
            <button onClick={() => props.openDetails(props.info.id)}>
                See details
            </button>
        </StyledFriend>
  )
}

export default Friend;