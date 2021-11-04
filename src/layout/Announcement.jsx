import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
height: 30px;
background-color: teal;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500;
`;

const Announcement = () => {
    return (
        <Container>
            Super Deal! get free shipments if you shop for items that cost more than R500
        </Container>
    )
}

export default Announcement
