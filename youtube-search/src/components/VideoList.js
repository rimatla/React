import React from 'react';
import VideoListItem from './VideoListItem'

/*Functional Component doesn't have any need to change state. It only deals with static data, they are light-weight, inexpensive and fast*/
const VideoList = (props) => {
    //loop thorough videos
    const videoItems = props.videos.map((video) => {
        //etag is a unique identifier from youtube's response, using it to pass a unique key to each video LI
        return (
            <VideoListItem
                onVideoSelect={props.onVideoSelect}
                key={video.etag}
                video={video}
            />
        )
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    )
};

export default VideoList;
