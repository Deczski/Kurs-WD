const fotki = [
    {
        "src" : "img/1.jpg",
        "title" : "pierwsze"
    },

    {
        "src" : "img/2.jpg",
        "title" : "drugie"
    },

    {
        "src" : "img/3.jpg",
        "title" : "trzecie"
    }

];

function photoChanger(nr){
    const img = document.querySelector("img");
    img.src = fotki[nr].src;
    img.alt = fotki[nr].title;
}

let currentSlide = 0;

photoChanger(currentSlide);

function changeCurrentSlide(direction){
    if(direction == "left"){
        currentSlide--;
        if (currentSlide == -1){
            currentSlide == 2;
        }

        else{
            currentSlide++;
            if(currentSlide == 3){
                currentSlide == 0;
            }
        }

        photoChanger(currentSlide);
    }
}

const left = document.querySelector(".left");
left.onclick = function(){changeCurrentSlide('left')};

const right = document.querySelector(".right");
right.onclick = function(){changeCurrentSlide('right')};