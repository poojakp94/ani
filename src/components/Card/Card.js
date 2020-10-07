import React from 'react'
import styled from 'styled-components'
// import img1 from './tb.jpg'

const CardWrapper = styled.div`
    height: 400px;
    width: 300px;
    padding: 0 20px 0 0;
    // border: 1px solid red;
    // border-radius: 8px;

`
const Img = styled.img`
    width: 100%;
    height: inherit;
    border-radius: 5px;
`

function Card({img}) {
    return (
        <CardWrapper>
          <Img src={img}/>  
        </CardWrapper>
    )
}

export default Card
