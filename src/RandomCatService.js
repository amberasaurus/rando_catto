
import axios from 'axios';

let newAvailableCats = [];
let lastPage = 1;
const API_KEY = process.env.REACT_APP_PEXELS_API_KEY;

const RandomCatService = {
    
    addCat: async function() {        
        if(newAvailableCats.length === 0){
            try{
                const response = await this.getMoreCats();
                lastPage++;
                response.data.photos.forEach((data) => {
                    newAvailableCats.push(data.src.medium);
                });
            }
            catch (error) {
                //any http error
                // throw something ?
            }
            return this.getRandoCat();
        }
        else{
            return this.getRandoCat();
        }        
    },

    getRandoCat: function() {
        const rand = Math.floor((Math.random() * newAvailableCats.length));
        const randomAngle = Math.floor((Math.random() * 360));
        let randomX = Math.floor((Math.random() * window.innerWidth));
        let randomY = Math.floor((Math.random() * window.innerHeight));

        let cat = newAvailableCats[rand];

        newAvailableCats.splice(rand, 1);

        return {url: cat, angle: randomAngle, x: randomX, y: randomY};
    },

    getMoreCats: async function() {
        return axios.get("https://api.pexels.com/v1/search", {
            params: {query: "Cat", per_page: 50, page: lastPage},
            headers: {"Authorization": API_KEY}
        });
    }
}

export default RandomCatService;