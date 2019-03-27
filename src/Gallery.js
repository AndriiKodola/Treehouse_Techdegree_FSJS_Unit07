import React from 'react';
import { Route, Switch } from 'react-router-dom';

import GalleryItemList from './GalleryItemList';
import NotFound from './NotFound';

const Gallery = (props) => {
  let numOfMatchesInfo;//later React component to display number of returned pictures if fewer then 24
  const numOfPics = props.pics.length;

  if (numOfPics === 0) {
    numOfMatchesInfo = <span className="no-matches">No matches found.</span>;
  } else if (numOfPics < 24) {
    numOfMatchesInfo = <span className="fewer-matches">Only {numOfPics} matches found.</span>;
  }

  return (
    <div className="photo-container">
      <h2>Results</h2>
      {numOfMatchesInfo}
      {

      }
      <Switch>
        <Route exact path="/" render={() => <GalleryItemList effects={null} pics={props.pics} />} />
        <Route path="/initial" render={() => <GalleryItemList effects={null} pics={props.pics} />} />{/*Renders initial look of the pictures*/}
        <Route path="/grayscale" render={() => <GalleryItemList effects="greyscale" pics={props.pics} />} />{/*Renders pictures with grayscale filter via CSS*/}
        <Route path="/frames" render={() => <GalleryItemList effects="with-frame" pics={props.pics} />} />{/*Renders pictures with nice frames via CSS*/}
        <Route path="/chaotic" render={() => <GalleryItemList effects="chaotic" pics={props.pics} />} />{/*Renders pictures with random rotation via React stylings*/}
        <Route path="/random" render={() => <GalleryItemList effects={null} pics={props.pics} />} />{/*Renders new random data to meet project requirements*/}
        <Route render={() => <NotFound changeTopic={props.changeTopic} />} />{/*Renders 404-like message*/}
      </Switch>
    </div>
  );
};

export default Gallery;
