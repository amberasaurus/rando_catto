
const availableCats = ["./cat1.jpg", "./cat2.jpg", "./cat3.jpg"];

const RandomCatService = {
    
    sayHello: function() {
        return 'Hello ffff';
    },

    addCat: function() {
        const rand = Math.floor((Math.random() * 3));
        const randomAngle = Math.floor((Math.random() * 360));
        console.log(window.innerWidth, window.innerHeight);
        let randomX = Math.floor((Math.random() * window.innerWidth));
        let randomY = Math.floor((Math.random() * window.innerHeight));

        return {url: availableCats[rand], angle: randomAngle, x: randomX, y: randomY};
    }
}

export default RandomCatService;