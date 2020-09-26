import React from 'react'
import styled from 'styled-components'
import img1 from './tb.jpg'

const CardWrapper = styled.div`
    height: 100px;
    width: 200px;
    // border: 1px solid red;
    // border-radius: 8px;

`
const Img = styled.img`
    width: inherit;
    height: inherit;
    border-radius: 5px;
`

function Card() {
    return (
        <CardWrapper>
          <Img src={img1}/>  
        </CardWrapper>
    )
}

export default Card
