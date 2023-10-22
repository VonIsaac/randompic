const iconImg = document.querySelector('.icon-img');
const paragraphEl = document.querySelector('.paragraph');
const imgBtn = document.querySelector('.img-btn');


//declaring array object
const picTogether = [
    {
        image: `img/3.jpg.jpg`,
        caption: `"First Picture as a Couple"`
},
    {
        image: `img/11.jpg.jpeg`,
        caption: `"First Bgc Together:>>"`
},
    {
        image: `img/12.jpg.jpeg`,
        caption: `"My favorite picture of you!"`
},

    {
        image: `img/10.jpg.jpeg`,
        caption: `"This is my Favorite Picture Together"`
},
    {
        image: `img/2.jpg.jpg`,
        caption: `"I love this:>>"`
},
    {
        image: `img/8.jpg.jpg`,
        caption: `"My cheeks are fat but you're cute"`
},
    {
        image: `img/9.jpg.jpg`,
        caption: `"Yieee Kiss"`
},

    {
        image: `img/4.jpg.jpg`,
        caption: `"Cute mo Baby"`
},
    {
        image: `img/7.jpg.jpg`,
        caption: `"I Love You So Much!"`,
        
}
]

//crating Event

imgBtn.addEventListener('click', function(){
    const random = Math.floor(Math.random() * picTogether.length);

    iconImg.src = picTogether[random].image;
    paragraphEl.innerText = picTogether[random].caption;
})