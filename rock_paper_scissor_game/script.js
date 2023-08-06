// get DOM elements
const gameContainer = document.querySelector(".container"),
    userResult = document.querySelector(".user_result img"),
    cpuResult = document.querySelector(".cpu_result img"),
    result = document.querySelector(".result"),
    optionImages = document.querySelectorAll(".option_image");

optionImages.forEach((image,index)=>{
    image.addEventListener("click",()=>{
        image.classList.add("active");     // this will make option opacity 1 permanantly

        //therefore lopp through each option again
        optionImages.forEach((image2,index2)=>{
            // if the current index does'nt match the clicked index
            // remove the "active" class from the other option images
            index !== index2 && image2.classList.remove("active")
        })
    })
})