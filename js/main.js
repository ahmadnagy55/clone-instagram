let i = 0;
function sliderImg() { 
    setInterval(() => {
        let img = document.getElementById('img'),
            imgArray = ['./image/1.png', './image/2.png'];
        
    if (i < imgArray.length) {
        img.setAttribute('src', imgArray[i]);
        i++;
    } else {
        i = 0;
    }
    console.log(i)
},5000)
} 
sliderImg();