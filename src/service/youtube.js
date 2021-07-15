class Youtube{
    constructor(key){
        this.key = key;
        this.requestOptions = {
            method:'GET',
            redirect:'follow',
        }
    }

    search(query){
        return fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`
            ,this.requestOptions
          )
          .then(reponse => reponse.json())
          .then(result => 
            result.items.map(item=>({...item,id:item.id.videoId}))
          )
    }

    mostPopular() {
        return fetch(
            `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`
            ,this.requestOptions
        )
        .then(reponse => reponse.json())
        .then(result => result.items)
    }
}

export default Youtube;