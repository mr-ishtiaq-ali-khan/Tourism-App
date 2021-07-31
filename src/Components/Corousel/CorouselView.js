import React from 'react';
import CarouselComp from './CarouselComp';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './../StylesSheets/Gallery.css';


function CorouselView(props) {

    const corDataList = [{
                            imageData: "https://images.unsplash.com/photo-1627330250915-a1f7353a2bfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1900&q=80",
                            hightlistText: '“The mountains are the last place where man can feel truly wild.”'
                        },
                        {
                            imageData: "https://images.unsplash.com/photo-1627510774200-a35104e53268?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1901&q=80",
                            hightlistText: '"A river doesn’t just carry water, it carries life."'
                        },
                        {
                            imageData: "https://images.unsplash.com/photo-1627092956631-282690fd3752?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1901&q=80",
                            hightlistText: '"Time flies like an arrow - but fruit flies like a banana.'
                        }
                        ];

    return (
        <CarouselComp corDataList={ corDataList } />
    );
}

export default CorouselView;