class Youtube{
    constructor(key){
        this.key = key;
        this.requestOptions = {
            method:'GET',
            redirect:'follow',
        }
    }

    async search(query){
        const reponse = await fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
            this.requestOptions
        );
        const result_1 = await reponse.json();
        return result_1.items.map(item => ({ ...item, id: item.id.videoId }));
    }

    async mostPopular() {
        const reponse = await fetch(
            `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
            this.requestOptions
        );
        const result_1 = await reponse.json();
        return result_1.items;
    }
}

export default Youtube;