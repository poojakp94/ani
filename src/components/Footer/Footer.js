import React from 'react'
import styled from 'styled-components'

const FooterWrap = styled.footer`
    height: 200px;
    width: 100%;
    padding: 50px;
    background: #242424;
    color: #fff;
`

function Footer() {
    return (
        <FooterWrap>
           <h3>DeepDiveAnime</h3> 
        </FooterWrap>
    )
}

export default Footer
