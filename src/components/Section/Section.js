import React from 'react'
import styled from 'styled-components';
import Card from '../Card/Card.js';

const SectionWrapper = styled.div`
    height: 150px;
    width: 100%;
    padding: 0 50px;
    // border: 1px solid green;
`
const CardWrapper = styled.div`
    display: flex;
    gap: 15px;

`
function Section({title}) {
    return (
        <SectionWrapper>
            <h1>{title}</h1>
            <CardWrapper>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card/>
            </CardWrapper>
        </SectionWrapper>
    )
}

export default Section
