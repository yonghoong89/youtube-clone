import VideoList from './components/videoList/videoList';
import SearchHeader from './components/searchHeader/searchHeader';
import { useEffect, useState } from 'react'; 
import styles from './app.module.css'

function App({youtube}) {
  //인기영상 리스트
  const [videos, setVideos] = useState([]);
  
  const search = query => {
    youtube.search(query)
    .then(videos=>
      setVideos(videos)
    )
  }
   
  //컴포넌트가 마운트 되었을때 호출
  useEffect(()=>{
    youtube.mostPopular()
    .then(videos=>
      setVideos(videos)
    )
  },[])


  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;