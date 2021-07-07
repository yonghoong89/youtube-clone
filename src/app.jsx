import './app.css';
import PlayList from './components/main/playList';
import SearchHeader from './components/common/searchHeader';
import { useState } from 'react';

const headersList = {
  "Accept": "*/*",
  "User-Agent": "Thunder Client (https://www.thunderclient.io)"
 }
 
 const popularListCallApi = ()=>{
   return fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyA3Kvbuuk1SRy7seZ2egvHwkm-eU1BXvFY')
   .then(potato => potato.json())//데이터를 상황에 맞게 편집 할 수 있음
   .then(json => json.DISPLAY) //CHANGEPCTDAY ,PRICE
   .catch(error => console.log(error))
 }

 
 

function App() {

  const [popularList, setpopularList] = useState(null);
  
  const getPopularListCallApi = ()=>{
    setpopularList(popularListCallApi)
  }

  return (
    <div>
      <SearchHeader />
      <PlayList />
    </div>
  );
}

export default App;
