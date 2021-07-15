import VideoList from './components/videoList/videoList';
import SearchHeader from './components/searchHeader/searchHeader';
import { useEffect, useState } from 'react'; 
import styles from './app.module.css'
import VideoDetail from './components/videoDetail/videoDetail';

function App({youtube}) {
  //인기영상 리스트
  const [videos, setVideos] = useState([]);
  const [selectVideo, setSelectVideo] = useState(null);
  
  const search = query => {
    youtube.search(query)
    .then(videos=> {
      setVideos(videos)
      setSelectVideo(null)
      }
    )
  }
   
  //컴포넌트가 마운트 되었을때 호출
  useEffect(()=>{
    youtube.mostPopular()
    .then(videos=>
      setVideos(videos)
    )
  },[])

  const handleVideoClick = (video) =>{
    setSelectVideo(video)
  }

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <section className={styles.content}>
        {selectVideo &&
          <div className={styles.detail}>
            <VideoDetail video={selectVideo} />
          </div>
        }
        <div className={styles.list}>
          <VideoList videos={videos} onVideoClick={handleVideoClick} display={selectVideo ? 'list': 'grid'} />
        </div>
      </section>
    </div>
  );
}

export default App;