import React from 'react';

function EmbedYoutube ({ position }) {

    return (
        <div className={ `videoStreaming ${ position} `}>
            <iframe width="460" height="315" src="https://www.youtube.com/embed/K1QICrgxTjA?start=2" title="YouTube video player" frameBorder="0" allowFullScreen="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    )
}

export default EmbedYoutube;
