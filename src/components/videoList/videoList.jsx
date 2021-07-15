import React from 'react';
import VideoItem from '../videoItem/videoItem';
import styles from './videoList.module.css';

const VideoPlayList = props => {
    return(
        <ul className={styles.videos}>
            {props.videos.map(video => (
                <VideoItem key={video.id} video={video} />
            ))}
        </ul>
    )
}

export default VideoPlayList;