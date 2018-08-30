import React from 'react'

const VideoListItem = ({video, onVideoSelect}) => {
  //const video = props.video;
  //console.log(video);

  //fetch data
  const imageUrl = video.snippet.thumbnails.default.url;
  const videoTitle = video.snippet.title;
  return (
          <li onClick={() => onVideoSelect(video)} className="list-group-item">
              <div className="video-list media">
                  <div className="media-left">
                      <img className="media-object" alt="youtube thumbnails" src={imageUrl}/>
                  </div>
                  <div className="media-body">
                      <div className="media-heading">{videoTitle}</div>
                  </div>
              </div>
          </li>
      )
};

export default VideoListItem;

/*
- On Main app 'index.js' selectedVideo(), updates the state of the app
- We pass selectVideo as a prop into VideoList
- VideoList takes that property and passes it in here, 'VideoListItem'
- VideoListItem sets a event handler to call onVideoSelect(), with the video that it was passed
*/