import React from 'react';
import VideoItem from '../videoItem/videoItem';
import styles from './videoList.module.css';

const VideoPlayList = ({videos,onVideoClick,display}) => {
    return(
        <ul className={styles.videos}>
            {videos.map(video => (
                <VideoItem key={video.id} video={video} onVideoClick={onVideoClick} display={display} />
            ))}
        </ul>
    )
}

export default VideoPlayList;