import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

const IntroductionWrappingDiv = styled.div`
    height: 25rem;

`


function Introduction() {
    const Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return(
        <IntroductionWrappingDiv>
            <Slider {...Settings}>
            <div>
                TEST1
            </div>
            <div>
                TEST2
            </div>
            <div>
                TEST3
            </div>
        </Slider>
        </IntroductionWrappingDiv>
        


    );
}

export default Introduction;