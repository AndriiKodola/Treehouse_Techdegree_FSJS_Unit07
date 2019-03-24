import React from 'react';

const GalleryItem = (props) => {
  const imgStyle = {
    transform: `rotate(${Math.random()*20-10}deg)`
  };

  return (
    <li className={props.effects}>
      {
        props.effects === 'chaotic'
        ? <img style={imgStyle} src={props.url} alt="" />
        : <img src={props.url} alt="" />
      }
    </li>
  );
}

export default GalleryItem;
