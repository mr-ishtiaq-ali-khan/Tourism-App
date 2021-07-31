import React, { Fragment } from 'react';
import CorouselView from './Components/Corousel/CorouselView';
import EmbedYoutube from './Components/EmbedYoutube/EmbedYoutube';
import './Components/StylesSheets/Gallery.css';


function App() {
  

  return (
    <Fragment>
      <CorouselView />
      <EmbedYoutube position="bottomRight" />
    </Fragment>
  );
}

export default App;
