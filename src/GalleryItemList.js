//this components needed to use Route inside Gallery.js

import React from 'react';
import GalleryItem from './GalleryItem';

const GalleryItemList = (props) => (
  <ul>
    {props.pics.map(pic => <GalleryItem effects={props.effects} url={`https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`} key={pic.id}/>)}
  </ul>
)

export default GalleryItemList;
