import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 30px 0 0;
    text-align: center;
    height: calc(100vh - 160px);
`

const PageNotFound = ()=> {

    return (
        <Wrapper>
            Opps! 
            Page Not found :)
        </Wrapper>
    )
}

export default PageNotFound;