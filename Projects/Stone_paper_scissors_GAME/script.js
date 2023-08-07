//get DOM elements

const gameContainer = document.querySelector(".gradient-container"),
    userResult = document.querySelector(".user_image img"),
    compResult = document.querySelector(".comp_image img"),
    result = document.querySelector(".result"),
    optionImages = document.querySelectorAll(".option_image");

optionImages.forEach((image,index)=>{
    image.addEventListener("click",(e)=>{
        image.classList.add("active");
    })
})

