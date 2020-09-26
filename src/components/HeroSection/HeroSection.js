import React, {useState} from 'react';
import styled from 'styled-components';
import Carousel from 'react-elastic-carousel';
import img1 from './img-5.jpg';
import img2 from './given.jpg';
import img3 from './haikyuu-17.jpg';
import img4 from './wolf-children-1.jpg';
import img5 from './img-4.jpg';

const ImgWrapper = styled.div`
    width: 100%;
    heigth: 400px;
    // padding: 50px 5px;
    // border: 1px solid red;
`
const Img = styled.img`
width: inherit;
height: 400px;
// border: 1px solid black;
`
function HeroSecction() {
    const [items, setItems] = useState([{id: 1, img: img1},
    {id: 2, img: img2},
    {id: 3, img: img3},
    {id: 4, img: img4},
    {id: 5, img: img5}])
    return (
        <Carousel>
            {items.map(item => <ImgWrapper key={item.id}><Img src={item.img} alt="img1"/></ImgWrapper>)}
        </Carousel>
    )
}

export default HeroSecction
