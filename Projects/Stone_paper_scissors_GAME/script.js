//get DOM elements
const gameContainer = document.querySelector(".gradient-container"),
    userResult = document.querySelector(".user_result img"),
    compResult = document.querySelector(".comp_result img"),
    result = document.querySelector(".result"),
    optionImages = document.querySelectorAll(".option_image");

optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");  //this will make option opacity 1 permanntly
        //therefore loop through each option again
        optionImages.forEach((image2, index2) => {
            //if the current index does'nt match the clicked index
            //remove the "active" class from the otehr option images
            index !== index2 && image2.classList.remove("active")
        });

        // //get the source of the clicked option image
        let imageSrc = e.target.querySelector("img").src;
        userResult.src = imageSrc;

    });
});