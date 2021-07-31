import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

function CarouselComp ({ corDataList }) {
    const SlideContent = corDataList.map( handleSlideContent );

    return (
        <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={125} totalSlides={3} >
            <Slider className={`corouselSlider`}>
                { SlideContent }
                <div className="slideOverlay"></div>
            </Slider>
            <ButtonBack> <i class="fas fa-chevron-left"></i> </ButtonBack>
            <ButtonNext> <i class="fas fa-chevron-right"></i> </ButtonNext>
        </CarouselProvider>
      );

}

const handleSlideContent = ( listElement, iteration ) => {
    return (<Slide index={ `corouselIndex_${iteration}` }>
        <div className="corouselSlides">
            <img tag="text testing"  src={ listElement.imageData } />
            <div className="imageDescription"> { listElement.hightlistText } </div>
        </div>
    </Slide>)
} 

export default CarouselComp;